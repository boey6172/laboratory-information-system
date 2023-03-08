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
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

/* Context Import */
import { FormContext } from "./index";

export default () => {
  const [branchFilteredList, setBranch] = useState([]);
  const [departmentFilteredList, setDepartment] = useState([]);
  /* Initialization & Instance   */
  const {
    useFormInstance,
    position,
    companies,
    branches,
    departments,
    shifts,
  } = useContext(FormContext);

  const { control, getValues } = useFormInstance;

  const onChangeCompany = (e) => {
    let company = e.target.value;
    const data = branches?.filter((branch) => {
      return branch.company._id === company;
    });
    setBranch(data);
  };

  const onChangeBranch = (e) => {
    let selectedBranch = e.target.value;
    const data = departments?.filter((department) => {
      return department.branch._id === selectedBranch;
    });
    setDepartment(data);
  };

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
        <Grid item md={4} xs={12}>
          <Controller
            control={control}
            name="employeeInfos.company"
            rules={{ required: "Company is required" }}
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
                    Select Company
                  </InputLabel>
                  <Select
                    onChange={(e) => {
                      onChangeCompany(e);
                      onChange(e);
                    }}
                    onBlur={onBlur}
                    defaultValue={getValues("employeeInfos.company")}
                    label="Select Company"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {companies?.map(({ _id, name: _name }, index) => (
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
        <Grid item md={4} xs={12}>
          <Controller
            control={control}
            name="employeeInfos.branch"
            rules={{ required: "Branch is required" }}
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
                    Select Branch
                  </InputLabel>
                  <Select
                    onChange={(e) => {
                      onChangeBranch(e);
                      onChange(e);
                    }}
                    onBlur={onBlur}
                    defaultValue={getValues("employeeInfos.branch")}
                    label="Select Branch"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    <MenuItem value={""}>Select Branch</MenuItem>
                    {branchFilteredList?.map(({ _id, name: _name }, index) => (
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
        <Grid item md={4} xs={12}>
          <Controller
            control={control}
            name="employeeInfos.department"
            rules={{ required: "Department is required" }}
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
                    Select Department
                  </InputLabel>
                  <Select
                    onChange={onChange}
                    onBlur={onBlur}
                    defaultValue={getValues("employeeInfos.department")}
                    label="Select Branch"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    <MenuItem value={""}>Select Branch</MenuItem>
                    {departmentFilteredList?.map(
                      ({ _id, name: _name }, index) => (
                        <MenuItem value={_id} key={index}>
                          {_name}
                        </MenuItem>
                      )
                    )}
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
            name="employeeInfos.position"
            rules={{ required: "Position is required" }}
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
                    Position
                  </InputLabel>
                  <Select
                    onChange={onChange}
                    onBlur={onBlur}
                    defaultValue={getValues("employeeInfos.position")}
                    label="Position"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {position?.map(({ _id, name: _name }, index) => (
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
            name="employeeInfos.shift"
            rules={{ required: "Shift is required" }}
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
                    Shift
                  </InputLabel>
                  <Select
                    onChange={onChange}
                    onBlur={onBlur}
                    defaultValue={getValues("employeeInfos.shift")}
                    label="Shift"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {shifts?.map(({ _id, name: _name }, index) => (
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
        <Grid item md={6} xs={12} style={{ marginTop: "-15px" }}>
          <Controller
            control={control}
            name="employeeInfos.salary"
            rules={{ required: "Salary is required" }}
            render={({
              field: { onChange, onBlur, ref },
              fieldState: { error },
            }) => (
              <div>
                <TextField
                  defaultValue={getValues("employeeInfos.salary")}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error !== undefined}
                  helperText={error?.message}
                  fullWidth
                  inputRef={ref}
                  label="Salary"
                  margin="normal"
                  type="number"
                  variant="outlined"
                />
              </div>
            )}
          />
        </Grid>
        <Grid item md={12} xs={12} style={{ marginTop: "-15px" }}>
          <Controller
            control={control}
            name="employeeInfos.start_date"
            rules={{ required: "Start Date is required" }}
            render={({
              field: { onChange, onBlur, ref },
              fieldState: { error },
            }) => (
              <div>
                <TextField
                  defaultValue={getValues("employeeInfos.start_date")}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error !== undefined}
                  fullWidth
                  inputRef={ref}
                  label="Start Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  type="date"
                  InputProps={{
                    inputProps: { min: "1945-05-01", max: "9999-12-31" },
                  }}
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
