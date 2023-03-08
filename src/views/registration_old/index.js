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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Input,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import PhilippineMap from "../../maps/data.json";


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

  return (
    <Page
      className={classes.root}
      title="Registration "
    >      
      <Container maxWidth="lg">
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
              subheader="Address"
              title="Address"
            />
            <Divider />
            <CardContent>
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
            <Divider />
            <Box
              display="flex"
              justifyContent="flex-end"
              p={2}
            >
              <Button
                color="primary"
                variant="contained"
                // onClick={handlePost}
              >
                Save
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
      
    </Container>
 
    </Page>
  )
}

export default Index;