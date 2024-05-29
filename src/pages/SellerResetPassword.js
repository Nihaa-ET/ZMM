import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

const defaultTheme = createTheme();
const SellerResetPassword = () => {
    const [data, setData] = useState({
        phoneNumber : "",
        newPassword : "",
        confirmPassword : ""
    })


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
        if (data.newPassword !== data.confirmPassword) {
          return toast.error("Please Enter new password and confirm password");
        }
    
        try {
          const response = await fetch(SummaryApi.SellerResetPassword.url, {
            method: SummaryApi.SellerResetPassword.method,
            credentials: 'include',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
    
          const dataApi = await response.json();
          if (dataApi.success) {
            toast.success(dataApi.message);
            navigate('/seller-login')
            
          } else {
            toast.error(dataApi.message);
          }
        } catch (error) {
          toast.error("Error during registration");
        }
      };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5">Reset Password</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
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
                  name="newPassword"
                  label="newPassword"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={data.newPassword}
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
                Reset Password
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
  )
}

export default SellerResetPassword