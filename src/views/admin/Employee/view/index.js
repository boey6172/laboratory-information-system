/* Core Imports */
import React, { createContext, useState,useEffect } from "react";
import PropTypes from "prop-types";

/* UI Imports */
import {
  Box,
  Grid,
  makeStyles,
  Card,
  Typography,
  AppBar,
  Tabs,
  Tab,
  withStyles,
  Avatar,
} from "@material-ui/core";
import Fade from "react-reveal/Fade";
import BackdropFilter from "react-backdrop-filter";

/*View Imports */
import Page from "../../../../components/Page";
import EducationalAttainment from "./EducationalAttainment";
import GovInfo from "./GovInfo";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Attachments from "./Attachments";
import Toolbar from "./Toolbar";
import EmployeeInfo from "./EmployeeInfo";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import Seperate from "./update/Seperate/Seperate";
import instance from "../../../../instance/instance";

/* Context Instance */
export const Context = createContext();

/* Create Styles */
const useStyles = makeStyles((props) => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "100%",
    borderRadius: "1%",
    marginTop: "30px",
  },
  boxStyle: {
    padding: "0px 140px 0px 140px",
    [props.breakpoints.only("lg")]: {
      paddingRight: "100px",
      paddingLeft: "100px",
    },
    [props.breakpoints.only("md")]: {
      paddingRight: "70",
      paddingLeft: "70",
    },
    [props.breakpoints.only("sm")]: {
      paddingRight: "0",
      paddingLeft: "0",
    },
    [props.breakpoints.only("xs")]: {
      paddingRight: "0",
      paddingLeft: "0",
    },
  },
  avatar: {
    cursor: "pointer",
    width: 150,
    height: 150,
    marginTop: "-110px",
    marginLeft: "20px",
    border: "3px solid #fff",
    [props.breakpoints.only("xs")]: {
      marginTop: "-160px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: 80,
      height: 80,
    },
  },
  bluredHeader: {
    backgroundColor: "rgba(40, 40, 40, 0.68)",
    height: "230px",
    width: "100%",
    top: "0",
  },
  avatarDetails: {
    marginLeft: "210px",
    marginTop: "180px",
    [props.breakpoints.only("xs")]: {
      marginTop: "160px",
      textAlign: "center",
      marginLeft: "0",
    },
  },
  header: {
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    borderRadius: "16px",
    marginTop: "23px",
  },
  appbar: {
    boxShadow: "none",
    background: "none",
    marginTop: "-40px",
    width: "530px",
    [props.breakpoints.only("xs")]: {
      marginTop: "80px",
      margin: "auto",
      width: "85%",
    },
  },
}));

const sample = {
  avatar: "/static/images/avatars/avatar_3.png",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
};

const cover = new Array(
  "/static/images/building.jpg",
  "/static/images/building4.jpg"
);

const randomNum = Math.floor(Math.random() * cover.length);

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={classes.root}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "red",
    "& > span": {
      maxWidth: 40,
      width: "100%",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#424242",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);



export default ({ data }) => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const [account, setAccount] = useState();
  const [education, setEducation] = useState();
  const [att, setAttachments] = useState(null);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // refetch();
    // instance.post("./employee/getemployee",data).then((response) => {
    //   setEmployee(response.data)
    //   console.log(employee)
    // }) 
    instance.post("./employee/getAccountInfo",data).then((response) => {
      setAccount(response.data)
      // console.log(account)
    })   
    instance.post("./school",data).then((response) => {
      setEducation(response.data)
    }) 
    instance.post("./attachments/attachments",data).then((response) => {
      setAttachments(response.data)
      // console.log(response.data)
      // console.log(att)
  
    })   
  
  
  }, []);

console.log(att)
  return (
    <>
      <Context.Provider
        value={{
          employeeInfo: data,
          educationalAttainment: education,
          accountInfo:account,
          govInfo: data,
          skills: data?.skills,
          attachments: att,
          previousEmployment: data?.previous_employment,
        }}
      >
        <Box mt={7}></Box>
        <Box className={classes.boxStyle} mt={4} mb={6}>
          <Toolbar />
          <Box>
            {/* <Seperate datas={data} className={classes.seperateBtn} /> */}
          </Box>
          <Fade top>
            <Card className={classes.header}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  style={{ borderBottom: "1px solid #e0e0e0" }}
                >
                  {" "}
                  <Box>
                    <Card
                      style={{
                        backgroundImage: "url(" + `${cover[randomNum]}` + ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <BackdropFilter
                        filter={"blur(1px) sepia(50%)"}
                        html2canvasOpts={{
                          allowTaint: true,
                        }}
                        className={classes.bluredHeader}
                      >
                        {" "}
                        <Box className={classes.avatarDetails}>
                          <Typography variant="h4" style={{ color: "#fff" }}>
                            {`${data?.firstname}
                              ${data?.middlename}
                              ${data?.lastname}
                              ${data?.suffix}`}
                          </Typography>
                          <Typography
                            style={{ color: "#bdbdbd" }}
                            variant="subtitle2"
                          >
                            {data?.employee_info?.position?.name}
                          </Typography>
                        </Box>
                      </BackdropFilter>
                    </Card>
                  </Box>
                  <Box flexDirection="column" style={{ marginTop: "-20px" }}>
                    <Avatar className={classes.avatar} src={sample.avatar} />
                    <Box display="flex" justifyContent="flex-end">
                      <AppBar position="static" className={classes.appbar}>
                        <StyledTabs
                          value={value}
                          onChange={handleChange}
                          variant="scrollable"
                          scrollButtons="auto"
                          textColor="secondary"
                        >
                          <StyledTab label="Profile" {...a11yProps(0)} />
                          <StyledTab label="Personal Info" {...a11yProps(1)} />
                          {/* <StyledTab label="More" {...a11yProps(2)} /> */}
                        </StyledTabs>
                      </AppBar>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Fade>
        </Box>

        <Page className={classes.root} title="Dashboard">
          <Box className={classes.boxStyle}>
            <TabPanel value={value} index={0}>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} xs={12}>
                  <Fade left>
                    <EmployeeInfo />
                  </Fade>
                  <Fade left>
                    {/* <Skills /> */}
                  </Fade>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <Fade right>
                    <Attachments />
                  </Fade>
                  <Fade right>
                    <GovInfo />
                  </Fade>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} xs={12}>
                  <Fade left>
                    <PersonalInfo />
                  </Fade>
                  <Fade left>
                    <ContactInfo />
                  </Fade>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <Fade right>
                    <EducationalAttainment />
                  </Fade>
                </Grid>
              </Grid>
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
              <WorkExperience />
            </TabPanel> */}
          </Box>
        </Page>
      </Context.Provider>
      {/* <BackDrop loading={loadingUser} />
      <ErrorDialog error={errorUser} /> */}
    </>
  );
};
