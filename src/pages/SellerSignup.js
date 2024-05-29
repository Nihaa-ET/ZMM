import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Grid, Box, Typography, Container, CssBaseline } from '@mui/material';
import { toast } from 'react-toastify';
import { createTheme,ThemeProvider } from '@mui/material/styles';

import SummaryApi from '../common/index';
const defaultTheme = createTheme();
const SellerSignup = () => {
  const [data, setData] = useState({
    sellerName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    enteredOtp: ""
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      return toast.error("Please check password and confirm password");
    }

    try {
      const response = await fetch(SummaryApi.SellerSignup.url, {
        method: SummaryApi.SellerSignup.method,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const dataApi = await response.json();
      if (dataApi.success) {
        toast.success(dataApi.message);
        // navigate('/seller-register-otp-verify')
      } else {
        toast.error(dataApi.message);
      }
    } catch (error) {
      toast.error("Error during registration");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!data.enteredOtp) {
      return toast.error("Please enter the OTP");
    }

    try {
      const response = await fetch(SummaryApi.VerifyRegisterOtp.url, {
        method: SummaryApi.VerifyRegisterOtp.method,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ phoneNumber: data.phoneNumber, enteredOtp: data.enteredOtp })
      });

      const dataApi = await response.json();
      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate('/seller-login');
      } else {
        toast.error(dataApi.message);
      }
    } catch (error) {
      toast.error("Error during OTP verification");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5">Seller Register</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="sellerName"
                  required
                  fullWidth
                  id="sellerName"
                  label="Name"
                  autoFocus
                  value={data.sellerName}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="companyName"
                  label="Company Name"
                  name="companyName"
                  autoComplete="organization"
                  value={data.companyName}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="tel"
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="tel"
                  value={data.phoneNumber}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={data.password}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
               <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="enteredOtp"
                  label="Enter OTP"
                  type="number"
                  id="enteredOtp"
                  autoComplete="otp"
                  value={data.enteredOtp}
                  onChange={handleOnChange}
                />
              </Grid>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </Button> 
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/seller-login" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SellerSignup;
