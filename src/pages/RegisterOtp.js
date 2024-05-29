import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-toastify';
import SummaryApi from '../common';


const defaultTheme = createTheme();

const RegisterOtp = () => {
    const [data, setData] = useState({
        phoneNumber : "",
        enteredOtp: ""
    })

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
          ...prev,
          [name]: value
        }));
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
        <Box component="form" noValidate  sx={{ mt: 3 }}>
          <Grid container spacing={2}>
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
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </Button> 
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  )
}

export default RegisterOtp