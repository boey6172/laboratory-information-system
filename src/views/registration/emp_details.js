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
import instance from '../../instance/instance';



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
  const [taxstat, setTaxStat] = useState([]);
  const [rank, setRank] = useState([]);
  const [regionAssignment, setRegionAssignment] = useState([]);




  useEffect(() => {
    // refetch();
    instance.get("./taxstatuses/gettaxStat").then((response) => {
      setTaxStat(response.data)
    }) 
    instance.get("./ranks/getRank").then((response) => {
      setRank(response.data)
    }) 
    instance.get("./region/getregion").then((response) => {
      setRegionAssignment(response.data)
    }) 
  }, []);

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
 
            <Card>
                <CardHeader
                  title="Employee Details"
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
                        id="empDate"
                        label="Date of Employment"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={formik.formik.values.empDate}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.empDate && Boolean(formik.formik.errors.empDate)}
                        helperText={formik.formik.touched.empDate && formik.formik.errors.empDate}
                      />

                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <FormControl 
                        // variant="outlined" 
                        className={classes.formControl} 
                        fullWidth
                      >
                        <InputLabel id="demo-simple-select-label">Rank</InputLabel>
                        <Select
                          id="outlined-basic"
                          name="rank"
                          label="Rank"
                          labelId="demo-simple-select-label"
                          // variant="outlined"
                          value={formik.formik.values.rank}
                          onChange={formik.formik.handleChange}
                          error={formik.formik.touched.rank && Boolean(formik.formik.errors.rank)}
                          // helperText={formik.formik.touched.taxStatus && formik.formik.errors.taxStatus}  
                        >
                          {rank?.map(( {id, rank} , index) => (
                            <MenuItem value={id} key={index}>
                              {rank}
                            </MenuItem>
                          ))}
                        </Select>
                        <FormHelperText
                          error={formik.formik.touched.rank && Boolean(formik.formik.errors.rank)}
                        >
                          {formik.formik.touched.rank && formik.formik.errors.rank}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <FormControl 
                        // variant="outlined" 
                        className={classes.formControl} 
                        fullWidth
                      >
                        <InputLabel id="demo-simple-select-label">Region Assignment</InputLabel>
                        <Select
                          id="outlined-basic"
                          name="regionAssignment"
                          label=" Region Assignment"
                          labelId="demo-simple-select-label"
                          // variant="outlined"
                          value={formik.formik.values.regionAssignment}
                          onChange={formik.formik.handleChange}
                          error={formik.formik.touched.regionAssignment && Boolean(formik.formik.errors.regionAssignment)}
                          // helperText={formik.formik.touched.taxStatus && formik.formik.errors.taxStatus}  
                        >
                          {regionAssignment?.map(( {id, regionAssignment} , index) => (
                            <MenuItem value={id} key={index}>
                              {regionAssignment}
                            </MenuItem>
                          ))}
                        </Select>
                        <FormHelperText
                          error={formik.formik.touched.regionAssignment && Boolean(formik.formik.errors.regionAssignment)}
                        >
                          {formik.formik.touched.regionAssignment && formik.formik.errors.regionAssignment}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      md={3}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="philNumber"
                        label="Phil. Health no."
                        // variant="outlined"
                        value={formik.formik.values.philNumber}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.philNumber && Boolean(formik.formik.errors.philNumber)}
                        helperText={formik.formik.touched.philNumber && formik.formik.errors.philNumber}
                      />
                    </Grid>
                    <Grid
                      item
                      md={3}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="gsisNumber"
                        label="GSIS Number"
                        // variant="outlined"
                        value={formik.formik.values.gsisNumber}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.gsisNumber && Boolean(formik.formik.errors.gsisNumber)}
                        helperText={formik.formik.touched.gsisNumber && formik.formik.errors.gsisNumber}  
                      />  
                    </Grid>
                    <Grid
                      item
                      md={3}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="nhmcNumber"
                        label="NHMC Acc. No."
                        // variant="outlined"
                        value={formik.formik.values.nhmcNumber}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.nhmcNumber && Boolean(formik.formik.errors.nhmcNumber)}
                        helperText={formik.formik.touched.nhmcNumber && formik.formik.errors.nhmcNumber}
                      /> 
                    </Grid>
                    <Grid
                      item
                      md={3}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="tinNumber"
                        label="Tin Number"
                        // variant="outlined"
                        value={formik.formik.values.tinNumber}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.tinNumber && Boolean(formik.formik.errors.tinNumber)}
                        helperText={formik.formik.touched.tinNumber && formik.formik.errors.tinNumber}
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
                        name="pagIbigNumber"
                        label="PagIbig Number"
                        // variant="outlined"
                        value={formik.formik.values.pagIbigNumber}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.pagIbigNumber && Boolean(formik.formik.errors.pagIbigNumber)}
                        helperText={formik.formik.touched.pagIbigNumber && formik.formik.errors.pagIbigNumber}
                      />   
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <FormControl 
                        // variant="outlined" 
                        className={classes.formControl} 
                        fullWidth
                      >
                        <InputLabel id="demo-simple-select-label"> Tax Status</InputLabel>
                        <Select
                          id="outlined-basic"
                          name="taxstat"
                          label=" Tax Status"
                          labelId="demo-simple-select-label"
                          // variant="outlined"
                          value={formik.formik.values.taxstat}
                          onChange={formik.formik.handleChange}
                          error={formik.formik.touched.taxstat && Boolean(formik.formik.errors.taxstat)}
                          // helperText={formik.formik.touched.taxStatus && formik.formik.errors.taxStatus}  
                        >
                          {taxstat?.map(( {id, description} , index) => (
                            <MenuItem value={id} key={index}>
                              {description}
                            </MenuItem>
                          ))}
                        </Select>
                        <FormHelperText
                          error={formik.formik.touched.taxstat && Boolean(formik.formik.errors.taxstat)}
                        >
                          {formik.formik.touched.taxstat && formik.formik.errors.taxstat}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="salaryGrade"
                        label="Salary Grade"
                        // variant="outlined"
                        value={formik.formik.values.salaryGrade}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.salaryGrade && Boolean(formik.formik.errors.salaryGrade)}
                        helperText={formik.formik.touched.salaryGrade && formik.formik.errors.salaryGrade}
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