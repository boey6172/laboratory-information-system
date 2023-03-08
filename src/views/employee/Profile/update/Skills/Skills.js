import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import {
  Modal,
  Button,
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
  Input,
  Chip,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Edit from "@material-ui/icons/Edit";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
// import { UPDATE_EMPLOYEE, GET_SKILLS, DOCUMENT_ATTACHMENTS } from "../Query";
// import { useQuery, useMutation } from "@apollo/client";
import { LaptopWindows } from "@material-ui/icons";
import { Controller } from "react-hook-form";
import IconButton from "@material-ui/core/IconButton";
import { remove } from "nprogress";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
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
    color: "#3e2723",
    fontSize: "13px",
    "&:hover": {
      color: "#9e9e9e",
      cursor: "pointer",
    },
  },
  uplaodIcon: {
    color: "#000",
    "&:hover": {
      color: "#3f51b5",
      cursor: "pointer",
    },
  },
  input: {
    display: "none",
  },
}));

const states = {
  files: [],
};

let attachments = {
  document_attachments: [],
};

export default ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = useState(states);

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

  // const [
  //   updateEmployee,
  //   { loading: loadingUpdateEmployee, error: errorUpdateEmployee },
  // ] = useMutation(UPDATE_EMPLOYEE, {
  //   onCompleted(data) {
  //     window.location = window.location;
  //   },
  // });

  // const {
  //   loading: loadingDocumentType,
  //   error: errorDocumentType,
  //   data: dataSkills,
  // } = useQuery(GET_SKILLS, { errorPolicy: "all" });

  const activeIds = data?.skills.map((skill) => skill._id);

  // const datas = dataSkills?.skills?.filter((e) => {
  //   return activeIds?.indexOf(e._id) === -1;
  // });

  // const [
  //   createAttachment,
  //   { loading: uploadLoading, error: uploadError },
  // ] = useMutation(DOCUMENT_ATTACHMENTS, {
  //   onCompleted(data) {},
  //   errorPolicy: "all",
  // });

  const onChangeFile = (e) => {
    let path = e.target.files[0];
    states.files = path;
  };

  const onUpdate = async (info) => {
    let skillData = data?.skills.map((skill) => skill._id);

    const request = {
      skills: skillData?.concat(info.skills.map((skill) => skill._id)),
    };

    // updateEmployee({ variables: { id: data._id, input: request } });
  };

  const body = (
    <>
      <div className={classes.paper}>
        <div className={classes.paperHead}>
          <p>Add Skills</p>
        </div>
        <div className={classes.paperBody}>
          <Grid container>
            <Controller
              control={control}
              name="skills"
              rules={{ required: "Skills is required" }}
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
                    {/* {datas != undefined ? (
                      <Autocomplete
                        multiple
                        limitTags={2}
                        id="multiple-limit-tags"
                        options={datas}
                        getOptionLabel={(option) => option.name}
                        onChange={(event, values) => onChange(values)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="Skills"
                            placeholder="Skills"
                            error={error !== undefined}
                            inputRef={ref}
                            helperText={error?.message}
                          />
                        )}
                      />
                    ) : (
                      <></>
                    )} */}
                  </FormControl>
                </>
              )}
            />
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
