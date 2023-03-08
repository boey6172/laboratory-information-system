import React, { useState, useContext } from "react";
import clsx from "clsx";
import moment from "moment";
import { ParentContext } from "../../user";
import { green } from "@material-ui/core/colors";
import PerfectScrollbar from "react-perfect-scrollbar";
import ConfirmDialog from "../../../../../widgets/ConfirmDeleteDialog";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  withStyles,
  Button,
} from "@material-ui/core";
import getInitials from "../../../../../utils/getInitials";
// import {DELETE_USER} from '../query';
// import { useMutation } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2),
  },
  buttonSpacing: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    // color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

export default ({ users, className, ...rest }) => {
  const classes = useStyles();
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const { dispatch } = useContext(ParentContext);
  const [isToogle, setIsToogle] = useState(false);
  const [deleteId, setDeleteId] = useState();

  // const [ deleteUser,{ loading: loadingdeleteUser, error: errordeleteUser }, ] = useMutation(DELETE_USER, {
  //   onCompleted(data) {
  //     window.location = window.location;
  //   },
  //   errorPolicy: "all",
  // });

  const onHandleToogle = () => {
    setIsToogle(!isToogle);
  };

  const onDelete = (id) => {
    setIsToogle(!isToogle);
    setDeleteId(id);
  };

  const onConfirmed = (e) => {
    e.preventDefault();
    // deleteUser({ variables: { id: deleteId } });
    setIsToogle(!isToogle);
  };

  return (
    <>
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
        <PerfectScrollbar>
          <Box minWidth={1050}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile Number</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users &&
                  users.map((user, index) => (
                    <TableRow
                      hover
                      key={user._id}
                      selected={selectedUserIds.indexOf(user._id) !== -1}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <Box alignItems="center" display="flex">
                          {/* <Avatar
                          className={classes.avatar}
                          src={customer.avatarUrl}
                        >
                          {getInitials(customer.name)}
                        </Avatar> */}
                          <Typography color="textPrimary" variant="body1">
                            {/* {`${user.info.first_name} ${user.info.middle_name} ${user.info.last_name}`} */}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{user.username}</TableCell>
                      {/* <TableCell>{user.info.email}</TableCell>
                      <TableCell>{user.info.mobile_number}</TableCell> */}
                      <TableCell>
                        <div className={classes.buttonSpacing}>
                          <ColorButton
                            variant="contained"
                            color="primary"
                            onClick={() => {
                              dispatch({ type: "view", payload: user });
                            }}
                          >
                            View
                          </ColorButton>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                              dispatch({ type: "update", payload: user });
                            }}
                          >
                            Update
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => onDelete(user._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>
      <ConfirmDialog
        isShow={isToogle}
        onHandleToogle={onHandleToogle}
        onConfirmed={onConfirmed}
      />
    </>
  );
};
