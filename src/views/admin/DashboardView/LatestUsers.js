/* Core Imports */
import React, { useContext } from "react";
import PropTypes from "prop-types";

/* UI Imports */
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  Link,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

/* Context Instance */
import { Context } from "./index";

/* Create Styles */
import clsx from "clsx";
const useStyles = makeStyles({
  root: {},
  actions: {
    justifyContent: "flex-end",
  },
});

const LatestUsers = ({ className, ...rest }) => {
  const { latestUsers } = useContext(Context);
  const classes = useStyles();
  let users = latestUsers?.slice(Math.max(latestUsers.length - 8)).reverse()

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
      <CardHeader title="Latest Users" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow style={{ background: "#EBEDF0" }}>
                <TableCell>No.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((user, index) => (
                <TableRow hover key={user?._id}>
                  <TableCell style={{ border: "none" }}>{index + 1}</TableCell>
                  <TableCell
                    style={{ border: "none" }}
                  >{`${user?.info?.first_name} ${user?.info?.last_name}`}</TableCell>
                  <TableCell style={{ border: "none" }}>
                    {user?.info?.address}
                  </TableCell>
                  <TableCell style={{ border: "none" }}>
                    {user?.info?.email}
                  </TableCell>
                  <TableCell style={{ border: "none" }}>
                    {user?.info?.mobile_number}
                  </TableCell>
                  <TableCell style={{ border: "none" }}>
                    {user?.info?.gender?.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          <Link color="inherit" href="/admin/maintenance/user">
            View all
          </Link>
        </Button>
      </Box>
    </Card>
  );
};

LatestUsers.propTypes = {
  className: PropTypes.string,
};

export default LatestUsers;