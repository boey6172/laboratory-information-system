import {React, useEffect, useState} from "react";
import { useForm, Controller, useFormState } from "react-hook-form";
// import { useMutation, useQuery, gql } from "@apollo/client";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  makeStyles,
  Grid,
  Card,
  CardContent,
  Icon,
  Paper,
} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
screenX

import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

import CloseIcon from '@material-ui/icons/Close';

import Page from "../../components/Page";
import ErrorDialog from "../../widgets/ErrorDialog";
import BackDrop from "../../widgets/BackDrop";
import instance from '../../instance/instance';




const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "100%",
    borderRadius: "1%",
    // marginTop: "30px",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(1),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  linearProgress: {
    width: "30%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  card: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },

    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    borderRadius: "16px",
  },
  layout: {
    width: "auto",
    marginTop: "50px",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  banner: {
    height: "150px",
  },
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const { register, handleSubmit, watch, errors, control } = useForm({
    // defaultValues: {
    //   username: "sample",
    //   password: "asdsads",
    // },
  });

  const { setToken, setUser, getToken, getUser, } = useAuthentication();

  const loginUser = (data) =>{
    instance.post("auth/login", data).then((response) => {
      if (!response.data.error){
        setToken(response.data.token)
        setUser(response.data.user)
        if(getUser().role){
          if(getUser().role === "admin")
          navigate("/admin/dashboard", { replace: true });
          else
          navigate("/employee/dashboard", { replace: true });
        
        }

      }
      else{
        setError(response.data.error);
        setOpen(true);
      }

    }).catch(console.error)
  }

  useEffect(() => {
    if(getToken()){
      if(getUser().role){
        if (getUser().role === "admin")
          navigate("/admin/dashboard", { replace: true });
        else
          navigate("/employee/dashboard", { replace: true });
      }
    }
  }, [])



  const onSubmit = (data) => {
    loginUser(  data  );
  };

  const usernameHasError = (error) => {
    let status = { message: "", status: false };
    if (error?.type === "required") {
      status = { ...status, status: true, message: "username is required" };
    }
    return status;
  };

  const passwordHasError = (error) => {
    let status = { message: "", status: false };
    if (error?.type === "required") {
      status = { ...status, status: true, message: "password is required" };
    }
    return status;
  };

  return (
    <Page className={classes.root} title="Login">
      <main className={classes.layout}>
        <Card className={classes.card}>
          <Grid container spacing={7}>
            <Grid
              item
              md={4}
              xs={12}
              style={{ borderRight: "1px solid #e0e0e0", padding: "5" }}
            >
              <div style={{ marginLeft: "60px", marginTop: "30px" }}>
                <img
                  src="/static/images/lab.png"
                  alt=""
                  width="200"
                  height="200"
                />
              </div>
              <Box m={2}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box mb={5} mt={10}>
                    <Typography color="textPrimary" variant="h4">
                      Welcome to Laboratory Information System
                    </Typography>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      Sign in on the internal platform
                    </Typography>
                  </Box>
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

                  <Controller
                    control={control}
                    name="username"
                    rules={{ required: "username is required" }}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { invalid, isTouched, isDirty, error },
                      formState,
                    }) => (
                      <TextField
                        onChange={onChange}
                        onBlur={onBlur}
                        defaultValue={isDirty?.username}
                        error={error !== undefined}
                        fullWidth
                        inputRef={ref}
                        label="Username"
                        margin="normal"
                        type="text"
                        variant="outlined"
                        helperText={error?.message}
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name="password"
                    rules={{ required: "password is required" }}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { invalid, isTouched, isDirty, error },
                      formState,
                    }) => (
                      <TextField
                        onChange={onChange}
                        onBlur={onBlur}
                        defaultValue={isDirty?.password}
                        error={error !== undefined}
                        fullWidth
                        inputRef={ref}
                        label="Password"
                        margin="normal"
                        name="password"
                        type="password"
                        variant="outlined"
                        helperText={error?.message}
                      />
                    )}
                  />

                  <Box my={2}>
                    <Button
                      style={{ background: "#1e88e5", color: "#fff" }}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign in now
                    </Button>
                  </Box>
                  <Typography
                    color="textSecondary"
                    variant="body1"
                    style={{ marginTop: "20px", marginBottom: "100px" }}
                  >
                    Don&apos;t have an account?{" "}
                    <Link
                      component={RouterLink}
                      to="/register"
                      variant="h6"
                      style={{ color: "#1e88e5" }}
                    >
                      Sign up
                    </Link>
                  </Typography>
                </form>
              </Box>
            </Grid>
            <Grid
              md={8}
              xs={12}
              item
              style={{
                backgroundImage: "url(" + "/static/images/search-lab-products.jpg" + ")",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box mt={10} className={classes.banner}></Box>
            </Grid>
          </Grid>
        </Card>
        {/* <BackDrop loading={loading} />
        <ErrorDialog error={error} /> */}
      </main>
    </Page>
  );
};

export default LoginView;
