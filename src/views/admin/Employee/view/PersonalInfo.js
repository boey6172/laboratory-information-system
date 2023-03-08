import React, { useContext } from "react";
import clsx from "clsx";
import moment from "moment";
import PropTypes from "prop-types";
import { Context } from "./index";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "3%",
  },
}));

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();
  const { employeeInfo } = useContext(Context);

  return (
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
        title="Personal Info"
        // action={
        //   <UpdateGovInfo
        //     style={{ cursor: "pointer" }}
        //     data={employeeInfo?._id}
        //   />
        // }  
      />
      <Divider />
      <Box p={3}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                style={{ border: "none", padding: "3px", width: "140px" }}
              >
                <font color="#616161">Address: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {employeeInfo?.address}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Birthday: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {moment(employeeInfo?.birthday).format(
                  "DD/MM/YYYY"
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Gender: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {employeeInfo?.Gender.description}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Marital Status: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {employeeInfo?.TaxStatus.description}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Religion: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {employeeInfo?.Religion.religion}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string,
};

export default Sales;
