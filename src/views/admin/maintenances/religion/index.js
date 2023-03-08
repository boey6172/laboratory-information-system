import React,{useState,useEffect} from 'react';
import {
  Box,
  Container,
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

  const [religions, setReligions] = useState(null);
  const [values,setValues ] =  useState(null);


  useEffect(()=> {
    instance.get("./religion").then((response) => {
      setValues(response.data)
      setReligions(response.data)
    }) 
  },[])

  const searchReligions=(e)=>{
    var  { name,value }= e.target

    const filtered = religions.filter(data => {
      return data.religion.toLowerCase().includes(value.toLowerCase());
    })

    console.log(filtered)
    setReligions(filtered)
    if( value === ""){
      setReligions(values)
    }
    console.log(value)

  }

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Religion"
    >
      <Container maxWidth={false}>
        <Toolbar  search= {searchReligions}/> 
        <Box mt={3}>
          <Result  religions={religions}/>
        </Box>
      </Container>
    </Page>
  );
};

export default Index;
