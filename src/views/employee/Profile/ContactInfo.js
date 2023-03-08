import React, { useContext } from "react";
import clsx from "clsx";
import moment from "moment";
import PropTypes from "prop-types";
// import { Bar } from "react-chartjs-2";
import { Context } from "./index";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import UpdateGovInfo from "./update/GovInfo/updateGovInfo";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "3%",
  },
}));

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { employeeInfo, accountInfo} = useContext(Context);

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
        // action={
        //   <UpdateGovInfo
        //     style={{ cursor: "pointer" }}
        //     data={employeeInfo?._id}
        //   />
        // }
        title="Contact and Account Info"
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
