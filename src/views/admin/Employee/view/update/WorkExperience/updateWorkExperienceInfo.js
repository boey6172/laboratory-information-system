import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import {
  Modal,
  Button,
  Box,
  Grid,
  TextField,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import { UPDATE_EMPLOYEE } from "../Query";
// import { useMutation } from "@apollo/client";
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
    padding: "20px",
  },
  paper: {
    marginTop: "-100px",
    backgroundColor: theme.palette.background.paper,
    width: "600px",
  },
  update: {
    backgroundColor: "#1976d2",
    color: "white",
    marginLeft: "5px",
  },
  editIcon: {
    marginTop: "5px",
    color: "#3e2723",
    fontSize: "13px",
    "&:hover": {
      color: "#9e9e9e",
      cursor: "pointer",
    },
  },
}));

const states = {
  previous_employment: {
    company_name: "",
    address: "",
    position: "",
    salary: 0.0,
    start_date: "",
    end_date: "",
    reason_of_leaving: "",
    immediate_superior: {
      position: "",
      contact_number: "",
      name: "",
    },
  },
};

export default ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const useFormInstance = useForm({
    shouldFocusError: false,
  });

  const { handleSubmit, getValues, control } = useFormInstance;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [
  //   updateEmployee,
  //   { loading: loadingUpdateEmployee, error: errorUpdateEmployee },
  // ] = useMutation(UPDATE_EMPLOYEE, {
  //   onCompleted(data) {
  //     window.location = window.location;
  //   },
  // });

  // const [ updateEmployee ] = useMutation(UPDATE_EMPLOYEE, {
  //   onCompleted() {
  //     window.location = window.location;
  //   },
  // });

  const onUpdate = async (info) => {
    states.previous_employment.immediate_superior = {
      ...data.previous_employment.immediate_superior,
    };
    states.previous_employment.reason_of_leaving =
      data.previous_employment.reason_of_leaving;
    states.previous_employment.company_name = info.company_name;
    states.previous_employment.address = info.address;
    states.previous_employment.position = info.position;
    states.previous_employment.salary = parseFloat(info.salary);
    states.previous_employment.start_date = info.start_date;
    states.previous_employment.end_date = info.end_date;

    delete states.previous_employment.immediate_superior.__typename;

    // updateEmployee({ variables: { id: data._id, input: states } });
  };

  const body = (
    <>
      <div className={classes.paper}>
        <div className={classes.paperHead}>
          <p>Previous Work Experience</p>
        </div>
        <div className={classes.paperBody}>
          <Grid container spacing={1}>
            <Grid item md={12} xs={12}>
              <Controller
                control={control}
                name="company_name"
                // rules={{ required: "Company name is required" }}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues("company_name")}
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
                name="address"
                // rules={{ required: "Company address is required" }}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues("address")}
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
                name="start_date"
                // rules={{ required: "Start date is required" }}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues("start_date")}
                      onChange={onChange}
                      onBlur={onBlur}
                      // error={error !== undefined}
                      // helperText={error?.message}
                      fullWidth
                      inputRef={ref}
                      label="Start Date"
                      margin="normal"
                      type="date"
                      InputProps={{
                        inputProps: { min: "1945-05-01", max: "9999-12-31" },
                      }}
                      variant="outlined"
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
                name="end_date"
                // rules={{ required: "Date seperated is required" }}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues("end_date")}
                      onChange={onChange}
                      onBlur={onBlur}
                      // error={error !== undefined}
                      // helperText={error?.message}
                      fullWidth
                      inputRef={ref}
                      label="Date seperated"
                      margin="normal"
                      type="date"
                      InputProps={{
                        inputProps: { min: "1945-05-01", max: "9999-12-31" },
                      }}
                      variant="outlined"
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
                name="position"
                // rules={{ required: "Position is required" }}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues("position")}
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
                name="salary"
                // rules={{ required: "Salary range is required" }}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues("salary")}
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
          </Grid>
          <Box display="flex" justifyContent="center" mt={3}>
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
          Edit
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
