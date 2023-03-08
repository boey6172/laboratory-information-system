import React, { useContext, useState,useEffect } from "react";
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
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Edit from "@material-ui/icons/Edit";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
// import {
//   UPDATE_EMPLOYEE,
//   GET_DOCUMENT_TYPE,
//   DOCUMENT_ATTACHMENTS,
// } from "../Query";
// import { useQuery, useMutation } from "@apollo/client";
import { LaptopWindows } from "@material-ui/icons";
import { Controller } from "react-hook-form";
import IconButton from "@material-ui/core/IconButton";
import PublishIcon from "@material-ui/icons/Publish";
import { remove } from "nprogress";
import instance from '../../../../../instance/instance';


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
  uploadIcon: {
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

let attachmentState = {
  document_attachments: [],
};

export default ({ employeeData, attachments }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = useState(states);
  const [docType, setDocType] = useState(states);


  useEffect(() => {
    // refetch();
    instance.get("./documenttype").then((response) => {
      setDocType(response.data)
      // setRanks(response.data)
      console.log(docType)
    }) 
  }, []);
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


  const onChangeFile = (e) => {
    let path = e.target.files[0];
    states.files = path;
  };
  const onUpdate = async (info) => {
    alert("yehey");
    let request = {...info,"employee":employeeData.id} 
console.log(info)
    const formData = new FormData()

    formData.append('file', states.files)
    formData.append('employee', employeeData.id)
    formData.append('documentType', info.type)

    console.log(formData)
    instance.post("./employee/upload", formData,
    // {
    //   headers:{
    //       token:localStorage.getItem("token")
    //   }
    // }
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    ).then((response) => {
      if(!response.error)
      {
        window.location = window.location;
        console.log(response)
        // alert("Saved" . response)
      }else{
          alert(response.error) 
        console.log(response)

      }
    }) 

    
  };

  const body = (
    <>
      <div className={classes.paper}>
        <div className={classes.paperHead}>
          <p>Upload Attachment</p>
        </div>
        <div className={classes.paperBody}>
          <Grid container>
            <Grid item md={12} xs={12}>
              <Controller
                control={control}
                name="type"
                rules={{ required: "Attachment Type is required" }}
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
                        Attachment Type
                      </InputLabel>
                      <Select
                        onChange={onChange}
                        onBlur={onBlur}
                        label="Attachment Type"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                      >
                        {docType?.map(( {id, documentType} , index) => (
                          <MenuItem value={id} key={index}>
                            {documentType}
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
            <Grid item md={12} xs={12}>
              <Controller
                control={control}
                name="file"
                rules={{
                  required: "Document Attachment is Required",
                }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <div>
                    <Box display="flex" justifyContent="center">
                      <input
                        accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                        id="file"
                        onChange={(e) => {
                          onChangeFile(e);
                          onChange(e);
                        }}
                        defaultValue={getValues("file")}
                        type="file"
                        className={classes.input}
                        multiple
                      />
                      <br />
                      <label htmlFor="file">
                        <IconButton
                          align="center"
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                          className={classes.uplaodBtn}
                        >
                          <PublishIcon
                            className={classes.uplaodIcon}
                            fontSize="large"
                          />
                        </IconButton>
                      </label>
                    </Box>

                    {error && (
                      <FormHelperText
                        style={{ color: "red", textAlign: "center" }}
                      >
                        {error?.message}
                      </FormHelperText>
                    )}
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
              Upload
            </Button>
          </Box>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div>
        <Button onClick={handleOpen} className={classes.uploadIcon}>
          Upload
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
