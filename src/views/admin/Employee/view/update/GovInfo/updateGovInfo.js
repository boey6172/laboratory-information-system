/* Core Imports */
import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";

/* UI Imports */
import {
  Modal,
  Button,
  Box,
  Grid,
  TextField,
  makeStyles,
  Backdrop,
  Fade,
} from "@material-ui/core";

/* Api Imports */
// import { useMutation } from "@apollo/client";

// /* Query Imports */
// import { UPDATE_EMPLOYEE } from "../Query";
// import { GET_EMPLOYEE } from "../../Query";

/* Context Instance */
import { ParentContext } from "../../../../../admin/Employee";

/* Create Styles */
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

export default ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { dispatch } = useContext(ParentContext);
  const [newEmployeeInfo, setNewEmployeeInfo] = useState(data);

  const useFormInstance = useForm({
    shouldFocusError: false,
  });

  const { handleSubmit, getValues, control } = useFormInstance;

  const onRedirect = () => {
    dispatch({ type: "view", payload: newEmployeeInfo });
  };

  // const [updateEmployee] = useMutation(UPDATE_EMPLOYEE, {
  //   onCompleted(data) {
  //     data.updateEmployee && onRedirect();
  //     setOpen(false);
  //   },
  // });

  const onUpdate = (info) => {
    const request = { ...info };

    setNewEmployeeInfo((oldValues) => ({
      ...oldValues,
      government_info: {
        ...oldValues.government_info,
        ...request.government_info,
      },
    }));

    // updateEmployee({
    //   variables: { id: data?._id, input: request },
    //   refetchQueries: { query: GET_EMPLOYEE },
    // });
  };

  const body = (
    <>
      <div className={classes.paper}>
        <div className={classes.paperHead}>
          <p>Government Information</p>
        </div>
        <div className={classes.paperBody}>
          <Grid container>
            <Grid item md={12} xs={12}>
              <Controller
                control={control}
                name="government_info.sss"
                // defaultValue={data?.government_info.sss}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      onChange={onChange}
                      onBlur={onBlur}
                      error={error !== undefined}
                      fullWidth
                      inputRef={ref}
                      label="SSS No."
                      margin="normal"
                      type="text"
                      helperText={error?.message}
                    />
                  </div>
                )}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Controller
                control={control}
                name="government_info.philhealth"
                // defaultValue={data?.government_info.philhealth}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      onChange={onChange}
                      onBlur={onBlur}
                      error={error !== undefined}
                      fullWidth
                      inputRef={ref}
                      label="PhilHealth Number"
                      margin="normal"
                      type="text"
                      // variant="outlined"
                      helperText={error?.message}
                    />
                  </div>
                )}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Controller
                control={control}
                name="government_info.pag_ibig"
                // defaultValue={data?.government_info.pag_ibig}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      onChange={onChange}
                      onBlur={onBlur}
                      error={error !== undefined}
                      fullWidth
                      inputRef={ref}
                      label="Pag-Ibig Number"
                      margin="normal"
                      type="text"
                      // variant="outlined"
                      helperText={error?.message}
                    />
                  </div>
                )}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Controller
                control={control}
                name="government_info.tin"
                // defaultValue={data?.government_info.tin}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      onChange={onChange}
                      onBlur={onBlur}
                      error={error !== undefined}
                      fullWidth
                      inputRef={ref}
                      label="TIN Number"
                      margin="normal"
                      type="text"
                      // variant="outlined"
                      helperText={error?.message}
                    />
                  </div>
                )}
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="flex-end">
            <Button
              onClick={() => setOpen(false)}
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
        <Button onClick={() => setOpen(true)} className={classes.editIcon}>
          Edit
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={() => setOpen(false)}
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
