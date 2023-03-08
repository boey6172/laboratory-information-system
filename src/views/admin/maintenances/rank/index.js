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

  const [ranks, setRanks] = useState(null);
  const [values,setValues ] =  useState(null);


  useEffect(()=> {
    instance.get("./ranks").then((response) => {
      setValues(response.data)
      setRanks(response.data)
    }) 
  },[])

  const searchRanks=(e)=>{
    var  { name,value }= e.target

    const filtered = ranks.filter(data => {
      return data.rank.toLowerCase().includes(value.toLowerCase());
    })

    console.log(filtered)
    setRanks(filtered)
    if( value === ""){
      setRanks(values)
    }
    console.log(value)

  }

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Ranks"
    >
      <Container maxWidth={false}>
        <Toolbar  search= {searchRanks}/> 
        <Box mt={3}>
          <Result  ranks={ranks}/>
        </Box>
      </Container>
    </Page>
  );
};

export default Index;
