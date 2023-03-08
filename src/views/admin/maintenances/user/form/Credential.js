/* Core Imports */
import React, { useState, useContext } from "react";
import { Controller } from "react-hook-form";

/* UI Imports */
import {
  CardHeader,
  Card,
  Divider,
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
  checkRole,
  checkUsername,
  checkPassword,
  checkConfirmPassword,
} from "./Validations";

/* Context Import */
import { FormContext } from "./index";

export default ({}) => {
  /* Initialization & Instance   */
  const { useFormInstance, state, roles, isUsernameExist, isDisabled, isUpdating } = useContext(
    FormContext
  );
  const { errors, control, watch } = useFormInstance;
  console.log(state)
  /* Component Functions */

  return (
    <Box ml={2} mr={2} mt={2}>
      <Card>
        <CardHeader subtitle="" title="Credential" />
        <Divider />
        <Box m={2}>
          <Grid container spacing={2}>
            { 
              (!isUpdating) ? 
              <Grid item md={6} xs={12} style={{ marginTop: "-16px" }}>
                <Controller
                  control={control}
                  name="credential.username"
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
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                  }) => (
                    <div>
                      <TextField
                        defaultValue={state?.credential?.username}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={checkUsername(error).hasError}
                        fullWidth
                        inputRef={ref}
                        label="Username"
                        margin="normal"
                        type="text"
                        variant="outlined"
                        helperText={checkUsername(error).message}
                      />
                    </div>
                  )}
                />
              </Grid>
              : null
            }
            
            <Grid item md={4} xs={12}>
              <Controller
                control={control}
                name="credential.roles"
                defaultValue={state?.credential?.roles}
                rules={{ required: true }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <>
                    <FormControl
                      variant="outlined"
                      error={checkRole(error).hasError}
                      fullWidth
                      disabled={isDisabled}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Role
                      </InputLabel>
                      <Select
                        onChange={onChange}
                        onBlur={onBlur}
                        label="Role"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={state?.credential?.roles}
                      >
                        {roles?.map(({ name: _name }, index) => (
                          <MenuItem value={_name} key={index}> 
                            {_name.charAt(0).toUpperCase() + _name.slice(1)}
                          </MenuItem>
                        ))}
                      </Select>
                      {error && <FormHelperText>{checkRole(error).message}</FormHelperText>}
                    </FormControl>
                  </>
                )}
              />
            </Grid>

            
            {
              (!isUpdating) ?
              <Grid item md={6} xs={12}>
                <Controller
                  control={control}
                  name="credential.password"
                  rules={{
                    required: true,
                    validate: {
                      lengthRequired: (value) => {
                        return value.length >= 9;
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
                        defaultValue={state?.credential?.password}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={checkPassword(error).hasError}
                        fullWidth
                        inputRef={ref}
                        label="Password"
                        margin="normal"
                        type="password"
                        variant="outlined"
                        helperText={checkPassword(error).message}
                      />
                    </div>
                  )}
                />
              </Grid>
              : 
              <Grid item md={6} xs={12} style={{ marginTop: "-16px" }}>
                <Controller
                  control={control}
                  defaultValue={state?.credential?.password}
                  name="credential.password"
                  rules={{
                    validate: {
                      lengthRequired: (value) => {
                        return (value == '') ? true : value.length >= 9;
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
                        onChange={onChange}
                        onBlur={onBlur}
                        error={checkPassword(error).hasError}
                        fullWidth
                        inputRef={ref}
                        label="New Password"
                        margin="normal"
                        type="password"
                        variant="outlined"
                        helperText={checkPassword(error).message}
                      />
                    </div>
                  )}
                />
              </Grid>
            }
            
            {
              (!isUpdating) ?
              <Grid item md={6} xs={12}>
                <Controller
                  control={control}
                  name="credential.confirm_password"
                  rules={{
                    required: true,
                    validate: {
                      isNotMatch: (value) => {
                        return value === watch("credential.password");
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
                        defaultValue={state?.credential?.confirm_password}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={checkConfirmPassword(error).hasError}
                        fullWidth
                        inputRef={ref}
                        label="Confirm Password"
                        margin="normal"
                        type="password"
                        variant="outlined"
                        helperText={checkConfirmPassword(error).message}
                      />
                    </div>
                  )}
                />
              </Grid>
              : null
            }
            


          </Grid>
        </Box>
        <Divider />
      </Card>
    </Box>
  );
};
