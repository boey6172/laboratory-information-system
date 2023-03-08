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
import PeopleAlt from "@material-ui/icons/PeopleAlt";

// /* Api Imports */
// import { useQuery } from "@apollo/client";

// /* Query Imports */
// import { GET_EMPLOYEE_BY_APPLICANT_STATUS } from "./Query";

/* Create Styles */
import clsx from "clsx";
const useStyles = makeStyles({
  root: {
    height: "100%",
    backgroundColor: "#005249",
  },
  avatar: {
    color: "#fff",
    height: "80px",
    width: "80px",
    opacity: "0.12",
  }
});

const Budget = ({ applicantStatuses, employeeStatuses, className, ...rest }) => {
  const classes = useStyles();
  const [totalEmployees, setTotalEmployees] = useState();
  const applicantStatus = applicantStatuses?.filter(e => e.code == 6)?.[0]._id;
  const employeeStatus = employeeStatuses?.filter(e => e.name == "Hired")?.[0]._id;
  
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
  //     setTotalEmployees(dataEmployeeInfo.employeesWtApplicantStatus.length)
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
              style={{
                color: "#fff",
                opacity: "0.72",
                fontFamily: "Be Vietnam, sans-serif",
              }}
              gutterBottom
              variant="h6"
            >
              Total Number of Employees
            </Typography>
            <Typography
              style={{ color: "#e0e0e0",
              fontFamily: "Be Vietnam, sans-serif",
              fontWeight: "600",
            }}
              color="textPrimary"
              variant="h3"
            >
              1
              {/* {totalEmployees} */}
            </Typography>
          </Grid>
          <Grid item>
            <PeopleAlt className={classes.avatar} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Budget.propTypes = {
  className: PropTypes.string,
};

export default Budget;