import React, { useState, useContext } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import useAuthentication from "src/hooks/useAuthentication";
import BackdropFilter from "react-backdrop-filter";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Avatar,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { Context } from "./index";

const sample = {
  avatar: "/static/images/avatars/avatar_3.png",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
};

const useStyles = makeStyles((props) => ({
  root: {},
  actions: {
    justifyContent: "flex-end",
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
  banner: {
    height: "100px",
    backgroundColor: "none",
  },
  bluredHeader: {
    backgroundColor: "rgba(56, 56, 56, 0.68)",
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
}));

const LatestUsers = ({ className, ...rest }) => {
  const { employeeInfo } = useContext(Context);
  const { getUser } = useAuthentication();
  const user = getUser();
  const classes = useStyles();
  return (
    <>
      <Card
        className={clsx(classes.root)}
        {...rest}
        style={{
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          boxShadow:
            "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
          borderRadius: "16px",
          marginTop: "23px",
        }}
      >
        <Grid container>
          {/* <Grid
            xs={12}
            // item
            // style={{
            //   backgroundImage: "url(" + "/static/images/header.jpg" + ")",
            //   backgroundPosition: "center",
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            // }}
          >
            <Box mt={10} className={classes.banner} p={4}></Box>
          </Grid> */}
          <Grid item xs={12} style={{ borderBottom: "1px solid #e0e0e0" }}>
            {" "}
            <Box>
              <Card
                className={clsx(classes.root)}
                {...rest}
                style={{
                  backgroundImage: "url(" + "/static/images/building.jpg" + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <BackdropFilter
                  filter={"blur(3px) sepia(50%)"}
                  html2canvasOpts={{
                    allowTaint: true,
                  }}
                  className={classes.bluredHeader}
                >
                  {" "}
                  <Box className={classes.avatarDetails}>
                    <Typography variant="h4" style={{ color: "#fff" }}>
                      {`${employeeInfo?.personal_info?.first_name}
                      ${employeeInfo?.personal_info?.middle_name}
                      ${employeeInfo?.personal_info?.last_name}
                      ${employeeInfo?.personal_info?.suffix}`}
                    </Typography>
                    <Typography
                      style={{ color: "#bdbdbd" }}
                      variant="subtitle2"
                    >
                      {employeeInfo?.employee_info?.position?.name}
                    </Typography>
                  </Box>
                </BackdropFilter>
              </Card>
            </Box>
            <Box flexDirection="column" style={{ marginTop: "-20px" }} p={2}>
              <Avatar className={classes.avatar} src={sample.avatar} />
            </Box>
          </Grid>

          <Grid item container xs={12}>
            <Box p={3}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell
                      style={{ border: "none", padding: "3px", width: "100px" }}
                    >
                      <font color="#616161">Address: </font>
                    </TableCell>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      {employeeInfo.personal_info.birth_place}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      <font color="#616161">Gender: </font>
                    </TableCell>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      {employeeInfo.personal_info.gender.name}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      <font color="#616161">Username: </font>
                    </TableCell>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      {employeeInfo?.account?.credential.username}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      <font color="#616161">E-mail: </font>
                    </TableCell>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      {employeeInfo.contact_info.email}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      <font color="#616161">Birthday: </font>
                    </TableCell>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      {employeeInfo.personal_info.birth_date}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

LatestUsers.propTypes = {
  className: PropTypes.string,
};

export default LatestUsers;
