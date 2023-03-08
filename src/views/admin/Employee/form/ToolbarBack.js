/* Core Imports */
import React, { useContext } from "react";

/* UI Imports */
import {
  Box,
  Button,
  makeStyles,
} from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

/* Context Instance */
import { ParentContext } from "../index";

/* Create Styles */
import clsx from "clsx";
const useStyles = makeStyles((props) => ({
  root: {
    marginTop: "40px",
    padding: "0px 140px 0px 140px",
    [props.breakpoints.only("lg")]: {
      paddingRight: "100px",
      paddingLeft: "100px",
    },
    [props.breakpoints.only("md")]: {
      paddingRight: "70",
      paddingLeft: "70",
    },
    [props.breakpoints.only("sm")]: {
      paddingRight: "0",
      paddingLeft: "0",
    },
    [props.breakpoints.only("xs")]: {
      paddingRight: "0",
      paddingLeft: "0",
    },
  },
}));

export default ({ className, ...rest }) => {
  const { dispatch } = useContext(ParentContext);
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" justifyContent="flex-start" mt={4}>
        <Button onClick={(e) => dispatch({ type: "list" })}>
          <KeyboardBackspaceIcon />
          &nbsp;Go Back
        </Button>
      </Box>
    </div>
  );
};
