import React, { useState, useContext } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { Context } from "./index";
import UpdatePrimary from "./update/EducationalAttainment/updatePrimary";
import UpdateSecondary from "./update/EducationalAttainment/updateSecondary";
import UpdateTertiary from "./update/EducationalAttainment/updateTertiary";

const useStyles = makeStyles({
  root: {
    // height: "100%",
  },
  image: {
    height: 48,
    width: 48,
  },
  card: {
    background: "#fff",
    borderRadius: "3%",
    boxShadow: "1px 1px 0px 0px #e2e2e2",
  },
});

const LatestProducts = ({ className, ...rest }) => {
  const { educationalAttainment, employeeInfo } = useContext(Context);
  const classes = useStyles();
  const {primary,secondary,tertiary} = educationalAttainment;

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
        }}
      >
        <CardHeader
          title="Primary"
          action={
            <UpdatePrimary style={{ cursor: "pointer" }} 
            data={employeeInfo}
            primary={primary}
          />
          }
        />
        <Grid item xs={12}>
          <Box p={3}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell
                    style={{ border: "none", padding: "3px", width: "170px" }}
                  >
                    <font color="#616161">School Name: </font>
                  </TableCell>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    {educationalAttainment?.primary?.school_name}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    <font color="#616161">Address: </font>
                  </TableCell>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    {educationalAttainment?.primary?.address}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    <font color="#616161">Years Completed: </font>
                  </TableCell>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    {educationalAttainment?.primary?.year_completed}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    <font color="#616161">Year Graduated: </font>
                  </TableCell>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    {educationalAttainment?.primary?.year_graduated}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Grid>
        <Divider />
        <CardHeader title="Secondary"  action={
            <UpdateSecondary
              style={{ cursor: "pointer" }}
              data={employeeInfo}
              secondary={secondary}
            />
          }/>
        <Grid item xs={12}>
          <Box p={3}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell
                    style={{ border: "none", padding: "3px", width: "170px" }}
                  >
                    <font color="#616161">School Name: </font>
                  </TableCell>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    {educationalAttainment?.secondary?.school_name}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    <font color="#616161">Address: </font>
                  </TableCell>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    {educationalAttainment?.secondary?.address}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    <font color="#616161">Years Completed: </font>
                  </TableCell>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    {educationalAttainment?.secondary?.year_completed}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    <font color="#616161">Year Graduated: </font>
                  </TableCell>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    {educationalAttainment?.secondary?.year_graduated}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Grid>
        <Divider />
        <CardHeader title="Tertiary"  action={
            <UpdateTertiary style={{ cursor: "pointer" }} 
              data={employeeInfo}
              tertiary={tertiary}
            />
          }/>
        <Grid item xs={12}>
          <Box p={3}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell
                    style={{ border: "none", padding: "3px", width: "170px" }}
                  >
                    <font color="#616161">School Name: </font>
                  </TableCell>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    {educationalAttainment?.tertiary?.school_name}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    <font color="#616161">Address: </font>
                  </TableCell>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    {educationalAttainment?.tertiary?.address}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    <font color="#616161">Course: </font>
                  </TableCell>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    {educationalAttainment?.tertiary?.course}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    <font color="#616161">Years Completed: </font>
                  </TableCell>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    {educationalAttainment?.tertiary?.year_completed}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    <font color="#616161">Year Graduated: </font>
                  </TableCell>
                  <TableCell style={{ border: "none", padding: "3px" }}>
                    {educationalAttainment?.tertiary?.year_graduated}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Grid>
      </Card>
    </>
  );
};

LatestProducts.propTypes = {
  className: PropTypes.string,
};

export default LatestProducts;
