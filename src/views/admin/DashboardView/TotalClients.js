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
import { BusinessCenter } from "@material-ui/icons";

// /* Api Imports */
// import { useQuery } from "@apollo/client";

// /* Query Imports */
// import { GET_COMPANIES } from "./Query";

/* Create Styles */
import clsx from "clsx";
const useStyles = makeStyles({
  root: {
    height: "100%",
    backgroundColor: "#00838f",
  },
  avatar: {
    color: "#fff",
    height: "80px",
    width: "80px",
    opacity: "0.12",
  },
});

const TotalProfit = ({ className, ...rest }) => {
  const classes = useStyles();
  const [totalCompany, setTotalCompany] = useState()

  // const { loading, error, data, refetch } = useQuery(GET_COMPANIES, {
  //   errorPolicy: "all",
  // });

  // const { data } = useQuery(GET_COMPANIES, {
  //   errorPolicy: "all",
  // });

  // useEffect(() => {
  //   if(data){
  //     setTotalCompany(data.companies.length)
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
              Total Number of Clients
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
              {totalCompany}
            </Typography>
          </Grid>
          <Grid item>
            <BusinessCenter className={classes.avatar} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalProfit.propTypes = {
  className: PropTypes.string,
};

export default TotalProfit;