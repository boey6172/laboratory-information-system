import React,{useState,useEffect} from 'react';
import {
  Box,
  Container,
  Button,
  makeStyles
} from '@material-ui/core';
import Page from '../../../../components/Page';
import Result from './Result';
import Toolbar from './Toolbar';
import instance from '../../../../instance/instance';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Index = () => {

  const [packages, setPackages] = useState(null);
  const [values,setValues ] =  useState(null);


  useEffect(()=> {
    instance.get("./package").then((response) => {
      setValues(response.data)
      setPackages(response.data)
    }) 
  },[])

  const searchPackages=(e)=>{
    var  { name,value }= e.target

    const filtered = packages.filter(data => {
      return data.packages.toLowerCase().includes(value.toLowerCase());
    })

    console.log(filtered)
    setPackages(filtered)
    if( value === ""){
      setPackages(values)
    }
    console.log(value)

  }

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Package"
    >
      <Container maxWidth={false}>
        <Toolbar  search= {searchPackages}/> 
        <Box mt={3}>
          <Result  packages={packages}/>
        </Box>
      </Container>
    </Page>
  );
};

export default Index;
