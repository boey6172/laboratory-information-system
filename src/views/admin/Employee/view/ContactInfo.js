import React, { useContext } from "react";
import clsx from "clsx";
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
  const { accountInfo, employeeInfo} = useContext(Context);
  return (
    <Card
      className={clsx(classes.root)}
      {...rest}
      style={{
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow:
          "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
        borderRadius: "16px",
        marginTop: "24px",
      }}
    >
      <CardHeader
        title="Contact and Account Info"
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
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Username: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {accountInfo?.username}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">E-mail: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {accountInfo?.email}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Contact No: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {employeeInfo?.contactNumber}
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
