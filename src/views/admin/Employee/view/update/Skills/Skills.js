/* Core Imports */
import React, { useState, useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

/* UI Imports */
import {
  Modal,
  Button,
  Box,
  Grid,
  TextField,
  FormControl,
  makeStyles,
  Fade,
  Backdrop,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

/* Api Imports */
// import { useQuery, useMutation } from "@apollo/client";

/* Query Imports */
// import { UPDATE_EMPLOYEE, GET_SKILLS } from "../Query";
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
  input: {
    display: "none",
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

  const { handleSubmit, control } = useFormInstance;

  const onRedirect = () => {
    dispatch({ type: "view", payload: newEmployeeInfo });
  };

  // const [updateEmployee] = useMutation(UPDATE_EMPLOYEE, {
  //   onCompleted(data) {
  //     data.updateEmployee && onRedirect();
  //     setOpen(false);
  //   },
  // });

  // const { data: dataSkills } = useQuery(GET_SKILLS, { errorPolicy: "all" });

  // const activeIds = data?.skills.map((skill) => skill._id);

  // const datas = dataSkills?.skills?.filter((e) => {
  //   return activeIds?.indexOf(e._id) === -1;
  // });

  const onUpdate = async (info) => {
    let skillData = data?.skills.map((skill) => skill._id);
    let newSkillData = [];

    const request = {
      skills: skillData?.concat(info.skills.map((skill) => skill._id)),
    };

    newSkillData.push(...data?.skills);

    info.skills.map((skill) => {
      // let addSkill = dataSkills?.skills.filter((e) => e._id == skill._id)?.[0];
      // newSkillData.push(addSkill);
    });

    setNewEmployeeInfo((oldValues) => ({
      ...oldValues,
      skills: [...newSkillData],
    }));

    // updateEmployee({
    //   variables: { id: data._id, input: request },
    //   refetchQueries: { query: GET_EMPLOYEE },
    // });
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
              render={({ field: { onChange, ref }, fieldState: { error } }) => (
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
