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

  const [regionAssignments, setregionAssignments] = useState(null);
  const [values,setValues ] =  useState(null);


  useEffect(()=> {
    instance.get("region").then((response) => {
      setValues(response.data)
      setregionAssignments(response.data)
    }) 
  },[])

  const searchregionAssignments=(e)=>{
    var  { name,value }= e.target

    const filtered = regionAssignments.filter(data => {
      return data.regionAssignment.toLowerCase().includes(value.toLowerCase());
    })

    console.log(filtered)
    setregionAssignments(filtered)
    if( value === ""){
      setregionAssignments(values)
    }
    console.log(value)

  }

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Region Assignment"
    >
      <Container maxWidth={false}>
        <Toolbar  search= {searchregionAssignments}/> 
        <Box mt={3}>
          <Result  regionAssignments={regionAssignments}/>
        </Box>
      </Container>
    </Page>
  );
};

export default Index;
