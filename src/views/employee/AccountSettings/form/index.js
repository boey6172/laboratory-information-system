/* Core Imports */
import React, { useState, createContext } from "react";
import { useForm } from "react-hook-form";

/* Route Imports */
// import { Link as RouterLink, useNavigate } from "react-router-dom";

/* UI Imports */
import { Grid, Button, Box, Paper } from "@material-ui/core";
import ErrorDialog from "../../../../widgets/ErrorDialog";
import BackDrop from "../../../../widgets/BackDrop";
import { makeStyles } from "@material-ui/core/styles";

/*View Imports */
import ChangePasswordInfo from "./ChangePasswordInfo";
import Notif from "../../../../widgets/ToastNotif"

/* Api Imports */
// import { useMutation } from "@apollo/client";

/* Query Imports */
// import { CHANGE_PASSWORD } from "./Query";
import instance from "../../../../instance/instance";
import useAuthentication from "../../../../hooks/useAuthentication"


/* Context Instance */
export const FormContext = createContext();

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: "30px",
    color: theme.palette.text.secondary,
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    borderRadius: "3%",
  },
  layout: {
    width: "auto",
    marginTop: "50px",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(700 + theme.spacing(2) * 2)]: {
      width: 700,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

export default ({ action }) => {
  const classes = useStyles();
  /* Validation Initialization & Instance   */
  const [showNotif, setShowNotif] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
    message: "Change Password Success",
    status:'success'
  });
  const { getUser } = useAuthentication();


  const useFormInstance = useForm({
    shouldFocusError: false,
  });

  const { handleSubmit } = useFormInstance;

  /* Api hooks */

  // const [
  //   changePassword,
  //   { loading: loadingChangePassword, error: errorChangePassword },
  // ] = useMutation(CHANGE_PASSWORD, {
  //   onCompleted(data) {
  //     if(data?.changePassword){
  //       setShowNotif({...showNotif, open: true})
  //       setTimeout(() => {
  //         window.location = window.location;
  //       }, 3000);
  //     }
  //   },
  //   errorPolicy: "all",
  // });

  /* Component Functions */

  const onSubmit = (data) => {
    let request = { ...data,'employee':getUser().employee};
    console.log(request)
    instance.post("./auth/changePassword", request,
    // {
    //   headers:{
    //       token:localStorage.getItem("token")
    //   }
    // }
    ).then((response) => {
      console.log(response)
      if(!response.data.error) {
        setShowNotif({
          ...showNotif,
          message:response.data,
           open: true
          })
        setTimeout(() => {
          window.location = window.location;
        }, 3000);
      }else{
        if(response.data.error.message){

          // alert(response.data.error.message)
          setShowNotif({
            ...showNotif, 
            message:response.data.
            error.message, 
            open: true,
            status:'warning'
          })
          setTimeout(() => {
            setShowNotif({...showNotif,open: false})
          }, 3000);
        }else{
          // console.log(response.data.error)
          setShowNotif({
            ...showNotif,
            message:response.data.error,
            open: true,
            status:'warning'
          })
          setTimeout(() => {
            setShowNotif({...showNotif,open: false})
          }, 3000);
        }
      }
    }) 
  };

  return (
    <FormContext.Provider
      value={{
        useFormInstance,
        isDisabled: action === "view",
      }}
    >
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <ChangePasswordInfo action={action} />
          </Grid>
          <Box display="flex" justifyContent="center" p={2}>
            {action !== "view" ? (
              <Button
                style={{ background: "#2196f3", color: "#fff" }}
                // color="primary"
                type="submit"
                onClick={handleSubmit(onSubmit)}
                variant="contained"
              >
                Submit
              </Button>
            ) : (
              <></>
            )}
          </Box>
          {/* <BackDrop loading={loadingChangePassword} />
          <ErrorDialog error={errorChangePassword} /> */}
        </Paper>
      </main>

      <Notif toastProps={showNotif} />
    </FormContext.Provider>
  );
};
