/* Core Imports */
import React, { useState, useContext } from "react";
import { Controller } from "react-hook-form";

/* UI Imports */
import {
  Grid,
  Button,
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
  checkUsername,
  checkPassword,
  checkConfirmPassword,
} from "./Validations";

/* Context Import */
import { FormContext } from "./index";

export default ({}) => {
  /* Initialization & Instance   */
  const { useFormInstance, state, isUsernameExist, isDisabled } = useContext(
    FormContext
  );
  const { errors, control, watch } = useFormInstance;

  /* Component Functions */

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={12} xs={12}>
          <Controller
            as={
              <TextField
                fullWidth
                label="Username"
                error={checkUsername(errors).hasError}
                helperText={checkUsername(errors).message}
                type="text"
                variant="outlined"
              />
            }
            name="credential.username"
            control={control}
            rules={{
              required: true,
              validate: {
                isExist: async (value) => {
                  const {
                    data: { checkUsernameExist },
                  } = await isUsernameExist(value);
                  return !checkUsernameExist;
                },
              },
            }}
            defaultValue={state?.credential?.username}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <Controller
            as={
              <TextField
                fullWidth
                label="Password"
                error={checkPassword(errors).hasError}
                helperText={checkPassword(errors).message}
                type="password"
                variant="outlined"
              />
            }
            name="credential.password"
            control={control}
            rules={{ required: true }}
            defaultValue={state?.credential?.password}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <Controller
            as={
              <TextField
                fullWidth
                label="Confirm Password"
                error={checkConfirmPassword(errors).hasError}
                helperText={checkConfirmPassword(errors).message}
                type="password"
                variant="outlined"
              />
            }
            name="credential.confirm_password"
            control={control}
            rules={{
              required: true,
              validate: {
                isNotMatch: (value) => {
                  return value === watch("credential.password");
                },
              },
            }}
            defaultValue={state?.credential?.confirm_password}
          />
        </Grid>
      </Grid>
    </>
  );
};
