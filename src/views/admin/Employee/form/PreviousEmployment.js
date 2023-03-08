/* Core Imports */
import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Controller } from "react-hook-form";
import { AccountCircle } from "@material-ui/icons";

/* UI Imports */
import {
  Grid,
  Button,
  Container,
  Avatar,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

/* Validation Imports */
import {
  checkFirstName,
  checkLastName,
  checkDate,
  checkAddress,
  checkGender,
  checkEmail,
  checkBirthDate,
  checkMobileNumber,
  checkRoles,
} from "./Validations";

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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#9e9e9e",
  },
}));

export default ({ action }) => {
  const classes = useStyles();
  /* Initialization & Instance   */
  const { useFormInstance, genders, roles, isDisabled, employee } = useContext(
    FormContext
  );
  const { errors, control, getValues } = useFormInstance;

  /* Component Functions */

  const convertToImageUrl = (image) => {
    if (typeof image === "object" && image !== null) {
      return URL.createObjectURL(image);
    }
    const imagePath = `${process.env.REACT_APP_SERVER_BASE_URL}${image}`;
    return imagePath;
  };

  // const onChangeImage = (e) => {
  //   setImage(e.target.files[0]);
  // };

  return (
    <>
      <Box mt={3} mb={3}>
        <Typography variant="body2" gutterBottom>
          NOTE:{" "}
          <font color="#b71c1c">
            Please Leave this blank if you dont have any!
          </font>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {/* <Grid item xs={12}>
          <div className={classes.formHeader}>
            <Avatar className={classes.avatar}>
              <AccountCircle />
            </Avatar>
            <Typography component="h1" variant="h5">
              {action == "create"
                ? "Add New User"
                : action == "update"
                ? "Update User"
                : "User's Info"}
            </Typography>
          </div>
        </Grid> */}

        {/* <Grid container justify="flex-end" className={classes.uploadBtn}>
        <Controller
          as={
            <TextField
              className={classes.input}
              // fullWidth
              // label="First Name"
              // error={checkFirstName(errors).hasError}
              // helperText={checkFirstName(errors).message}
              variant="outlined"
              disabled={isDisabled}
              accept="image/*"
              multiple
              type="file"
              id="contained-button-file"
            />
          }
          name="info.avatar"
          control={control}
          rules={{ required: true }}
          defaultValue={state?.info?.avatar}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload Photo
          </Button>
        </label>
      </Grid> */}

        <Typography variant="h6" gutterBottom></Typography>
        <Grid item md={12} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.previous_employment.company_name"
            // rules={{ required: "Company name is required" }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <div>
                <TextField
                  defaultValue={getValues(
                    "employeeInfo.previous_employment.company_name"
                  )}
                  onChange={onChange}
                  onBlur={onBlur}
                  // error={error !== undefined}
                  // helperText={error?.message}
                  fullWidth
                  inputRef={ref}
                  label="Company Name"
                  margin="normal"
                  type="text"
                  variant="outlined"
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.previous_employment.address"
            // rules={{ required: "Company address is required" }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <div>
                <TextField
                  defaultValue={getValues(
                    "employeeInfo.previous_employment.address"
                  )}
                  onChange={onChange}
                  onBlur={onBlur}
                  // error={error !== undefined}
                  // helperText={error?.message}
                  fullWidth
                  inputRef={ref}
                  label="Company Address"
                  margin="normal"
                  type="text"
                  variant="outlined"
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.previous_employment.start_date"
            // rules={{ required: "Start date is required" }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <div>
                <TextField
                  defaultValue={getValues(
                    "employeeInfo.previous_employment.start_date"
                  )}
                  onChange={onChange}
                  onBlur={onBlur}
                  // error={error !== undefined}
                  // helperText={error?.message}
                  fullWidth
                  inputRef={ref}
                  label="Start Date"
                  margin="normal"
                  type="date"
                  variant="outlined"
                  InputProps={{
                    inputProps: { min: "1945-05-01", max: "9999-12-31" },
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.previous_employment.end_date"
            // rules={{ required: "Date seperated is required" }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <div>
                <TextField
                  defaultValue={getValues(
                    "employeeInfo.previous_employment.end_date"
                  )}
                  onChange={onChange}
                  onBlur={onBlur}
                  // error={error !== undefined}
                  // helperText={error?.message}
                  fullWidth
                  inputRef={ref}
                  label="Date seperated"
                  margin="normal"
                  type="date"
                  variant="outlined"
                  InputProps={{
                    inputProps: { min: "1945-05-01", max: "9999-12-31" },
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            )}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.previous_employment.position"
            // rules={{ required: "Position is required" }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <div>
                <TextField
                  defaultValue={getValues(
                    "employeeInfo.previous_employment.position"
                  )}
                  onChange={onChange}
                  onBlur={onBlur}
                  // error={error !== undefined}
                  // helperText={error?.message}
                  fullWidth
                  inputRef={ref}
                  label="Position"
                  margin="normal"
                  type="text"
                  variant="outlined"
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.previous_employment.salary"
            // rules={{ required: "Salary range is required" }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <div>
                <TextField
                  defaultValue={getValues(
                    "employeeInfo.previous_employment.salary"
                  )}
                  onChange={onChange}
                  onBlur={onBlur}
                  // error={error !== undefined}
                  // helperText={error?.message}
                  fullWidth
                  inputRef={ref}
                  label="Salary Range"
                  margin="normal"
                  type="number"
                  variant="outlined"
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.previous_employment.reason_of_leaving"
            // rules={{ required: "Salary range is required" }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <div>
                <TextField
                  defaultValue={getValues(
                    "employeeInfo.previous_employment.reason_of_leaving"
                  )}
                  onChange={onChange}
                  onBlur={onBlur}
                  // error={error !== undefined}
                  // helperText={error?.message}
                  fullWidth
                  inputRef={ref}
                  multiline
                  rows={4}
                  label="Reason of leaving"
                  margin="normal"
                  type="text"
                  variant="outlined"
                />
              </div>
            )}
          />
        </Grid>
        <Typography variant="h6" gutterBottom>
          Reference
        </Typography>
        <Grid item md={12} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.previous_employment.immediate_superior.name"
            // rules={{ required: "Immediate superior is required" }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <div>
                <TextField
                  defaultValue={getValues(
                    "employeeInfo.previous_employment.reference.name"
                  )}
                  onChange={onChange}
                  onBlur={onBlur}
                  // error={error !== undefined}
                  // helperText={error?.message}
                  fullWidth
                  inputRef={ref}
                  label="Immediate Superior"
                  margin="normal"
                  type="text"
                  variant="outlined"
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.previous_employment.immediate_superior.position"
            // rules={{ required: "Immediate superior is required" }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <div>
                <TextField
                  defaultValue={getValues(
                    "employeeInfo.previous_employment.immediate_superior.position"
                  )}
                  onChange={onChange}
                  onBlur={onBlur}
                  // error={error !== undefined}
                  // helperText={error?.message}
                  fullWidth
                  inputRef={ref}
                  label="Position"
                  margin="normal"
                  type="text"
                  variant="outlined"
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.previous_employment.immediate_superior.contact_number"
            // rules={{ required: "Immediate superior is required" }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <div>
                <TextField
                  defaultValue={getValues(
                    "employeeInfo.previous_employment.immediate_superior.contact_number"
                  )}
                  onChange={onChange}
                  onBlur={onBlur}
                  // error={error !== undefined}
                  // helperText={error?.message}
                  fullWidth
                  inputRef={ref}
                  label="Contact Number"
                  margin="normal"
                  type="text"
                  variant="outlined"
                />
              </div>
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
