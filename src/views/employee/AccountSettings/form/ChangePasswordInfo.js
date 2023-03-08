/* Core Imports */
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Controller } from "react-hook-form";
import { Lock } from "@material-ui/icons";

/* UI Imports */
import {
  Grid,
  Avatar,
  Typography,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

/* Validation Imports */
// import {
//   checkConfirmPassword,
//   checkOldPassword,
//   checkPassword,
// } from "./Validations";

/* Context Import */
import { FormContext } from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  formHeader: {
    marginBottom: "10px",
    padding: theme.spacing(2),
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  layout: {
    width: "auto",
    marginTop: "50px",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1700 + theme.spacing(2) * 2)]: {
      width: 1700,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#9e9e9e",
  },
}));

export default ({ action }) => {
  const classes = useStyles();
  /* Initialization & Instance   */
  const { useFormInstance, isDisabled } = useContext(
    FormContext
  );
  const { errors, control, watch, getValues } = useFormInstance;

  /* Component Functions */

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.formHeader}>
            <Avatar className={classes.avatar}>
              <Lock />
            </Avatar>
            <Typography component="h1" variant="h5">
              Change Password
            </Typography>
          </div>
        </Grid>
        <Grid item md={12} xs={12}>
          <Controller
            control={control}
            name="old_password"
            rules={{ required: "Current Password is Required" }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <div>
                <TextField
                  defaultValue={getValues("old_password")}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error !== undefined}
                  fullWidth
                  inputRef={ref}
                  label="Old Password"
                  margin="normal"
                  type="password"
                  variant="outlined"
                  helperText={error?.message}
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={12} xs={12}>
        <Controller
            control={control}
            name="new_password"
            rules={{ required: "New Password is Required" }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <div>
                <TextField
                  defaultValue={getValues("new_password")}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error !== undefined}
                  fullWidth
                  inputRef={ref}
                  label="New Password"
                  margin="normal"
                  type="password"
                  variant="outlined"
                  helperText={error?.message}
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Controller
            control={control}
            name="confirm_password"
            rules={{
              required: "Confirm Password is Required",
              validate: {
                isNotMatch: (value) => {
                  return value === watch("new_password");
                },
              },
            }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <div>
                <TextField
                  defaultValue={getValues("confirm_password")}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error !== undefined}
                  fullWidth
                  inputRef={ref}
                  label="Confirm Password"
                  margin="normal"
                  type="password"
                  variant="outlined"
                  helperText={error?.message}
                />
              </div>
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
