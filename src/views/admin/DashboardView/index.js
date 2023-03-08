/* Core Imports */
import React, { createContext } from "react";

/* UI Imports */
import { Container, Grid, makeStyles } from "@material-ui/core";
import ErrorDialog from "../../..//widgets/ErrorDialog";
import BackDrop from "../../../widgets/BackDrop";
import Fade from "react-reveal/Fade";

/*View Imports */
import Page from "../../../components/Page";
import TotalEmployees from "./TotalEmployees";
import LatestUsers from "./LatestUsers";
import TotalApplicants from "./TotalApplicants";
import BirthdaysWithinTheMonth from "./BirthdaysWithinTheMonth";
import TotalClients from "./TotalClients";
import TrafficByVehicle from "./TrafficByVehicle";

// /* Api Imports */
// import { useQuery } from "@apollo/client";

// /* Query Imports */
// import { GET_USERS, GET_APPLICANT_STATUSES, GET_EMPLOYEE_STATUSES } from "./Query";

/* Context Instance */
export const Context = createContext();

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "100%",
    borderRadius: "1%",
    marginTop: "60px",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

export default () => {
  const classes = useStyles();

  // const {
  //   loading: loadingUser,
  //   error: errorUser,
  //   data: dataUser,
  // } = useQuery(GET_USERS, { errorPolicy: "all" });

  // const {
  //   data: dataApplicantStatuses
  // } = useQuery(GET_APPLICANT_STATUSES, {errorPolicy: "all"})

  // const {
  //   data: dataEmployeeStatuses
  // } = useQuery(GET_EMPLOYEE_STATUSES, {errorPolicy: "all"})

  return (
    <>
      <Context.Provider
        // value={{
        //   latestUsers: dataUser?.users,
        // }}
      >
        <Page className={classes.root} title="Dashboard">
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Fade top>
                  <TotalEmployees 
                    // applicantStatuses = {dataApplicantStatuses?.applicantstatuses}
                    // employeeStatuses = {dataEmployeeStatuses?.employeeStatus}
                  />
                </Fade>
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Fade top>
                  <BirthdaysWithinTheMonth />
                </Fade>
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Fade top>
                  {/* <TotalApplicants 
                    // applicantStatuses = {dataApplicantStatuses?.applicantstatuses}
                    // employeeStatuses = {dataEmployeeStatuses?.employeeStatus}
                  /> */}
                </Fade>
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Fade top>
                  {/* <TotalClients data={dataUser?.users} /> */}
                </Fade>
              </Grid>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <Fade bottom>
                  {/* <LatestUsers /> */}
                </Fade>
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                <Fade right>
                  {/* <TrafficByVehicle 
                    // applicantStatuses = {dataApplicantStatuses?.applicantstatuses}
                    // employeeStatuses = {dataEmployeeStatuses?.employeeStatus}
                  /> */}
                </Fade>
              </Grid>
            </Grid>
          </Container>
        </Page>
      </Context.Provider>
      {/* <BackDrop loading={loadingUser} /> */}
      {/* <ErrorDialog                                 error={errorUser} /> */}
    </>
  );
};