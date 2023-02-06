import { Box, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React,{useState} from "react";

const CustomerPage = (props)=>{
const [customerData,setCustomerData]=useState(props.data.resultObj[0]);
const handleChange=(e)=>{
    const {name,value} = e.target;
    setCustomerData({...customerData,
    [name]:value})
}
console.log(customerData)

  return(
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
        noValidate
        elevation={8}
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center" sx={{ mb: 4 }}>
             Customer Details
          </Typography>
          <Box component={'form'} >
          <Grid container spacing={3}>
          <Grid item xs={12} >
              <TextField
                required
                id="customerName"
                name="firstName"
                label="Customer name"
                value={customerData.firstName}
                fullWidth
                autoComplete=""
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            </Grid>
            </Box>
            </Paper>
            </Container>
            
  )

}
export async function getServerSideProps(context){
    const { customerId } = context.query
    const res = await fetch("http://localhost:1998/api/customer?customerId="+customerId)
    const data = await res.json();
    console.log(data);
    return{props:{data}}
}

export default CustomerPage