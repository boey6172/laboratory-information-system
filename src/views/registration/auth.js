import React, { useState, useEffect } from 'react';
import Page from '../../components/Page';
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
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)

  },
  container:{
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  },
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Index = (formik) => {
  const classes = useStyles();
  return (
    <Page
      className={classes.root}
      title="Signup "
    >      
      <Container  
        maxWidth="lg"
        textAlign="center"
      >
        
        <form 
            // onSubmit={formik.formik.handleSubmit}
        >
          <Typography variant="h3" gutterBottom>
            {/* Create a new Account. */}
          </Typography>
          <Grid
            container
            spacing={2}
            align="center"
          >
            <Grid
              item
              lg={1}
              md={1}
              xs={1}
            > 

            </Grid>
            <Grid
              item
              lg={10}
              md={10}
              xs={10}
              
            >
              <Card >
                <CardHeader
                  title="Account Info"
                />
                <Divider/>
                <CardContent>
                  <Grid
                    container
                    spacing={1}
                  >                
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="username"
                        label="Username"
                        // variant="outlined"
                        value={formik.formik.values.username}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.username && Boolean(formik.formik.errors.username)}
                        helperText={formik.formik.touched.username && formik.formik.errors.username}
                      />
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="password"
                        label="Password"
                        type="password"
                        // variant="outlined"
                        value={formik.formik.values.password}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.password && Boolean(formik.formik.errors.password)}
                        helperText={formik.formik.touched.password && formik.formik.errors.password}
                      />
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        // variant="outlined"
                        value={formik.formik.values.confirmPassword}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.confirmPassword && Boolean(formik.formik.errors.confirmPassword)}
                        helperText={formik.formik.touched.confirmPassword && formik.formik.errors.confirmPassword}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
   
            </Grid>
          </Grid>
        </form>
      </Container> 
    </Page>
  )
}

export default Index;