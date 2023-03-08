import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Box
} from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';

import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

import CloseIcon from '@material-ui/icons/Close';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Personal from './personal';
import Auth from './auth';
import Emp from './emp_details';
import FullDetails from './full_details';
import {useFormik} from "formik";
import auth from '../../helper/validation/auth';
import personalValidation from '../../helper/validation/personal';
import empValidation from '../../helper/validation/empDetails';

import instance from '../../instance/instance';
import useAuthentication from '../../hooks/useAuthentication';

import { Link as RouterLink, useNavigate } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Index = () =>{
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [holder, setHolder] = useState({});
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const { setToken, setUser, getToken, getUser, } = useAuthentication();

  
  
  const getSteps = () => {
    return ['Enter your Login Credentials', 'Personal Information', 'Employment Details','Save Confirm'];
  }

  const formik = useFormik({
    initialValues: {
      username:'',
      password:'',
      confirmPassword:'',
    },
    validationSchema: auth,
    onSubmit: (values, {resetForm}) => {
      console.log(values)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      },
  });

  const personal = useFormik({
    initialValues: {
      firstname:'',
      middlename:'',
      lastname:'',
      suffix:'',
      birthday:'',
      contactNumber:'',
      region:'',
      province:'',
      municipality:'',
      barangay:'',
      gender:'',
      address:'',
      religion:'',
    },
    validationSchema: personalValidation,
    onSubmit: (values, {resetForm}) => {
      console.log(values)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      values.address = values.region + ' ' + values.province + ' ' + values.municipality + ' ' + values.barangay
    },
  });

  const empDetails = useFormik({
    initialValues: {
      empDate:'',
      philNumber:'',
      gsisNumber:'',
      nhmcNumber:'',
      pagIbigNumber:'',
      tinNumber:'',
      taxstat:'',
      salaryGrade:'',
      rank:'',
      regionAssignment:'',
      
    },
    validationSchema: empValidation,
    onSubmit: (values2, {resetForm}) => {
      // console.log(values2)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      // setHolder(...holder, values2)
      // setHolder((prevData) => prevData ,values2);
      setHolder({...formik.values,...personal.values,...values2})
      // submit();
    },
  });

  const steps = getSteps();

  const handleNext = () => {
    // alert(activeStep)
    // console.log(holder)
    const step = getStepIndex();
    // console.log(activeStep)
    switch (step) {
      case 0:
         formik.handleSubmit()
      case 1:
          personal.handleSubmit()
      case 2:
          empDetails.handleSubmit()
      default:
        return 'Unknown stepIndex';
    }

  };
  const getStepIndex = () => {
    return activeStep;
  }

  const handleBack = () => {
    getStepIndex()
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    getStepIndex()
    setActiveStep(0);
    
  };



const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return <Auth  formik={formik}/>
    case 1:
      return <Personal formik={personal}/>;
    case 2:
      return <Emp formik={empDetails}/>;
    case 3:
      return <FullDetails data={holder}/>;
    default:
      return 'Unknown stepIndex';
  }
}


const submit = () => {
  setHolder({...formik.values,...personal.values,...empDetails.values2})
  let request = {...holder};
  
  instance.post("./employee", request).then((response)=>{
    if(!response.data.error){
      // instance.post("auth/login", holder).then((responses) => {
        // if (!responses.data.error){
        //   setToken(responses.data.token)
        //   setUser(responses.data.user)
          // if(responses.data.user.role === "employee")
          console.log(response)
            navigate("/login", { replace: true });
          // else
          //   navigate("/employee/dashboard", { replace: true });
          
        // }
        // else{
        //   setError(response.data.error);
        //   setOpen(true);
        // }

      // })
    }
    else{
      setError(response.data.error);
      setOpen(true);
    }
  })
 
}


  return (
    
    <Grid
      container
      spacing={2}
      align="center"
    >
    <Grid
      item
      lg={12}
      md={2}
      xs={2}
    > 
    </Grid>
      <Grid
        item
        lg={8}
        md={8}
        xs={12}
        
      >
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
                  <Box>
                  <Collapse in={open}>
                  <Alert
                  severity="error"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    {error}
                  </Alert>
                  </ Collapse>
                  </Box>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={activeStep === steps.length - 1 ? submit : handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Grid>
  </Grid>
  
  );
}

export default Index;
