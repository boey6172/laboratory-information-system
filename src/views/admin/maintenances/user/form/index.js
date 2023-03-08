/* Core Imports */
import React, { useState, createContext, useEffect } from "react";
import { useForm } from "react-hook-form";

/* Route Imports */
import { Link as RouterLink, useNavigate } from "react-router-dom";

/* UI Imports */
import {
  Grid,
  Button,
  Box,
  Paper,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Send } from "@material-ui/icons";
import ErrorDialog from "../../../../../widgets/ErrorDialog";
import BackDrop from "../../../../../widgets/BackDrop";

/*View Imports */
import UserInfo from "./UserInfo";
import Credential from "./Credential";
import Photo from "./Photo";

/* Api Imports */
// import { useQuery, useMutation } from "@apollo/client";

/* Query Imports */
// import {
//   GET_GENDERS,
//   CREATE_USER,
//   UPDATE_USER,
//   CHECK_IS_USERNAME_EXIST,
//   UPLOAD_USER_PHOTO,
//   GET_ROLES,
//   CHANGE_USER_ROLE,
//   RESET_PASSWORD,
// } from "src/views/user/admin/Maintenance/user/query";

/* Context Instance */
export const FormContext = createContext();

const useStyles = makeStyles((theme) => ({
  root: {},
  formPadding: {
    margin: 10,
  },
  submitButton: {
    marginBottom: 15,
    marginTop: 15,
  },
}));

export default ({ states, onRedirect, action, updateId = null }) => {
  const classes = useStyles();
  /* Validation Initialization & Instance   */
  const [state, setState] = useState(states && states);
  const [image, setImage] = useState(states?.info?.photo);

  const useFormInstance = useForm({
    shouldFocusError: false,
  });

  const { handleSubmit, errors } = useFormInstance;

  /* Api hooks */
  // const {
  //   loading: loadingGenders,
  //   error: errorGenders,
  //   data: dataGenders,
  // } = useQuery(GET_GENDERS, { errorPolicy: "all" });

  // const {
  //   loading: loadingRoles,
  //   error: errorRoles,
  //   data: dataRoles,
  // } = useQuery(GET_ROLES, { errorPolicy: "all" });

  // const [upload, { loading: uploadLoading, error: uploadError }] = useMutation(
  //   UPLOAD_USER_PHOTO,
  //   {
  //     onCompleted(data) {},
  //     errorPolicy: "all",
  //   }
  // );

  // const [
  //   checkUsernameExist,
  //   { loading: loadingIsUsernameExist, error: errorIsUsernameExist },
  // ] = useMutation(CHECK_IS_USERNAME_EXIST, {});

  // const [
  //   createUser,
  //   { loading: loadingCreateUser, error: errorCreateUser },
  // ] = useMutation(CREATE_USER, {
  //   onCompleted(data) {
  //     data?.createUser && onRedirect();
  //   },
  //   errorPolicy: "all",
  // });

  // const [
  //   updateUser,
  //   { loading: loadingUpdateUser, error: errorUpdateUser },
  // ] = useMutation(UPDATE_USER, {
  //   onCompleted(data) {
  //     // onRedirect();
  //   },
  //   errorPolicy: "all",
  // });

  // const [
  //   changeUserRoles,
  //   { loading: loadingChangeUserRoles, error: errorChangeUserRoles },
  // ] = useMutation(CHANGE_USER_ROLE, {
  //   onCompleted(data) {
  //     // onRedirect();
  //   },
  //   errorPolicy: "all",
  // });

  // const [resetPassword] = useMutation(RESET_PASSWORD, {
  //   onCompleted(data) {
  //     // onRedirect();
  //   },
  //   errorPolicy: "all",
  // });

  /* Component Functions */

  const onSubmit = async (data) => {
    let request = { ...data }; 
    let role = [request.credential.roles]
    let newPassword = request.credential.password
    console.log(newPassword)
    
    if (action === "create") {
      delete request.credential.confirm_password;
      // const {
      //   data: {
      //     uploadUserPhoto: { path },
      //   },
      // } = await upload({ variables: { file: image } });
      // request.info.photo = path;
      // createUser({ variables: { input: request } });
    } else if (action === "update") {
      delete request.credential;
      // updateUser({ variables: { id: updateId, input: request } });

      // changeUserRoles({ variables: { id: updateId, roles: role } })
      if(newPassword != ''){
        // resetPassword({ variables: {id: updateId, new_password: newPassword} })
      }
      
      onRedirect();
    }
  };
  const isUsernameExist = (payload) => {
    // return checkUsernameExist({ variables: { input: payload } });
  };

  return (
    <FormContext.Provider
      value={{
        useFormInstance,
        state,
        // genders: dataGenders?.genders,
        // roles:dataRoles?.roles,
        isUsernameExist,
        isDisabled: action === "view",
        isUpdating: action === "update",
      }}
    >
      <Grid container>
        <Grid item md={4} xs={12}>
          <Photo
            image={image}
            setImage={setImage}
            disabled={action === "view"}
          />
        </Grid>
        <Grid item md={8} xs={12}>
          <UserInfo />

          {action !== "view" ? <Credential /> : <></>}

          <Box display="flex" justifyContent="flex-end" mr={2} ml={2}>
            {action !== "view" ? (
              <Button
                endIcon={<Send />}
                className={classes.submitButton}
                color="primary"
                type="submit"
                onClick={handleSubmit(onSubmit)}
                variant="contained"
              >
                Submit To
              </Button>
            ) : (
              <></>
            )}
          </Box>
        </Grid>
      </Grid>

      <BackDrop
        // loading={loadingGenders || loadingCreateUser || loadingUpdateUser}
      />
      <ErrorDialog
        // error={
        //   errorGenders ||
        //   errorCreateUser ||
        //   errorIsUsernameExist ||
        //   errorUpdateUser
        // }
      />
    </FormContext.Provider>
  );
};
