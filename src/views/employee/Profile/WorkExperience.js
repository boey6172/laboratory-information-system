import React, { useContext } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Context } from "./index";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  colors,
  Table,
  Grid,
  TableRow,
  TableBody,
  TableCell,
  Typography,
} from "@material-ui/core";
import UpdateWorkExperienceInfo from "./update/WorkExperience/updateWorkExperienceInfo";
import UpdateReason from "./update/WorkExperience/updateReason";
import UpdateImmediateSuperior from "./update/WorkExperience/updateImmediateSuperior";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();
  const { previousEmployment, employeeInfo } = useContext(Context);
  return (
    <Grid container spacing={3}>
      <Grid item md={5} xs={12}>
        <Fade left>
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
              title="Previous Work Experience"
              action={
                <UpdateWorkExperienceInfo
                  style={{ cursor: "pointer" }}
                  data={employeeInfo}
                />
              }
            />
            <Divider />
            <Box p={3}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell
                      style={{ border: "none", padding: "3px", width: "170px" }}
                    >
                      <font color="#616161">Company Name: </font>
                    </TableCell>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      {previousEmployment?.company_name}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      <font color="#616161">Company Address: </font>
                    </TableCell>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      {previousEmployment?.address}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      <font color="#616161">Position: </font>
                    </TableCell>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      {previousEmployment?.position}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      <font color="#616161">Position Rate: </font>
                    </TableCell>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      {previousEmployment?.salary === 0
                        ? ""
                        : previousEmployment?.salary}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      <font color="#616161">Date Started: </font>
                    </TableCell>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      {previousEmployment?.start_date}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      <font color="#616161">Date Seperated: </font>
                    </TableCell>
                    <TableCell style={{ border: "none", padding: "3px" }}>
                      {previousEmployment?.end_date}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Card>
        </Fade>
      </Grid>
      <Divider />
      <Grid item md={7} xs={12}>
        <Grid item xs={12}>
          <Fade right>
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
                title="Reason of Leaving"
                action={
                  <UpdateReason
                    style={{ cursor: "pointer" }}
                    data={employeeInfo}
                  />
                }
              />
              <Divider />
              <Box p={3}>
                <Typography variant="body2">
                  {previousEmployment?.reason_of_leaving}
                </Typography>
              </Box>
              <Divider />
            </Card>
          </Fade>
        </Grid>
        <Grid item xs={12}>
          <Fade right>
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
              <CardHeader
                title="Reference"
                action={
                  <UpdateImmediateSuperior
                    style={{ cursor: "pointer" }}
                    data={employeeInfo}
                  />
                }
              />
              <Divider />
              <Box p={3}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{
                          border: "none",
                          padding: "3px",
                          width: "170px",
                        }}
                      >
                        <font color="#616161">Immediate Superior: </font>
                      </TableCell>
                      <TableCell style={{ border: "none", padding: "3px" }}>
                        {previousEmployment?.immediate_superior.name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ border: "none", padding: "3px" }}>
                        <font color="#616161">Position: </font>
                      </TableCell>
                      <TableCell style={{ border: "none", padding: "3px" }}>
                        {previousEmployment?.immediate_superior.position}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ border: "none", padding: "3px" }}>
                        <font color="#616161">Contact No: </font>
                      </TableCell>
                      <TableCell style={{ border: "none", padding: "3px" }}>
                        {previousEmployment?.immediate_superior.contact_number}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Card>
          </Fade>
        </Grid>
      </Grid>
    </Grid>
  );
};

Sales.propTypes = {
  className: PropTypes.string,
};

export default Sales;
