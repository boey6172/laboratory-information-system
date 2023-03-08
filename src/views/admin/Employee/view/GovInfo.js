/* Core Imports */
import React, { useContext } from "react";
import PropTypes from "prop-types";

/* UI Imports */
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

/*View Imports */
import UpdateGovInfo from "./update/GovInfo/updateGovInfo";

/* Context Instance */
import { Context } from "./index";

/* Create Styles */
import clsx from "clsx";
const useStyles = makeStyles({
  root: {
    borderRadius: "3%",
  },
});

const GovInfo = ({ className, ...rest }) => {
  const classes = useStyles();
  const { govInfo, employeeInfo } = useContext(Context);

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
        action={
          <UpdateGovInfo style={{ cursor: "pointer" }} data={employeeInfo} />
        }
        title="Goverment Info"
      />
      <Divider />
      <Box p={3}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                style={{ border: "none", padding: "3px", width: "140px" }}
              >
                <font color="#616161">GSIS No: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {govInfo?.gsisNumber}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">PhilHealth No: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {govInfo?.philNumber}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">Pag-Ibig No: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {govInfo?.pagIbigNumber}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">TIN No: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {govInfo?.tinNumber}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "none", padding: "3px" }}>
                <font color="#616161">NHMC No: </font>
              </TableCell>
              <TableCell style={{ border: "none", padding: "3px" }}>
                {govInfo?.nhmcNumber}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

GovInfo.propTypes = {
  className: PropTypes.string,
};

export default GovInfo;
