import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import {
  Modal,
  Button,
  TextField,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  UPDATE_EMPLOYEE,
  UPDATE_EMPLOYEE_INFO,
  GET_QUERY,
  UPDATE_USER_ROLE,
} from "./Query";
import { useQuery, useMutation } from "@apollo/client";
import { Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperHead: {
    background: "#e0e0e0",
    color: "#212121",
    height: "40px",
    textAlign: "center",
    fontFamily: "Roboto",
    padding: 10,
  },
  paperBody: {
    padding: 20,
  },
  paper: {
    marginTop: "-200px",
    backgroundColor: theme.palette.background.paper,
    width: "500px",
  },
  update: {
    backgroundColor: "#1976d2",
    color: "white",
    marginLeft: "5px",
  },
  buttons: {
    marginTop: "25px",
  },
  dangerText: {
    color: "#757575",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 13,
  },
  dangerIcon: {
    color: "red",
    fontSize: "50px",
  },
  editIcon: {
    marginTop: "5px",
    color: "#fff",
    padding: "none",
    marginLeft: 3,
    background: "#c62828",
    fontSize: "12px",
    "&:hover": {
      color: "#000",
      cursor: "pointer",
    },
  },
}));

export default ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const useFormInstance = useForm({
    shouldFocusError: false,
  });

  const { handleSubmit, errors, getValues, control } = useFormInstance;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    loading: loadingQuery,
    error: errorQuery,
    data: dataQuery,
  } = useQuery(GET_QUERY, { errorPolicy: "all" });

  const status = dataQuery?.employeeStatus.filter((e) => {
    return e.name == "Separated";
  });
  const position = dataQuery?.positions;
  const workLocation = dataQuery?.workLocations;

  const [
    updateEmployeeInfo,
    { loading: loadingUpdateEmployeeInfo, error: errorUpdateEmployeeInfo },
  ] = useMutation(UPDATE_EMPLOYEE_INFO);

  const [
    updateEmployee,
    { loading: loadingUpdateEmployee, error: errorUpdateEmployee },
  ] = useMutation(UPDATE_EMPLOYEE, {
    onCompleted(data) {
      window.location = window.location;
    },
  });

  const [
    updateUserRole,
    { loading: loadingUpdateUserRole, error: errorUpdateUserRole },
  ] = useMutation(UPDATE_USER_ROLE, {
    onCompleted(data) {},
  });

  const onUpdate = (info) => {
    const request = { ...info };
    const roles = ["seperated"];

    // request.employee_info.salary = parseFloat(info.employee_info.salary);

    updateUserRole({ variables: { id: data.account._id, roles: roles } });
    updateEmployeeInfo({
      variables: { id: data.employee_info._id, input: info.employeeinfo },
    });

    updateEmployee({ variables: { id: data._id, input: info.employee } });
  };

  const body = (
    <>
      <div className={classes.paper}>
        <div className={classes.paperHead}>
          <p>Hired Employee</p>
        </div>
        <div className={classes.paperBody}>
          <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
              <Controller
                control={control}
                name="employee.status"
                rules={{ required: "Employee Status is required" }}
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
                      <InputLabel id="demo-simple-select-outlined-label">
                        Employee Status
                      </InputLabel>
                      <Select
                        onChange={onChange}
                        onBlur={onBlur}
                        defaultValue={getValues("employee.status")}
                        label="Employee Status"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                      >
                        {status?.map(({ _id, name: _name }, index) => (
                          <MenuItem value={_id} key={index}>
                            {_name}
                          </MenuItem>
                        ))}
                      </Select>
                      {error && (
                        <FormHelperText>{error?.message}</FormHelperText>
                      )}
                    </FormControl>
                  </>
                )}
              />
            </Grid>
            <Grid item md={12} xs={12} style={{ marginTop: "-15px" }}>
              <Controller
                control={control}
                name="employeeinfo.end_date"
                rules={{ required: "Seperation is required" }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues("employee_info.end_date")}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={error !== undefined}
                      fullWidth
                      inputRef={ref}
                      label="Seperation Date"
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
          <Box display="flex" justifyContent="flex-end">
            <Button
              onClick={handleClose}
              variant="contained"
              size="small"
              className={classes.margin}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={handleSubmit(onUpdate)}
              className={classes.update}
            >
              Update
            </Button>
          </Box>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div>
        <Button onClick={handleOpen} className={classes.editIcon}>
          Seperate
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>{body}</Fade>
        </Modal>
      </div>
    </>
  );
};
