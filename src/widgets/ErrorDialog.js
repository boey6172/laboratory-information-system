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
} from "@material-ui/core";

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
}));

export default ({ error }) => {
  const classes = useStyles();
  const [isShowError, setIsShowError] = useState(false);

  const handleErrorDialog = () => {
    setIsShowError(!isShowError);
  };

  useEffect(() => {
    error && setIsShowError(error && true);
  }, [error]);

  return (
    <>
      <Dialog
        open={isShowError}
        onClose={handleErrorDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span>
            <Typography color="textPrimary" variant="h4">
              Please contact administrator !
            </Typography>
          </span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {error &&
              error.graphQLErrors.map(({ message }, i) => (
                <span key={i}>{message}</span>
              ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" autoFocus onClick={handleErrorDialog}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
