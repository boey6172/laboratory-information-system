/* Core Imports */
import React, { useState, useContext, useEffect } from "react";
import { Controller } from "react-hook-form";

/* UI Imports */
import {
  Grid,
  Card,
  CardHeader,
  Divider,
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
  checkFirstName,
  checkMiddleName,
  checkLastName,
  checkAddress,
  checkGender,
  checkEmail,
  checkBirthDate,
  checkMobileNumber,
} from "./Validations";

/* Context Import */
import { FormContext } from "./index";

export default ({}) => {
  /* Initialization & Instance   */
  const { useFormInstance, state, genders, isDisabled } = useContext(
    FormContext
  );

  const { errors, control } = useFormInstance;
  // console.log(state?.info)

  const [firstName, setFirstName] = useState(state?.first_name)
console.log(state)
  /* Component Functions */
  return (
    <Box ml={2} mr={2} mt={1}>
      <Card>
        <CardHeader subtitle="" title="Information" />
        <Divider />
        <Box m={2}>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <Controller
                control={control}
                name="info.first_name"
                defaultValue={state?.info?.first_name}
                rules={{ required: true }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <div>
                    <TextField 
                      onChange={onChange}
                      onBlur={onBlur}
                      error={checkFirstName(error).hasError}
                      fullWidth
                      inputRef={ref}
                      label="First Name"
                      margin="normal"
                      type="text"
                      variant="outlined"
                      helperText={checkFirstName(error).message}
                      disabled={isDisabled}
                    />
                  </div>
                )}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <Controller
                control={control}
                name="info.middle_name"
                defaultValue={state?.info?.middle_name}
                rules={{ required: true }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <div>
                    <TextField
                      onChange={onChange}
                      onBlur={onBlur}
                      error={checkMiddleName(error).hasError}
                      fullWidth
                      inputRef={ref}
                      label="Middle Name"
                      margin="normal"
                      type="text"
                      variant="outlined"
                      helperText={checkMiddleName(error).message}
                      disabled={isDisabled}
                    />
                  </div>
                )}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <Controller
                control={control}
                name="info.last_name"
                defaultValue={state?.info?.last_name}
                rules={{ required: true }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <div>
                    <TextField
                      onChange={onChange}
                      onBlur={onBlur}
                      error={checkLastName(error).hasError}
                      fullWidth
                      inputRef={ref}
                      label="Last Name"
                      margin="normal"
                      type="text"
                      variant="outlined"
                      helperText={checkLastName(error).message}
                      disabled={isDisabled}
                    />
                  </div>
                )}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Controller
                control={control}
                name="info.address"
                defaultValue={state?.info?.address}
                rules={{ required: true }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <div>
                    <TextField
                      onChange={onChange}
                      onBlur={onBlur}
                      error={checkAddress(error).hasError}
                      fullWidth
                      inputRef={ref}
                      label="Address"
                      margin="normal"
                      type="text"
                      variant="outlined"
                      helperText={checkAddress(error).message}
                      disabled={isDisabled}
                    />
                  </div>
                )}
              />
            </Grid>
            <Grid item md={8} xs={12} style={{ marginTop: "-16px" }}>
              <Controller
                control={control}
                name="info.email"
                defaultValue={state?.info?.email}
                rules={{ 
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                      error={checkEmail(error).hasError}
                      fullWidth
                      inputRef={ref}
                      label="Email"
                      margin="normal"
                      type="text"
                      variant="outlined"
                      helperText={checkEmail(error).message}
                      disabled={isDisabled}
                    />
                  </div>
                )}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <Controller
                control={control}
                name="info.gender"
                defaultValue={state?.info?.gender}
                rules={{ required: true }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <>
                    <FormControl
                      variant="outlined"
                      error={checkGender(error).hasError}
                      fullWidth
                      disabled={isDisabled}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Gender
                      </InputLabel>
                      <Select
                        onChange={onChange}
                        onBlur={onBlur}
                        defaultValue={state?.info?.gender}
                        label="Gender"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                      >
                        {genders?.map(({ _id, name: _name }, index) => (
                          <MenuItem value={_id} key={index}> 
                            {_name}
                          </MenuItem>
                        ))}
                      </Select>
                      {error && <FormHelperText>{checkGender(error).message}</FormHelperText>}
                    </FormControl>
                  </>
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Controller
                control={control}
                name="info.birth_date"
                defaultValue={state?.info?.birth_date}
                rules={{ required: true }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <div>
                    <TextField
                      onChange={onChange}
                      onBlur={onBlur}
                      error={checkBirthDate(error).hasError}
                      fullWidth
                      inputRef={ref}
                      label="Birth Date"
                      format={"DD/MM/YYYY"}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      type="date"
                      InputProps={{
                        inputProps: { min: "1945-05-01", max: "9999-12-31" },
                      }}
                      variant="outlined"
                      helperText={checkBirthDate(error).message}
                      disabled={isDisabled}
                    />
                  </div>
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Controller
                control={control}
                name="info.mobile_number"
                defaultValue={state?.info?.mobile_number}
                rules={{ required: true }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <div>
                    <TextField
                      onChange={onChange}
                      onBlur={onBlur}
                      error={checkMobileNumber(error).hasError}
                      fullWidth
                      inputRef={ref}
                      label="Mobile Number"
                      margin="normal"
                      type="text"
                      variant="outlined"
                      helperText={checkMobileNumber(error).message}
                      disabled={isDisabled}
                    />
                  </div>
                )}
              />
            </Grid>
          </Grid>
        </Box>
        <Divider />
      </Card>
    </Box>
  );
};
