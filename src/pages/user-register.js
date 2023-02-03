import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import { Paper, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import axios from 'axios'

export default function Register() {
  let initialState ={
    companyName:"",
    firstName:"",
    lastName:"",
    middleName:"",
    phoneNumber:"",
    email:"",
    password:"",
    address:"",
    gstNumber:""

  }
  const router = useRouter();
  const [formData,setFormdata] = React.useState(initialState)
  const formRef = React.useRef();
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormdata({...formData,
      [name]:value})
      formRef.current.reportValidity()

  }
  const handleSubmit =(event)=>{
    let path ='/login'
    console.log(formData)
    axios.post('http://localhost:1998/api/register', formData)
    .then(function (response) {
      console.log(response);
      router.push(path);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
        noValidate
        elevation={8}
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center" sx={{ mb: 4 }}>
             Fill Company Details
          </Typography>
          <Box component={'form'} ref={formRef}>
          <Grid container spacing={3}>
          <Grid item xs={12} >
              <TextField
                required
                id="companyName"
                name="companyName"
                label="Company name"
                fullWidth
                autoComplete=""
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="middleName"
                name="middleName"
                label="Middle Name"
                fullWidth
                autoComplete=""
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
              required
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                fullWidth
                autoComplete=""
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="email"
                label="Email"
                type="email"
                name="email"
                fullWidth
                autoComplete="off"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="password"
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address"
                label="Address"
                fullWidth
                multiline
                name="address"
                autoComplete=""
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                id="gstno"
                fullWidth
                label="GST Number"
                autoComplete=""
                name="gstNumber"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={handleSubmit}  variant="contained" sx={{ mt: 3, ml: 1 }}>
                Register
              </Button>
            </Grid>
          </Grid>
          </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
