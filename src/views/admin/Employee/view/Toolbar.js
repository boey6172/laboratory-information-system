import React, { useContext } from "react";
import { ParentContext } from "../index";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
  makeStyles,
  Breadcrumbs,
  Link,
} from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Search as SearchIcon } from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
}));

export default ({ className, ...rest }) => {
  const { dispatch } = useContext(ParentContext);
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={-4}>
        <Typography color="textSecondary" gutterBottom variant="h2">
          Employee Information
        </Typography>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit" href="/admin/driver">
            Employee
          </Link>
          <Link color="textPrimary">Profile</Link>
        </Breadcrumbs>
      </Box>
      <Box display="flex" justifyContent="flex-start" mt={4}>
        <Button onClick={(e) => dispatch({ type: "list" })}>
          <KeyboardBackspaceIcon />
          &nbsp;Go Back
        </Button>
      </Box>
    </div>
  );
};
