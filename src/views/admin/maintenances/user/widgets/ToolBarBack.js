import React, { useContext } from "react";
import { ParentContext } from "../../user";
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
  makeStyles,
  Typography, 
  Breadcrumbs, 
  Link 
} from "@material-ui/core";
import { ArrowBackIos, NavigateNext } from '@material-ui/icons'
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

export default ({ action, className, ...rest }) => {
  const { dispatch } = useContext(ParentContext);
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={-3}>
        <Typography color="textSecondary" gutterBottom variant="h2">
          Maintenance
        </Typography>
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" href="/admin/dashboard">
            Home
          </Link>
          <Link color="inherit">Maintenance</Link>
          <Link color="inherit">Users</Link>
          <Link color="textPrimary">{action.charAt(0).toUpperCase() + action.slice(1)}</Link>
        </Breadcrumbs>
      </Box>
      <Box display="flex" justifyContent="flex-start" mr={2} ml={2} mt={4}>
        <Button
          startIcon={<ArrowBackIos />}
          color="primary"
          variant="contained"
          onClick={(e) => dispatch({ type: "list" })}
        >
          Back
        </Button>
      </Box>
    </div>
  );
};
