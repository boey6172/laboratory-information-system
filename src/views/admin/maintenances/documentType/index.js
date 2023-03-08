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

  const [documentTypes, setdocumentType] = useState(null);
  const [values,setValues ] =  useState(null);


  useEffect(()=> {
    instance.get("./documenttype").then((response) => {
      setValues(response.data)
      setdocumentType(response.data)
    }) 
  },[])

  const searchdocumentTypes=(e)=>{
    var  { name,value }= e.target

    const filtered = documentTypes.filter(data => {
      return data.documentType.toLowerCase().includes(value.toLowerCase());
    })

    console.log(filtered)
    setdocumentType(filtered)
    if( value === ""){
      setdocumentType(values)
    }
    console.log(value)

  }

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Document Type"
    >
      <Container maxWidth={false}>
        <Toolbar  search= {searchdocumentTypes}/> 
        <Box mt={3}>
          <Result documentTypes={documentTypes}/>
        </Box>
      </Container>
    </Page>
  );
};

export default Index;
