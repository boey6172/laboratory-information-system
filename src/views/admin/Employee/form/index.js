/* Core Imports */
import React, { useState, createContext } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

/* UI Imports */
import {
  Grid,
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Card,
  makeStyles,
  withStyles,
  StepConnector,
  Snackbar,
} from "@material-ui/core";
import Check from "@material-ui/icons/Check";
import PerfectScrollbar from "react-perfect-scrollbar";
import MuiAlert from "@material-ui/lab/Alert";

/*View Imports */
import Toolbar from "./ToolbarBack.js";
import AccountInfo from "./AccountInfo";
import EducationalAttainment from "./EducationalAttainment";

/* Api Imports */
// import { useQuery, useMutation } from "@apollo/client";

/* Query Imports */
// import {
//   GET_QUERY,
//   CREATE_USER,
//   CHECK_IS_USERNAME_EXIST,
//   GET_ROLES,
//   UPDATE_USER_ROLE,
//   CREATE_EMPLOYEE,
//   GET_SKILLS,
//   UPDATE_EMPLOYEE,
//   CREATE_EMPLOYEE_INFO,
// } from "./Query";
// import { GET_EMPLOYEE } from "../view/Query";

/* Create Styles */
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "100%",
    borderRadius: "1%",
    // marginTop: "30px",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  card: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },

    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    borderRadius: "16px",
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  head: {
    borderBottom: "1px solid #E2E2E2",
    padding: "10px",
    width: "100%",
  },
}));

/* Context Instance */
export const FormContext = createContext();

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

// <------------------------------------------------ Style Section ------------------------------------------------------>

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#a82925",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#a82925",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#a82925",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#a82925",
    zIndex: 1,
    fontSize: 18,
  },
});

// <------------------------------------------------- Default State --------------------------------------------------------?

const states = {
  accountInfo: {
    info: {
      first_name: "",
      middle_name: "",
      last_name: "",
      gender: "",
      address: "",
      birth_date: "",
      email: "",
      mobile_number: "",
      photo: "",
    },
    // credential: {
    //   roles: ["employee"],
    //   username: "",
    //   password: "",
    //   confirm_password: "",
    // },
    location: {
      region: "",
      province: "",
      municipality: "",
    },
  },
  employeeInfo: {
    personal_info: {
      first_name: "",
      middle_name: "",
      last_name: "",
      suffix: "",
      nick_name: "",
      birth_date: "",
      birth_place: "",
      religion: "",
      marital_status: "",
      gender: "",
    },
    contact_info: {
      email: "",
      mobile_number: "",
    },
    address_info: {
      present_address: {
        location: "",
        region: "",
        city: "",
        province: "",
        barangay: "",
        postal_code: "",
      },
      permanent_address: {
        location: "",
        region: "",
        city: "",
        province: "",
        barangay: "",
        postal_code: "",
      },
    },
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
    applicant_status: "607e5a7ccac0c3344e768306",
    government_info: {
      tin: "",
      sss: "",
      pag_ibig: "",
      philhealth: "",
    },
    educational_attainment: {
      primary: {
        school_name: "",
        school_address: "",
        year_attainment: "",
        year_graduated: "",
      },
      secondary: {
        school_name: "",
        school_address: "",
        year_attainment: "",
        year_graduated: "",
      },
      tertiary: {
        school_name: "",
        school_address: "",
        course: "",
        year_attainment: "",
        year_graduated: "",
      },
    },
    status: "606e99f5423500bd4f5346e2",
    skills: [],
  },
};
let user_id = {};

let employee_infos = {
  employee_id: "",
  start_date: "",
  company: "",
  immediate_superior: "",
  branch: "",
  department: "",
  salary: "",
  position: "",
};

// <------------------------------------------------ Stepper ------------------------------------------->

const steps = [
  "Account Info",
  "Employee Info",
  // "Educational Attainment",
  // "Previous Employment",
  // "Skills",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <AccountInfo />
          {/* <Credential /> */}
        </>
      );
    case 1:
      return <EducationalAttainment />;
    // case 3:
    //   return <PreviousEmployment />;
    // case 4:
    //   return <Skills />;
    default:
      throw new Error("Unknown step");
  }
}

