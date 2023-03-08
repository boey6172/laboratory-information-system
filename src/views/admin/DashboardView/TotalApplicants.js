/* Core Imports */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/* UI Imports */
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";

// /* Api Imports */
// import { useQuery } from "@apollo/client";

// /* Query Imports */
// import { GET_EMPLOYEE_BY_APPLICANT_STATUS } from "./Query";

/* Create Styles */
import clsx from "clsx";
const useStyles = makeStyles({
  root: {
    height: "100%",
    backgroundColor: "#7A4F01",
  },
  avatar: {
    color: "#fff",
    height: "80px",
    width: "80px",
    opacity: "0.12",
  },
});

const TasksProgress = ({ applicantStatuses, employeeStatuses, className, ...rest }) => {
  const classes = useStyles();
  const [totalApplicant, setTotalApplicant] = useState()
  const applicantStatus = applicantStatuses?.filter(e => e.code == 1)?.[0]._id;
  const employeeStatus = employeeStatuses?.filter(e => e.name == "Applicant")?.[0]._id;
  // const {
  //   loading: loadingEmployeeInfo, 
  //   error: errorEmployeeInfo,
  //   data: dataEmployeeInfo
  // } = useQuery(GET_EMPLOYEE_BY_APPLICANT_STATUS, {
  //   variables:{
  //     status: employeeStatus,
  //     applicant_status: applicantStatus
  //   }
  // });

  // const {
  //   data: dataEmployeeInfo
  // } = useQuery(GET_EMPLOYEE_BY_APPLICANT_STATUS, {
  //   variables:{
  //     status: employeeStatus,
  //     applicant_status: applicantStatus
  //   }
  // });


  // useEffect(() => {
  //   if(dataEmployeeInfo){
  //     setTotalApplicant(dataEmployeeInfo.employeesWtApplicantStatus.length)
  //   }
  // }, [dataEmployeeInfo])

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
      style={{
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow:
          "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
        borderRadius: "16px",
      }}
    >
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
              style={{
                color: "#fff",
                opacity: "0.72",
                fontFamily: "Be Vietnam, sans-serif",
              }}
            >
              Total Number of Applicant
            </Typography>
            <Typography
              style={{
                color: "#e2e2e2",
                fontFamily: "Be Vietnam, sans-serif",
                fontWeight: "600",
              }}
              variant="h3"
            >
              {totalApplicant}
            </Typography>
          </Grid>
          <Grid item>
            <SupervisedUserCircle className={classes.avatar} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TasksProgress.propTypes = {
  className: PropTypes.string,
};

export default TasksProgress;