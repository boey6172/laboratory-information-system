/* Core Imports */
import React, { useState, useContext } from "react";
import { Controller } from "react-hook-form";


/* UI Imports */
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

/* Validation Imports */
import {
  checkUsername,
  checkConfirmPassword,
  checkPassword,
  checkBirthDate,
} from "./Validations";

/* Data imports */
import PhilippineMap from "../../../../maps/data.json";

/* Context Import */
import { FormContext } from "./index";

/* Create Styles */
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
  const {
    useFormInstance,
    genders,
    maritalStatus,
    religions,
    isUsernameExist,
    state,
  } = useContext(FormContext);
  const [province, setProvince] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [municipality, setMunicipality] = useState([]);
  const [selectedMunicipality, setSelectedMunicipality] = useState([]);
  const [barangay, setBarangay] = useState([]);

  const onChangeRegion = (e) => {
    const data = e.target.value;
    state.accountInfo.location.region = data;

    const [filterMap] = PhilippineMap?.filter((map) => {
      return map.region.region_name === data;
    });

    const province = filterMap.region.province_list;

    setProvince(Object.keys(province));
    setSelectedProvince(province);
  };

  const onChangeProvince = (e) => {
    const data = [e.target.value];
    state.accountInfo.location.province = data;

    const filterProvince = Object.keys(selectedProvince)
      .filter((key) => data.includes(key))
      .reduce((obj, key) => {
        obj["municipality"] = selectedProvince[key].municipality_list;
        return obj;
      }, {});
    setMunicipality(Object.keys(filterProvince.municipality));
    setSelectedMunicipality(filterProvince);
    // console.log(province);
  };

  const onChangeMunicipality = (e) => {
    const data = [e.target.value];
    state.accountInfo.location.municipality = data;

    const filterMunicipality = Object.keys(selectedMunicipality.municipality)
      .filter((key) => data.includes(key))
      .reduce((obj, key) => {
        obj = selectedMunicipality.municipality[key];
        return obj;
      }, {});

    setBarangay(filterMunicipality.barangay_list);
  };

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
        <Grid item md={3} xs={12}>
          <Controller
            control={control}
            name="accountInfo.info.first_name"
            rules={{ required: "First name is required" }}
            render={({
              field: { onChange, onBlur, ref },
              fieldState: { error },
            }) => (
              <div>
                <TextField
                  label="First Name"
                  defaultValue={getValues("accountInfo.info.first_name")}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error !== undefined}
                  fullWidth
                  inputRef={ref}
                  margin="normal"
                  type="text"
                  variant="outlined"
                  helperText={error?.message}
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <Controller
            control={control}
            name="accountInfo.info.middle_name"
            // rules={{ required: "Middle name is required" }}
            render={({
              field: { onChange, onBlur, ref },
            }) => (
              <div>
                <TextField
                  defaultValue={getValues("accountInfo.info.midldle_name")}
                  onChange={onChange}
                  onBlur={onBlur}
                  fullWidth
                  inputRef={ref}
                  label="Middle Name"
                  margin="normal"
                  type="text"
                  variant="outlined"
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <Controller
            control={control}
            name="accountInfo.info.last_name"
            rules={{ required: "Last name is required" }}
            render={({
              field: { onChange, onBlur, ref },
              fieldState: { error },
            }) => (
              <div>
                <TextField
                  defaultValue={getValues("accountInfo.info.last_name")}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error !== undefined}
                  fullWidth
                  inputRef={ref}
                  label="Last Name"
                  margin="normal"
                  type="text"
                  variant="outlined"
                  helperText={error?.message}
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.personal_info.suffix"
            // rules={{ required: "suffix is required" }}
            render={({
              field: { onChange, onBlur, ref },
            }) => (
              <div>
                <TextField
                  defaultValue={getValues("employeeInfo.personal_info.suffix")}
                  onChange={onChange}
                  onBlur={onBlur}
                  fullWidth
                  inputRef={ref}
                  label="Suffix"
                  margin="normal"
                  type="text"
                  variant="outlined"
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.personal_info.nick_name"
            render={({
              field: { onChange, onBlur, ref },
            }) => (
              <div>
                <TextField
                  defaultValue={getValues(
                    "employeeInfo.personal_info.nick_name"
                  )}
                  onChange={onChange}
                  onBlur={onBlur}
                  fullWidth
                  inputRef={ref}
                  label="Nickname"
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
            name="accountInfo.info.email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            }}
            render={({
              field: { onChange, onBlur, ref },
              fieldState: { error },
            }) => (
              <div>
                <TextField
                  defaultValue={getValues("accountInfo.info.email")}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error !== undefined}
                  fullWidth
                  inputRef={ref}
                  label="Email"
                  margin="normal"
                  type="text"
                  variant="outlined"
                  helperText={error?.message}
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <Controller
            control={control}
            name="accountInfo.info.mobile_number"
            rules={{ required: "Mobile number is required" }}
            render={({
              field: { onChange, onBlur, ref },
              fieldState: { error },
            }) => (
              <div>
                <TextField
                  defaultValue={getValues("accountInfo.info.mobile_number")}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error !== undefined}
                  fullWidth
                  inputRef={ref}
                  label="Mobile Number"
                  margin="normal"
                  type="text"
                  variant="outlined"
                  helperText={error?.message}
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.address_info.present_address.region"
            rules={{ required: "Region is required" }}
            render={({
              field: { onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <FormControl
                  variant="outlined"
                  error={error !== undefined}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Region
                  </InputLabel>
                  <Select
                    onChange={(e) => {
                      onChangeRegion(e);
                      onChange(e);
                    }}
                    onBlur={onBlur}
                    defaultValue={getValues("")}
                    label="Region"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {PhilippineMap?.map((data, index) => (
                      <MenuItem value={data?.region?.region_name} key={index}>
                        {data?.region?.region_name}
                      </MenuItem>
                    ))}
                  </Select>
                  {error && <FormHelperText>{error?.message}</FormHelperText>}
                </FormControl>
              </>
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.address_info.present_address.province"
            rules={{ required: "Province is required" }}
            render={({
              field: { onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <FormControl
                  variant="outlined"
                  error={error !== undefined}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Province
                  </InputLabel>
                  <Select
                    onChange={(e) => {
                      onChangeProvince(e);
                      onChange(e);
                    }}
                    onBlur={onBlur}
                    defaultValue={getValues("")}
                    label="Province"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {province?.map((province, index) => (
                      <MenuItem value={province} key={index}>
                        {province}
                      </MenuItem>
                    ))}
                  </Select>
                  {error && <FormHelperText>{error?.message}</FormHelperText>}
                </FormControl>
              </>
            )}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.address_info.present_address.city"
            rules={{ required: "Municipality is required" }}
            render={({
              field: { onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <FormControl
                  variant="outlined"
                  error={error !== undefined}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Municipality
                  </InputLabel>
                  <Select
                    onChange={(e) => {
                      onChangeMunicipality(e);
                      onChange(e);
                    }}
                    onBlur={onBlur}
                    defaultValue={getValues("")}
                    label="Municipality"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {municipality?.map((municipality, index) => (
                      <MenuItem value={municipality} key={index}>
                        {municipality}
                      </MenuItem>
                    ))}
                  </Select>
                  {error && <FormHelperText>{error?.message}</FormHelperText>}
                </FormControl>
              </>
            )}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.address_info.present_address.barangay"
            rules={{ required: "Barangay is required" }}
            render={({
              field: { onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <FormControl
                  variant="outlined"
                  error={error !== undefined}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Barangay
                  </InputLabel>
                  <Select
                    onChange={onChange}
                    onBlur={onBlur}
                    defaultValue={getValues("")}
                    label="Barangay"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {barangay?.map((barangay, index) => (
                      <MenuItem value={barangay} key={index}>
                        {barangay}
                      </MenuItem>
                    ))}
                  </Select>
                  {error && <FormHelperText>{error?.message}</FormHelperText>}
                </FormControl>
              </>
            )}
          />
        </Grid>
        <Grid item md={4} xs={12} style={{ marginTop: "-16px" }}>
          <Controller
            control={control}
            name="employeeInfo.address_info.present_address.postal_code"
            render={({
              field: { onChange, onBlur, ref },
              fieldState: { error },
            }) => (
              <div>
                <TextField
                  defaultValue={getValues(
                    "employeeInfo.address_info.present_address.postal_code"
                  )}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error !== undefined}
                  fullWidth
                  inputRef={ref}
                  label="Postal Code"
                  margin="normal"
                  type="int"
                  variant="outlined"
                  helperText={error?.message}
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={6} xs={12} style={{ marginTop: "-16px" }}>
          <Controller
            control={control}
            name="accountInfo.info.birth_date"
            rules={{
              required: "Birthday is required",
            }}
            render={({
              field: { onChange, onBlur, ref },
              fieldState: { error },
            }) => (
              <div>
                <TextField
                  defaultValue={getValues("accountInfo.info.birth_date")}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={checkBirthDate(error).hasError}
                  fullWidth
                  inputRef={ref}
                  label="Birthday"
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
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Controller
            control={control}
            name="accountInfo.info.gender"
            rules={{ required: "Gender is required" }}
            render={({
              field: { onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <FormControl
                  variant="outlined"
                  error={error !== undefined}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Gender
                  </InputLabel>
                  <Select
                    onChange={onChange}
                    onBlur={onBlur}
                    defaultValue={getValues("")}
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
                  {error && <FormHelperText>{error?.message}</FormHelperText>}
                </FormControl>
              </>
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.personal_info.marital_status"
            rules={{ required: "Marital Status is required" }}
            render={({
              field: { onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <FormControl
                  variant="outlined"
                  error={error !== undefined}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Marital Status
                  </InputLabel>
                  <Select
                    onChange={onChange}
                    onBlur={onBlur}
                    defaultValue={getValues("")}
                    label="Marital Status"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {maritalStatus?.map(({ _id, name: _name }, index) => (
                      <MenuItem value={_id} key={index}>
                        {_name}
                      </MenuItem>
                    ))}
                  </Select>
                  {error && <FormHelperText>{error?.message}</FormHelperText>}
                </FormControl>
              </>
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Controller
            control={control}
            name="employeeInfo.personal_info.religion"
            rules={{ required: "Religion is required" }}
            render={({
              field: { onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <FormControl
                  variant="outlined"
                  error={error !== undefined}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Religion
                  </InputLabel>
                  <Select
                    onChange={onChange}
                    onBlur={onBlur}
                    defaultValue={getValues("")}
                    label="Religion"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {religions?.map(({ _id, name: _name }, index) => (
                      <MenuItem value={_id} key={index}>
                        {_name}
                      </MenuItem>
                    ))}
                  </Select>
                  {error && <FormHelperText>{error?.message}</FormHelperText>}
                </FormControl>
              </>
            )}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Controller
            control={control}
            name="accountInfo.credential.username"
            rules={{
              required: "Username is required",
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
              field: { onChange, onBlur, ref },
              fieldState: { error },
            }) => (
              <div>
                <TextField
                  defaultValue={getValues("accountInfo.credential.username")}
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

        <Grid item md={6} xs={12}>
          <Controller
            control={control}
            name="accountInfo.credential.password"
            rules={{
              required: "Password is required",
              validate: {
                lengthRequired: (value) => {
                  return value.length >= 9;
                },
              },
            }}
            render={({
              field: { onChange, onBlur, ref },
              fieldState: { error },
            }) => (
              <div>
                <TextField
                  defaultValue={getValues("accountInfo.credential.password")}
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

        <Grid item md={6} xs={12}>
          <Controller
            control={control}
            name="accountInfo.credential.confirm_password"
            rules={{
              required: "Confirm Password is Required",
              validate: {
                isNotMatch: (value) => {
                  return value === watch("accountInfo.credential.password");
                },
              },
            }}
            render={({
              field: { onChange, onBlur, ref },
              fieldState: { error },
            }) => (
              <div>
                <TextField
                  defaultValue={getValues(
                    "accountInfo.credential.confirm_password"
                  )}
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
      </Grid>
    </>
  );
};
