import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { Modal, Button, Box, Grid, TextField } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Edit from "@material-ui/icons/Edit";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
// import { UPDATE_EMPLOYEE } from "../Query";
// import { useQuery, useMutation } from "@apollo/client";
import { LaptopWindows } from "@material-ui/icons";
import { Controller } from "react-hook-form";
import instance from '../../../../instance/instance';


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
    marginTop: "-50px",
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

  const onUpdate = (info) => {
    const {id} = data;
    const request = { ...info,id};
    instance.post("./region/update", request,
    {
      headers:{
          token:localStorage.getItem("token")
      }
    }
    ).then((response) => {
      if(!response.error)
      {
        window.location = window.location;
        // alert("Saved" . response)
        // console.log(response)
      }else{
          alert(response.error) 
      }
    }) 
  };

  const body = (
    <>
      <div className={classes.paper}>
        <div className={classes.paperHead}>
          <p>Region Assignment Information</p>
        </div>
        <div className={classes.paperBody}>
          <Grid container>
            <Grid item md={12} xs={12}>
              <Controller
                control={control}
                name="regionAssignment"
                defaultValue={data?.regionAssignment}
                rules={{ required: "Region Assignment number is Required" }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <div>
                    <TextField
                      defaultValue={data?.regionAssignment}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={error !== undefined}
                      fullWidth
                      inputRef={ref}
                      label="Region Assignment"
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
      
        <Button onClick={handleOpen} className={classes.editIcon} ><Edit/></Button>
        
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
    
    </>
  );
};
