import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withStyles,
} from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import { Check, Close } from "@material-ui/icons";

const GreenButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  linearProgress: {
    width: "30%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  content: {
    width: "350px",
    padding: "20px",
  },
}));

export default ({ isShow, onHandleToogle, onConfirmed }) => {
  const classes = useStyles();

  return (
    <>
      <Dialog
        open={isShow}
        onClose={onHandleToogle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
        <DialogContent className={classes.content}>
          <DialogContentText id="alert-dialog-description">
            <Typography color="textPrimary" variant="inherit">
              Are you sure to delete?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <GreenButton
            startIcon={<Check />}
            autoFocus
            onClick={onConfirmed}
            variant="contained"
          >
            Confirm
          </GreenButton>
          <Button
            startIcon={<Close />}
            color="primary"
            autoFocus
            onClick={onHandleToogle}
            variant="contained"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
