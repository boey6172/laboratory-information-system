/* Core Imports */
import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Controller, useFormState } from "react-hook-form";
import { AccountCircle } from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";

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
  Chip,
  Input,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

/* Validation Imports */
import { checkUsername, checkConfirmPassword } from "./Validations";

/* Context Import */
import { FormContext } from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
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
  const {
    useFormInstance,
    // state,
    skills,
    handleNext,
    // setState,
  } = useContext(FormContext);

  const { errors, control, watch, getValues } = useFormInstance;

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
        <Grid item md={12} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.skills"
            rules={{ required: "Skills is required" }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <>
                <FormControl
                  variant="outlined"
                  error={error !== undefined}
                  fullWidth
                >
                  {skills != undefined ? (
                      <Autocomplete
                        multiple
                        limitTags={2}
                        id="multiple-limit-tags"
                        options={skills}
                        getOptionLabel={(option) => option.name}
                        onChange={(event, values) => onChange(values)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="Skills"
                            placeholder="Skills"
                            error={error !== undefined}
                            inputRef={ref}
                            helperText={error?.message}
                          />
                        )}
                      />
                    ) : (
                      <></>
                    )}
                </FormControl>
              </>
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
