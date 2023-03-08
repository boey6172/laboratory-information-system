import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Typography,
  Breadcrumbs,
  Link,
} from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";

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
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography color="textSecondary" gutterBottom variant="h2">
        Employees
      </Typography>
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="textPrimary">List of Employees</Link>
      </Breadcrumbs>
    </div>
  );
};
