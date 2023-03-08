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
  religion: Yup
    .string('Enter Religion')
    .min(2, 'Religion should be of minimum 2 characters length')
    .required('Religion Required'),
  // password: yup
  //   .string('Enter your password')
  //   .min(8, 'Password should be of minimum 8 characters length')
  //   .required('Password is required'),
});

const Index = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      religion: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      // alert(JSON.stringify(values, null, 2));
      onSubmit(values)
      resetForm();
      
    },
  });

  const onSubmit = (data) => {
    
    instance.post("religion", data).then((response) => {
      console.log(response)
      alert('done')
    }) 

  }
  
  return (
    <Page
      className={classes.root}
      title="Religion "
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
              subheader="Please Input your Religion"
              title="Religion"
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
                  name="religion"
                  label="Religion"
                  variant="outlined"
                  value={formik.values.religion}
                  onChange={formik.handleChange}
                  error={formik.touched.religion && Boolean(formik.errors.religion)}
                  helperText={formik.touched.religion && formik.errors.religion}
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