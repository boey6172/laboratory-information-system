import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  Dashboard,
  LocationOn,
  Favorite,
  AssignmentInd,
  PermContactCalendar,
  RecentActors,
  Business,
  People,
  AccountCircle,
  LocationCity,
  HomeWork,
  Description,
  Settings,
  SettingsApplications,
  ChevronRight,
  AccountBox,
  Lens,
  EventAvailable,
  AccountBalance,
  Group,
} from "@material-ui/icons";
import {
  People as PeopleIcon,
  AccountBox as AccountBoxIcon,
} from "@material-ui/icons";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import "../../../css/Content.css";
// import firebase from '../../../firebase';
import NavItem from "./NavItem";
// import useAuthentication from "../../../hooks/useAuthentication";



const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "rgba(0,0,0, 0.3)",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = (props) => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);

const user = {
  avatar: "/redcatlogo.ico",
  jobTitle: "Admin",
  name: "Redcat Developer",
};

const dashboard = [
  {
    href: "/employee/dashboard",
    icon: Dashboard,
    title: "Dashboard",
  },
];

const useStyles = makeStyles(() => ({
  root: {
    borderRight: "1px solid #e2e2e2",
    overflow: "hidden",
  },
  mobileDrawer: {
    width: 290,
  },
  desktopDrawer: {
    width: 290,
    background: "#fff",
    border: "none",
  },
  avatar: {
    cursor: "pointer",
    width: 45,
    height: 45,
  },
  account: {
    background: "#f5f5f5",
    borderRadius: "16px",
  },
  navTitle: {
    color: "#637381",
    fontWeight: "600",
    fontFamily: "Be Vietnam, sans-serif",
    fontSize: "0.75rem",
    letterSpacing: "1.2px",
    marginLeft: "-25px",
  },
  dropdownIcon: {
    marginLeft: "34px",
    color: "#637381",
  },
  avatarContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "45px",
    height: "45px",
    lineHeight: "1",
    overflow: "hidden",
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const [openMaintenance, setOpenMaintenance] = React.useState(false);
  const [open201Files, setOpen201Files] = React.useState(false);
  const [openAttendance, setOpenAttendance] = React.useState(false);
  // const { getUser } = useAuthentication();
  // const credentials = getUser();
  // const credentials = firebase.auth().currentUser;


  const handleClick201Files = () => {
    setOpen201Files(!open201Files);
  };

  const handleClickAttendance = () => {
    setOpenAttendance(!openAttendance);
  };

  const handleClickMaintenance = () => {
    setOpenMaintenance(!openMaintenance);
  };

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      className={classes.root}
    >
      <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
        <RouterLink to="/">
          {/* <Logo style={{ marginLeft: "70px", marginTop: "20px" }} /> */}
        </RouterLink>
        <Box p={2} mt={4}>
          <Box flexDirection="column" className={classes.account} p={2}>
            <div className={classes.avatarContainer}>
              <Avatar
                className={classes.avatar}
                component={RouterLink}
                src={user.avatar}
                to="/app/account"
              />
            </div>
            <div
              style={{
                float: "left",
                marginTop: "-42px",
                marginLeft: "60px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <Typography
                className={classes.name}
                color="textPrimary"
                variant="h6"
              >
                {/* {`${credentials?.displayName}`} */}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {/* {credentials?.credential?.roles} */}
              </Typography>
            </div>
          </Box>
        </Box>
        <Box>
          <List>
            {dashboard.map((item) => (
              <NavItem
                href={item.href}
                key={item.title}
                title={item.title}
                icon={item.icon}
              />
            ))}
            
        
          </List>
        </Box>
      </CustomScrollbars>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
