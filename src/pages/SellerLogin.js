import React, { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import Context from '../context';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://zeromiddleman.com/">
         ZeroMiddleMan
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  // TODO remove, this demo shouldn't need to reset the theme.
  
  const defaultTheme = createTheme();

const SellerLogin = () => {

  const [data, setData] = useState({
    email : "",
    phoneNumber : "",
    password : "",
    enteredOtp : ""
  })

  const navigate = useNavigate();
const fetchSellerDetails = useContext(Context)

  // console.log("general",generalContext.fetchSellerDetails());

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
          const response = await fetch(SummaryApi.SellerLogin.url, {
            method: SummaryApi.SellerLogin.method,
            credentials: 'include',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
    
          const dataApi = await response.json();
          if (dataApi.success) {
            toast.success(dataApi.message);
          } else {
            toast.error(dataApi.message);
          }
        } catch (error) {
          toast.error("Error during Login");
        }
        
      };

      const handleVerifyOtp = async (e) => {
        e.preventDefault();
        if (!data.enteredOtp) {
          return toast.error("Please enter the OTP");
        }
    
        try {
          const response = await fetch(SummaryApi.VerifyLoginOtp.url, {
            method: SummaryApi.VerifyLoginOtp.method,
            credentials: 'include',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ phoneNumber: data.phoneNumber, enteredOtp: data.enteredOtp })
          });
    
          const dataApi = await response.json();
          if (dataApi.success) {
            toast.success(dataApi.message);
            navigate('/');
            fetchSellerDetails()
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
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={data.password}
              onChange={handleOnChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
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
            <Grid container>
              <Grid item xs>
                <Link to="/seller-forgot-password"  variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/seller-signup"  variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default SellerLogin