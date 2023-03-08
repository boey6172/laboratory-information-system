import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button, ListItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: "#637381",
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "flex-start",
    letterSpacing: 0,
    padding: "13px 50px",
    textTransform: "none",
    width: "100%",
    borderRadius: "0",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginRight: "20px",
    fontSize: "0.85rem",
    letterSpacing: "1.2px",
  },
  title2: {
    fontSize: "0.85rem",
    letterSpacing: "1.2px",
    width: "270px"
  },
  active: {
    color: "#f44336",
    borderRight: "3px solid #f44336",
    background: "rgba(244,67,54, 0.08)",
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& $icon": {
      color: "#f44336",
    },
  },
}));

const NavItem = ({
  className,
  href,
  icon: Icon,
  icon2: Icon2,
  title,
  title2,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={href}
      >
        {Icon && <Icon className={classes.icon} size="15" />}
        <span className={classes.title}>{title}</span>
        <span className={classes.title2}>{title2}</span>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
};

export default NavItem;
