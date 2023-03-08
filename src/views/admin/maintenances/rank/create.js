import React, { useState, useEffect } from 'react';
import Page from '../../../../components/Page';
import {
  Container,
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  makeStyles,
} from '@material-ui/core';
import {useFormik} from "formik";
import axios from 'axios';
import * as Yup from 'yup'
import instance from '../../../../instance/instance';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const validationSchema = Yup.object({
  rank: Yup
    .string('Enter a Rank')
    .min(2, 'Rank should be of minimum 2 characters length')
    .required('Enter a Rank'),
  // password: yup
  //   .string('Enter your password')
  //   .min(8, 'Password should be of minimum 8 characters length')
  //   .required('Password is required'),
});

const Index = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      rank: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      // alert(JSON.stringify(values, null, 2));
      onSubmit(values)
      resetForm();
      
    },
  });

  const onSubmit = (data) => {
    // axios.post("http://localhost:3001/ranks", data).then((response)=>{
    //     console.log(response.data)
    //   })
    instance.post("./ranks", data,
    {
      headers:{
          token:localStorage.getItem("token")
      }
    }
    ).then((response) => {
      if(!response.data.error)
      {
        // console.log(response)
        alert("Saved")
      }else{
        if(response.data.error.message){
          alert(response.data.error.message)
        }else{
          console.log(response.data.error)
          alert(response.data.error)
        }
      }
    }) 
  }

  return (
    <Page
      className={classes.root}
      title="Registration "
    >      
      <Container maxWidth="lg">
      <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        spacing={1}
      >
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
        >
          <Card>
            <CardHeader
              subheader="Please Input your Rank"
              title="Rank"
            />
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={1}
              >
                <TextField
                  // fullWidth
                  id="outlined-basic"
                  name="rank"
                  label="Rank"
                  variant="outlined"
                  value={formik.values.rank}
                  onChange={formik.handleChange}
                  error={formik.touched.rank && Boolean(formik.errors.rank)}
                  helperText={formik.touched.rank && formik.errors.rank}
                />
              </Grid>
            </CardContent>
            <Divider />
            <Box
              display="flex"
              justifyContent="flex-end"
              p={2}
            >
              <Button
                color="primary"
                variant="contained"
                type="submit"
                // onClick={handlePost}
              >
                Save
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
      </form>
    </Container>
 
    </Page>
  )
}

export default Index;