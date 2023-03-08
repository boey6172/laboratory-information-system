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
import {useFormik} from "formik";
import axios from 'axios';
import validationSchema from '../../helper/validation';
import PhilippineMap from '../../maps/data.json'


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

const Index = () => {
  const classes = useStyles();
  const states = {
    present_address: {
      location: "",
      region: "",
      city: "",
      province: "",
      barangay: "",
      postal_code: "",
    },
  };

  const [province, setProvince] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [municipality, setMunicipality] = useState([]);
  const [selectedMunicipality, setSelectedMunicipality] = useState([]);
  const [barangay, setBarangay] = useState([]);
  const [state, setState] = useState(states);


  const onChangeRegion = (e) => {
    const data = e.target.value;
    state.present_address.region = data;

    const [filterMap] = PhilippineMap?.filter((map) => {
      return map.region.region_name === data;
    });

    const province = filterMap.region.province_list;

    setProvince(Object.keys(province));
    setSelectedProvince(province);
  };

  const onChangeProvince = (e) => {
    const data = [e.target.value];
    state.present_address.province = data;

    const filterProvince = Object.keys(selectedProvince)
      .filter((key) => data.includes(key))
      .reduce((obj, key) => {
        obj["municipality"] = selectedProvince[key].municipality_list;
        return obj;
      }, {});
    setMunicipality(Object.keys(filterProvince.municipality));
    setSelectedMunicipality(filterProvince);
    // console.log(province);
  };

  const onChangeMunicipality = (e) => {
    const data = [e.target.value];
    state.present_address.municipality = data;

    const filterMunicipality = Object.keys(selectedMunicipality.municipality)
      .filter((key) => data.includes(key))
      .reduce((obj, key) => {
        obj = selectedMunicipality.municipality[key];
        return obj;
      }, {});

    setBarangay(filterMunicipality.barangay_list);
  };

  const formik = useFormik({
    initialValues: {
      rank: '',
      gender:'',
      username:'',
      password:'',
      confirmPassword:'',
      firstname:'',
      middlename:'',
      lastname:'',
      suffix:'',
      birthday:'',
      contactNumber:'',
      region:'',
      province:'',
      munincipality:'',
      barangay:'',
      empDate:'',
      philNumber:'',
      gsisNumber:'',
      nhmcNumber:'',
      tinNumber:'',
      taxstat:'',
      salaryGrade:'',
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
    alert("success")
  }


  
  return (
    <Page
      className={classes.root}
      title="Signup "
    >      
      <Container  
        maxWidth="lg"
        textAlign="center"
      >
        
        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Create a new Account.
          </Typography>
          <Grid
            container
            spacing={2}
            align="center"
          >
            <Grid
              item
              lg={2}
              md={2}
              xs={2}
            > 

            </Grid>
            <Grid
              item
              lg={8}
              md={8}
              xs={8}
              
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
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
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
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
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
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

            <br/>
              <Card >
                <CardHeader
                  title="Personal Info"
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
                        name="firstname"
                        label="First Name"
                        // variant="outlined"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                        helperText={formik.touched.firstname && formik.errors.firstname}
                      />
                    </Grid>
                    <Grid
                      item
                      md={2}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="middlename"
                        label="Middle Name"
                        // variant="outlined"
                        value={formik.values.middlename}
                        onChange={formik.handleChange}
                        error={formik.touched.middlename && Boolean(formik.errors.middlename)}
                        helperText={formik.touched.middlename && formik.errors.middlename}  
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
                        name="lastname"
                        label="Last Name"
                        // variant="outlined"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                        helperText={formik.touched.lastname && formik.errors.lastname}
                      /> 
                    </Grid>
                    <Grid
                      item
                      md={2}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="suffix"
                        label="Suffix"
                        // variant="outlined"
                        value={formik.values.suffix}
                        onChange={formik.handleChange}
                        error={formik.touched.suffix && Boolean(formik.errors.suffix)}
                        helperText={formik.touched.suffix && formik.errors.suffix}
                      />
                    </Grid> 
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >  
                      <FormControl  
                        // variant="outlined" 
                        className={classes.formControl} 
                        fullWidth
                      >
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                          id="outlined-basic"
                          name="gender"
                          label="Gender"
                          labelId="demo-simple-select-label"
                          value={formik.values.gender}
                          onChange={formik.handleChange}
                          error={formik.touched.gender && Boolean(formik.errors.gender)}
                          // helperText={formik.touched.gender && formik.errors.gender}  
                        >
                        <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"Male"}>Male</MenuItem>
                          <MenuItem value={"Female"}>Female</MenuItem>
                        </Select>
                        <FormHelperText
                          error={formik.touched.gender && Boolean(formik.errors.gender)}
                        >
                          {formik.touched.gender && formik.errors.gender}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="birthday"
                        label="Birthday"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={formik.values.birthday}
                        onChange={formik.handleChange}
                        error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                        helperText={formik.touched.birthday && formik.errors.birthday}
                      />
                    </Grid>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="contactNumber"
                        label="Contact Number"
                        // variant="outlined"
                        value={formik.values.contactNumber}
                        onChange={formik.handleChange}
                        error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
                        helperText={formik.touched.contactNumber && formik.errors.contactNumber}
                      />
                  </Grid>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={3}
                  xs={12}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Region
                  </InputLabel>
                  <Select
                    fullWidth
                    onChange={(e) => {
                      onChangeRegion(e);
                      // onChange(e);
                    }}
                    // onBlur={onBlur}
                    defaultValue={state.present_address.region}
                    label="Region"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {PhilippineMap?.map((data, index) => (
                      <MenuItem value={data?.region?.region_name} key={index}>
                        {data?.region?.region_name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid
                  item
                  md={3}
                  xs={12}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Province
                  </InputLabel>
                  <Select
                    fullWidth
                    onChange={(e) => {
                      onChangeProvince(e);
                      // onChange(e);
                    }}
                    // onBlur={onBlur}
                    defaultValue={state.present_address.province}
                    label="Province"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {province?.map((province, index) => (
                      <MenuItem value={province} key={index}>
                        {province}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid
                  item
                  md={3}
                  xs={12}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Municipality
                  </InputLabel>
                  <Select
                    fullWidth
                    onChange={(e) => {
                      onChangeMunicipality(e);
                      // onChange(e);
                    }}
                    // onBlur={onBlur}
                    defaultValue={state.present_address.municipality}
                    label="Municipality"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {municipality?.map((municipality, index) => (
                      <MenuItem value={municipality} key={index}>
                        {municipality}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid
                  item
                  md={3}
                  xs={12}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Barangay
                  </InputLabel>
                  <Select
                    fullWidth 
                    // onChange={onChange}
                    // onBlur={onBlur}
                    defaultValue={state.present_address.barangay}
                    label="Barangay"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {barangay?.map((barangay, index) => (
                      <MenuItem value={barangay} key={index}>
                        {barangay}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
                </CardContent>
              </Card>
              <br/>
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
                        value={formik.values.empDate}
                        onChange={formik.handleChange}
                        error={formik.touched.empDate && Boolean(formik.errors.empDate)}
                        helperText={formik.touched.empDate && formik.errors.empDate}
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
                        name="philNumber"
                        label="Phil. Health no."
                        // variant="outlined"
                        value={formik.values.philNumber}
                        onChange={formik.handleChange}
                        error={formik.touched.philNumber && Boolean(formik.errors.philNumber)}
                        helperText={formik.touched.philNumber && formik.errors.philNumber}
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
                        name="gsisNumber"
                        label="GSIS Number"
                        // variant="outlined"
                        value={formik.values.gsisNumber}
                        onChange={formik.handleChange}
                        error={formik.touched.gsisNumber && Boolean(formik.errors.gsisNumber)}
                        helperText={formik.touched.gsisNumber && formik.errors.gsisNumber}  
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
                        value={formik.values.nhmcNumber}
                        onChange={formik.handleChange}
                        error={formik.touched.nhmcNumber && Boolean(formik.errors.nhmcNumber)}
                        helperText={formik.touched.nhmcNumber && formik.errors.nhmcNumber}
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
                        value={formik.values.tinNumber}
                        onChange={formik.handleChange}
                        error={formik.touched.tinNumber && Boolean(formik.errors.tinNumber)}
                        helperText={formik.touched.tinNumber && formik.errors.tinNumber}
                      />   
                    </Grid>
                    <Grid
                      item
                      md={3}
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
                          value={formik.values.taxstat}
                          onChange={formik.handleChange}
                          error={formik.touched.taxstat && Boolean(formik.errors.taxstat)}
                          // helperText={formik.touched.taxStatus && formik.errors.taxStatus}  
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"Single"}>Single</MenuItem>
                          <MenuItem value={"Married"}>Married</MenuItem>
                        </Select>
                        <FormHelperText
                          error={formik.touched.taxstat && Boolean(formik.errors.taxstat)}
                        >
                          {formik.touched.taxstat && formik.errors.taxstat}
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
                        name="salaryGrade"
                        label="Salary Grade"
                        // variant="outlined"
                        value={formik.values.salaryGrade}
                        onChange={formik.handleChange}
                        error={formik.touched.salaryGrade && Boolean(formik.errors.salaryGrade)}
                        helperText={formik.touched.salaryGrade && formik.errors.salaryGrade}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider/>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  p={1}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    // onClick={handlePost}  
                    fullWidth   
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