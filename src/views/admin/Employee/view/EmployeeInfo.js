/* Core Imports */
import React, { useContext } from "react";
import moment from "moment";
import PropTypes from "prop-types";

/* UI Imports */
import {
  Box,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";

/*View Imports */
import UpdateEmployeeInfo from './update/EmployeeInfo/EmployeeInfo'

/* Context Instance */
import { Context } from "./index";

/* Create Styles */
import clsx from "clsx";
const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "3%",
  },
}));

const EmployeeInfo = ({ className, ...rest }) => {
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
        title="Employee Info" 
        // action={
        //   <UpdateEmployeeInfo style={{ cursor: "pointer" }} data={employeeInfo} />
        // }
      />
      <Divider />
      <Box p={3}>
        <Table>
          <TableBody>
            {/* <TableRow>
              <TableCell
                style={{ border: "none", padding: "3px", width: "170px" }}
              >
                <font color="#616161">ID Number: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {employeeInfo?.employee_info?.identification_number}
              </TableCell>
            </TableRow> */}
            {/* <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Contract Number: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {employeeInfo?.employee_info?.contract_number}
              </TableCell>
            </TableRow> */}
            {/* <TableRow>
              <TableCell
                style={{ border: "none", padding: "3px", width: "170px" }}
              >
                <font color="#616161">Company Name: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {employeeInfo?.employee_info?.company?.name}
              </TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Branch: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {employeeInfo?.RegionAssignment.regionAssignment}
              </TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Department: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {employeeInfo?.employee_info?.department?.name}
              </TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Rank: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {employeeInfo?.Rank?.rank}
              </TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Shift Name: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {employeeInfo?.employee_info?.shift?.name}
              </TableCell>
            </TableRow> */}
            {/* <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Shift: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {moment(employeeInfo?.employee_info?.shift?.in_starting, ["kk:mm"]).format("hh:mm A")} - {moment(employeeInfo?.employee_info?.shift?.out_ending, ["kk:mm"]).format("hh:mm A")}
              </TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Salary Grade: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {employeeInfo?.salaryGrade}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Date Started: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {moment(employeeInfo?.start_date).format(
                  "DD/MM/YYYY"
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

EmployeeInfo.propTypes = {
  className: PropTypes.string,
};

export default EmployeeInfo;
