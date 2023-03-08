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
      ...info.immediate_superior,
    };
    states.previous_employment.company_name = data.company_name;
    states.previous_employment.address = data.previous_employment.address;
    states.previous_employment.position = data.previous_employment.position;
    states.previous_employment.salary = parseFloat(
      data.previous_employment.salary
    );
    states.previous_employment.start_date = data.previous_employment.start_date;
    states.previous_employment.end_date = data.previous_employment.end_date;
    states.previous_employment.reason_of_leaving =
      data.previous_employment.reason_of_leaving;

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
                name="immediate_superior.name"
                // rules={{ required: "Immediate superior is required" }}
                render={({
                  field: { onChange, onBlur, ref },
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues("immediate_superior.name")}
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
                name="immediate_superior.position"
                // rules={{ required: "Immediate superior is required" }}
                render={({
                  field: { onChange, onBlur, ref },
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues("immediate_superior.position")}
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
                name="immediate_superior.contact_number"
                // rules={{ required: "Immediate superior is required" }}
                render={({
                  field: { onChange, onBlur, ref },
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues(
                        "immediate_superior.contact_number"
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
