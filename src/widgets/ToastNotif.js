/* Core Imports */
import React, { useState, useEffect } from "react";

/* UI Imports */
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";


const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export default ({ toastProps }) => {

  const [openSnackbar, setSnackbar] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
    messsage: "Success",
    status:"success"
  });

  const { vertical, horizontal, message } = openSnackbar;

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ ...openSnackbar, open: false });
  };

  useEffect(() => {
    setSnackbar({ ...toastProps });
  }, [toastProps])


  return (

      <Snackbar
        open={openSnackbar.open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleCloseSnackbar}
        key={vertical + horizontal}
      >
        <Alert onClose={handleCloseSnackbar} severity={openSnackbar.status}>
          {message}
        </Alert>
      </Snackbar>
  );
};
