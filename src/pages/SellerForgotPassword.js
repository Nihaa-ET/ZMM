import  React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

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
const SellerForgotPassword = () => {

  const [data,setData] = useState({
    phoneNumber : "",
    enteredOtp : ""
  })

    const navigate  = useNavigate();

    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setData((prev) => ({
        ...prev,
        [name]: value
      }));
    };

    const handleOnSubmit = async(event) => {
      event.preventDefault();
      try {
        const response = await fetch(SummaryApi.SellerForgotPassword.url, {
          method: SummaryApi.SellerForgotPassword.method,
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
        toast.error("Error during registration");
      }
      
    };
    
    const handleVerifyOtp = async (e) => {
      e.preventDefault();
      if (!data.enteredOtp) {
        return toast.error("Please enter the OTP");
      }
  
      try {
        const response = await fetch(SummaryApi.VerifyForgotPasswordOtp.url, {
          method: SummaryApi.VerifyForgotPasswordOtp.method,
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ phoneNumber: data.phoneNumber, enteredOtp: data.enteredOtp })
        });
  
        const dataApi = await response.json();
        if (dataApi.success) {
          toast.success(dataApi.message);
          navigate('/seller-reset-password');
        } else {
          toast.error(dataApi.message);
        }
      } catch (error) {
        toast.error("Error during OTP verification");
      }
    };
   
  
  
    const defaultTheme = createTheme();

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
         Forgotten Password
        </Typography>
        <Box component="form" onSubmit={handleOnSubmit} noValidate sx={{ mt: 1 }}>
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
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            
          >
            Send OTP
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
            
            <Grid item>
              <Link to='/seller-login'  variant="body2">
                {"Already have a account? Signin"}
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

export default SellerForgotPassword