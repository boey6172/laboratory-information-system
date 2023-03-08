/* Core Imports */
import React, {useState, useEffect} from "react";
import moment from 'moment'
import PropTypes from "prop-types";

/* UI Imports */
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { EventAvailable } from "@material-ui/icons";

// /* Api Imports */
// import { useQuery } from "@apollo/client";

// /* Query Imports */
// import { GET_BIRTH_MONTH } from "./Query";


/* Create Styles */
import clsx from "clsx";
const useStyles = makeStyles({
  root: {
    height: "100%",
    backgroundColor: "#827717",
  },
  avatar: {
    color: "#fff",
    height: "80px",
    width: "80px",
    opacity: "0.12",
  },
});

const TotalCustomers = ({ className, ...rest }) => {
  const classes = useStyles();
  const [totalEmployeeBirthMonth ,setTotalEmployeeBirthMonth] = useState(1);
  const month = parseInt( moment().format('M') );

  // const { loading, error, data, refetch } = useQuery(
  //   GET_BIRTH_MONTH,
  //   {
  //     variables: { month: month },
  //   },
  //   {
  //     errorPolicy: "all",
  //   }
  // );

  // const { data } = useQuery(
  //   GET_BIRTH_MONTH,
  //   {
  //     variables: { month: month },
  //   },
  //   {
  //     errorPolicy: "all",
  //   }
  // );
  
  // useEffect(() => {
  //   if(data){
  //     const filteredData = data?.employeesBirthMonth?.filter((e) => {
  //       return e.applicant_status.code == 6 && e.status.name == "Hired";
  //     })

  //   setTotalEmployeeBirthMonth(filteredData.length)
  //   }
  // }, [data])


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
              Birthday's of The month
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
              style={{
                color: "#e2e2e2",
                fontFamily: "Be Vietnam, sans-serif",
                fontWeight: "600",
              }}
            >
              {totalEmployeeBirthMonth}
            </Typography>
          </Grid>
          <Grid item>
            <EventAvailable className={classes.avatar} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalCustomers.propTypes = {
  className: PropTypes.string,
};

export default TotalCustomers;