// <-------------------------------------------------------------- Main Component --------------------------------------------------->

export default ({ action }) => {
  /* Validation Initialization & Instance   */
  const state = states && states;
  const classes = useStyles();
  const [openSnackbar, setSnackbar] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "left",
  });
  const [activeStep, setActiveStep] = useState(0);

  const { vertical, horizontal } = openSnackbar;

  // <---------------------------------------------------------------- API Hooks --------------------------------------------------------->

  // const { data: dataQuery } = useQuery(GET_QUERY, { errorPolicy: "all" });

  // const { data: dataSkills } = useQuery(GET_SKILLS, { errorPolicy: "all" });

  // const { data: dataRoles } = useQuery(GET_ROLES, { errorPolicy: "all" });

  // const [updateEmployee] = useMutation(UPDATE_EMPLOYEE, {
  //   errorPolicy: "all",
  // });

  // const [checkUsernameExist] = useMutation(CHECK_IS_USERNAME_EXIST, {
  //   errorPolicy: "all",
  // });

  // const [createUser] = useMutation(CREATE_USER, {
  //   errorPolicy: "all",
  // });

  // const [createEmployeeData] = useMutation(CREATE_EMPLOYEE, {
  //   errorPolicy: "all",
  // });

  // const [createEmployeeInfos] = useMutation(CREATE_EMPLOYEE_INFO, {
  //   onCompleted() {
  //     setSnackbar({ open: true, vertical: "bottom", horizontal: "left" });
  //   },
  //   errorPolicy: "all",
  // });

  // const [updateUserRole] = useMutation(UPDATE_USER_ROLE, {
  //   errorPolicy: "all",
  // });

  // <--------------------------------------------------- Component Functions -------------------------------------------->

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ ...openSnackbar, open: false });
  };

  const handleDone = async (data) => {
    const {
      accountInfo: { info, credential },
      employeeInfo: {
        personal_info: { religion, marital_status, suffix, nick_name },
        address_info: { present_address },
      },
      employeeInfos: {
        company,
        department,
        position,
        shift,
        salary,
        start_date,
        branch,
      },
    } = { ...data };

    let account = { ...data.accountInfo };
    delete account.credential.confirm_password;
    account.info.address =
      data.employeeInfo.address_info.present_address.province;

    // const {
    //   data: {
    //     createUser: { user },
    //   },
    // } = await createUser({ variables: { input: account } });

    // user_id = user._id;

    const employee = states.employeeInfo;

    employee.personal_info = data.employeeInfo.personal_info;
    employee.personal_info.first_name = info.first_name;
    employee.personal_info.middle_name = info.middle_name;
    employee.personal_info.last_name = info.last_name;
    employee.personal_info.birth_date = info.birth_date;
    employee.personal_info.birth_place = present_address.province;
    employee.personal_info.gender = info.gender;
    employee.contact_info.email = info.email;
    employee.contact_info.mobile_number = info.mobile_number;
    employee.address_info.present_address = present_address;
    employee.address_info.permanent_address = present_address;
    employee.address_info.present_address.postal_code = parseInt(
      present_address.postal_code
    );

    employee.account = user_id;

    // const {
    //   data: { createEmployee },
    // } = await createEmployeeData({
    //   variables: { input: employee },
    // });

    // updateEmployee({ variables: { id: createEmployee._id, input: employee } });

    const immediateSuperior = {
      name: "",
      contact_number: "",
      position: "",
    };

    employee_infos.salary = parseFloat(salary);
    employee_infos.company = company;
    employee_infos.department = department;
    employee_infos.start_date = start_date;
    employee_infos.branch = branch;
    employee_infos.position = position;
    employee_infos.shift = shift;
    // employee_infos.employee_id = createEmployee._id;
    employee_infos.immediate_superior = { ...immediateSuperior };

    const userRole = ["employee"];

    // updateUserRole({ variables: { id: user_id, roles: userRole } });

    // const {
    //   data: { createEmployeeInfo },
    // } = await createEmployeeInfos({
    //   variables: { input: employee_infos },
    //   refetchQueries: [
    //     {
    //       query: GET_EMPLOYEE,
    //     },
    //   ],
    // });

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const isUsernameExist = (payload) => {
    // return checkUsernameExist({ variables: { input: payload } });
  };

  const useFormInstance = useForm({
    shouldFocusError: false,
    defaultValues: state,
  });

  const { handleSubmit, errors, setValue } = useFormInstance;

  // const status = dataQuery?.employeeStatus.filter((status) => {
  //   return status.name == "Hired";
  // });

  // const position = dataQuery?.positions;
  // const companies = dataQuery?.companies;
  // const branches = dataQuery?.branches;
  // const departments = dataQuery?.departments;
  // const shifts = dataQuery?.shifts;
  // const applicationstatuses = dataQuery?.applicantstatuses.filter((e) => {
  //   return e.code === 3;
  // });

  // <---------------------------------------------------- Component ---------------------------------------------------->

  return (
    <FormContext.Provider
      value={{
        useFormInstance,
        state,
        // roles: dataRoles?.roles,
        handleNext,
        handleBack,
        handleSubmit,
        handleDone,
        // position: position,
        // companies: companies,
        // branches: branches,
        // departments: departments,
        // shifts: shifts,
        // applicationstatuses: applicationstatuses,
        // genders: dataQuery?.genders,
        // maritalStatus: dataQuery?.maritalStatus,
        // religions: dataQuery?.religions,
        // skills: dataSkills?.ski  lls,
        isUsernameExist,
        isDisabled: action === "view",
      }}
    >
      <Toolbar />
      <main className={classes.layout}>
        <Card className={classes.card}>
          <Grid container spacing={3}>
            {/* <Grid
                md={6}
                xs={12}
                item
                style={{
                  backgroundImage:
                    "url(" + "/static/images/sideWrapper.jpg" + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Box mt={10} className={classes.banner}></Box>
              </Grid> */}
            <Box className={classes.head} align="center">
              <div>
                <img
                  src="/static/images/patient.png"
                  alt=""
                  width="200"
                  height="80"
                />
              </div>
            </Box>
            <Grid md={12} xs={12} item>
              <PerfectScrollbar>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        {/* <Stepper
                          alternativeLabel
                          activeStep={activeStep}
                          connector={<QontoConnector />}
                        >
                          {steps.map((label, index) => (
                            <Step key={index}>
                              <StepLabel StepIconComponent={QontoStepIcon}>
                                {label}
                              </StepLabel>
                            </Step>
                          ))}
                        </Stepper> */}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </PerfectScrollbar>
            </Grid>
            <Grid md={12} xs={12} item>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Employee Creation Success.
                    </Typography>
                    <Typography variant="subtitle1">
                      Please advise the employee to login and update his/her
                      details. Thankyou!
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep > 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      {/* {activeStep === steps.length - 1 ? ( */}
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleSubmit(handleDone)}
                          className={classes.button}
                        >
                          Done
                        </Button>
                      {/* ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleSubmit(handleNext)}
                          className={classes.button}
                        >
                          Next
                        </Button>
                      )} */}
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Grid>
          </Grid>
        </Card>
      </main>

      {/* <---------------------------------------- Snack Bar ------------------------------------------------> */}

      <Snackbar
        open={openSnackbar.open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleCloseSnackbar}
        key={vertical + horizontal}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Submit Success!
        </Alert>
      </Snackbar>
      {/* <div className={classes.root}>
        <Grid>
          <TripMode />
          <PaymentForm />
        </Grid>
      </div> */}

      {/* <BackDrop
        loading={loadingQuery | loadingCreateEmployee | loadingCreateUser}
      />
      <ErrorDialog error={errorQuery | errorCreateEmployee | errorCreateUser} /> */}
    </FormContext.Provider>
  );
};
