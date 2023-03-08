import React from "react";
import { makeStyles, Backdrop, LinearProgress } from "@material-ui/core";

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

export default ({ loading = false }) => {
  const classes = useStyles();
  return (
    <>
      <Backdrop className={classes.backdrop} open={loading}>
        <LinearProgress className={classes.linearProgress} color="primary" />
      </Backdrop>
    </>
  );
};
