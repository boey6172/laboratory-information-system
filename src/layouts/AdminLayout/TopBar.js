import React, { useState, useRef, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { useMutation, useQuery, gql } from "@apollo/client";
import useAuthentication from "../../hooks/useAuthentication";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  MenuList,
  MenuItem,
  Popper,
  Paper,
  ClickAwayListener,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
// import Logo from "src/components/EmployeeLogo";

const useStyles = makeStyles(() => ({
  root: {
    height: "70px",
    // backgroundColor: "rgba(255,255,255,0.7)",
    backgroundColor: "#4682b4",
    backdropFilter: "blur(2px)",
  },
  avatar: {
    width: 60,
    height: 60,
  },
  topBtn: {
    color: "#616161",
    padding: "5px 10px 5px 10px",
    "&:hover": {
      color: "#757575",
      cursor: "pointer",
      background: "#e0e0e0",
    },
  },
  topBtn2: {
    color: "#616161",
    borderLeft: "1px solid #e0e0e0",
    borderRight: "1px solid #e0e0e0",
    padding: "5px 20px 5px 20px",
    "&:hover": {
      color: "#757575",
      cursor: "pointer",
      background: "#e0e0e0",
    },
  },
  menuBtn: {
    // padding: "5px 10px 5px 10px",
    "&:hover": {
      cursor: "pointer",
      background: "#e0e0e0",
    },
  },
}));

// const LOGOUT_USER = gql`
//   mutation LogoutUser {
//     logoutUser {
//       code
//       message
//     }
//   }
// `;

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  const { unsetAuth } = useAuthentication();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const logoutUser = () => {
    unsetAuth();
    navigate("/login", { replace: true });
  };
  const changePassword = () => {

    navigate("/admin/account/settings", { replace: true });
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleLogout = () => {
    logoutUser();
  };
  const handleAccount = () => {
    changePassword();
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar
      style={
        {
          // marginTop: "-15px",
        }
      }
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar style={{marginTop: "10px"}}>
        <Hidden lgUp>
          <IconButton onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <Box flexGrow={3} />
        </Hidden>
        {/* <RouterLink to="/">
          <Logo />
        </RouterLink> */}

        <Hidden lgUp>
          <Box flexGrow={2} />
        </Hidden>
        {/* <Hidden mdDown>
          <Typography variant="h6">
            <RouterLink className={classes.topBtn} to="/employee/">
              Home
            </RouterLink>
          </Typography>
          <Typography variant="h6">
            <RouterLink className={classes.topBtn2} to="/employee/user">
              Files
            </RouterLink>
          </Typography>
          <Typography variant="h6">
            <RouterLink
              className={classes.topBtn}
              style={{
                borderRight: "1px solid #e0e0e0",
              }}
              to="/employee/user"
            >
              Attendance
            </RouterLink>
          </Typography>
          <Typography variant="h6">
            <RouterLink className={classes.topBtn} style={{marginRight: "100px"}} to="/employee/user">
              Profile
            </RouterLink>
          </Typography>
        </Hidden> */}

        <Box flexGrow={1} />
        <Hidden>
          <IconButton>
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon style={{ fontSize: "30" }} />
            </Badge>
          </IconButton>
          <IconButton
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <MoreVertIcon style={{ fontSize: "30" }} />
          </IconButton>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {/* <MenuItem
                    onClick={(e) => {
                      navigate("admin/account/settings", { replace: true });
                    }}
                  >
                    Change Password
                  </MenuItem> */}
                  <MenuItem onClick={handleAccount}>My account</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Popper>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
