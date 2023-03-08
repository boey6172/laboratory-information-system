/* Core Imports */
import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";

/* UI Imports */
import {
  Modal,
  Button,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
  makeStyles,
  Backdrop,
  Fade,
} from "@material-ui/core";

/* Api Imports */
// import { useQuery, useMutation } from "@apollo/client";

/* Query Imports */
// import { GET_QUERY, UPDATE_EMPLOYEE_INFO } from "../Query";
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

const states = {
  employee_id: "",
  shift: "",
};

export default ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { dispatch } = useContext(ParentContext);
  const [newEmployeeInfo, setNewEmployeeInfo] = useState(data)

  const useFormInstance = useForm({
    shouldFocusError: false,
  });

  const { handleSubmit, getValues, control } = useFormInstance;

  const onRedirect = () => {
    dispatch({ type: "view", payload: newEmployeeInfo });
  };

  // const { data: dataQuery } = useQuery(GET_QUERY, { errorPolicy: "all" });

  // const [updateEmployeeInfo] = useMutation(UPDATE_EMPLOYEE_INFO, {
  //   onCompleted(data) {
  //     data.updateEmployeeInfo && onRedirect();
  //     setOpen(false)
  //   },
  //   errorPolicy: "all",
  // });

  // const shifts = dataQuery?.shifts;

  const onUpdate = async (info) => {
    
    const {
      employee_info: { shift },
    } = { ...info };

    // let new_shift = shifts?.filter(e => e._id == shift)?.[0]

    // setNewEmployeeInfo((oldValues) => ({
    //   ...oldValues,
    //   employee_info: {
    //     ...oldValues.employee_info,
    //     shift: {
    //       ...new_shift
    //     }
    //   }
    // }))

    states.shift = shift;
    states.employee_id = data._id;

    // updateEmployeeInfo({
    //   variables: {
    //     id: data.employee_info._id,
    //     input: states,
    //   },
    //   refetchQueries: { query: GET_EMPLOYEE },
    // });
  };

  const body = (
    <>
      <div className={classes.paper}>
        <div className={classes.paperHead}>
          <p>Edit Employee Info</p>
        </div>
        <div className={classes.paperBody}>
          <Grid item md={12} xs={12}>
            <Controller
              control={control}
              name="employee_info.shift"
              rules={{ required: "Shift is required" }}
              render={({
                field: { onChange, onBlur, ref },
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
                      inputRef={ref}
                      defaultValue={getValues("employee_info.shift")}
                      label="Position"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                    >
                      {/* {shifts?.map(({ _id, name: _name }, index) => (
                        <MenuItem value={_id} key={index}>
                          {_name}
                        </MenuItem>
                      ))} */}
                    </Select>
                    {error && <FormHelperText>{error?.message}</FormHelperText>}
                  </FormControl>
                </>
              )}
            />
          </Grid>
          <Box display="flex" justifyContent="center" mt={3}>
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
