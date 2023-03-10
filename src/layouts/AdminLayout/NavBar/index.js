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
  Receipt
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
import NavItem from "./NavItem";
import useAuthentication from "../../../hooks/useAuthentication";




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
    href: "/admin/dashboard",
    icon: Dashboard,
    title: "Dashboard",
  },
];

const patientNav = [
  {
    href: "/admin/employee",
    icon: "",
    title: " ??? Patients",
  },
  
];
const requestNav = [

{
  href: "/admin/maintenance/users",
  icon: "",
  title: " ??? Users",
},
];

const employeeNav = [
  {
    href: '/app/expenses',
    icon: "",
    title: '??? Expenses'
  },
  {
    href: '/app/report/expenses',
    icon: "",
    title: '??? Expenses Report'
  },
];

const adminMaintenance = [

  {
    href: '/admin/maintenance/rank',
    icon: "",
    title: '??? Rank'
  },
  {
    href: '/admin/maintenance/documenttype',
    icon: "" ,
    title: '??? Document Type '
  },
  {
    href: '/admin/maintenance/religion',
    icon: "",
    title: '??? Religion '
  },
  {
    href: '/admin/maintenance/regionAssignment',
    icon: "",
    title: '??? Region Assignment '
  },
  {
    href: '/admin/maintenance/Exams',
    icon: "",
    title: '??? Examinations '
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
  const [openRequest, setOpenRequest] = React.useState(false);
  const { setToken, setUser, getToken, getUser, } = useAuthentication();
  // const { getUser } = useAuthentication();
  // const credentials = getUser();
  // const credentials = firebase.auth().currentUser;


  const handleClick201Files = () => {
    setOpen201Files(!open201Files);
  };

  const handleClickAttendance = () => {
    setOpenAttendance(!openAttendance);
  };
  const handleClickRequest = () => {
    setOpenRequest(!openRequest);
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
          <Box flexDirection="column" className={classes.account} p={4}>
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
                Daniel Meynard A Mabunga
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {getUser().role}
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
            {/* <ListItem button onClick={handleClick201Files}>
              <ListItemIcon className={classes.dropdownIcon}>
                <AccountBalance />
              </ListItemIcon>
              <Typography className={classes.navTitle} variant="body2">
                Expenses
              </Typography>{" "}
              {open201Files ? (
                <ExpandMore style={{ color: "#637381", marginLeft: "95px" }} />
              ) : (
                <ChevronRight
                  style={{ color: "#637381", marginLeft: "95px" }}
                />
              )}
            </ListItem>
            <Collapse in={open201Files} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {employeeNav.map((item) => (
                  <NavItem
                    className={classes.dropdownList}
                    href={item.href}
                    key={item.title}
                    title2={item.title}
                    icon={item.icon}
                  />
                ))}
              </List>
            </Collapse> */}
            <ListItem button onClick={handleClickAttendance}>
              <ListItemIcon className={classes.dropdownIcon}>
                <Group />
              </ListItemIcon>
              <Typography className={classes.navTitle} variant="body2">
                Patients 
              </Typography>{" "}
              {openAttendance ? (
                <ExpandMore style={{ color: "#637381", marginLeft: "98px" }} />
              ) : (
                <ChevronRight
                  style={{ color: "#637381", marginLeft: "98px" }}
                />
              )}
            </ListItem>
            <Collapse in={openAttendance} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {patientNav.map((item) => (
                  <NavItem
                    className={classes.dropdownList}
                    href={item.href}
                    key={item.title}
                    title2={item.title}
                    icon={item.icon}
                  />
                ))}
              </List>
            </Collapse>
            <ListItem button onClick={handleClickRequest}>
              <ListItemIcon className={classes.dropdownIcon}>
                <Receipt />
              </ListItemIcon>
              <Typography className={classes.navTitle} variant="body2">
                Requests     
              </Typography>{" "}
              {openRequest ? (
                <ExpandMore style={{ color: "#637381", marginLeft: "90px" }} />
              ) : (
                <ChevronRight
                  style={{ color: "#637381", marginLeft: "90px" }}
                />
              )}
            </ListItem>
            <Collapse in={openRequest} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {requestNav.map((item) => (
                  <NavItem
                    className={classes.dropdownList}
                    href={item.href}
                    key={item.title}
                    title2={item.title}
                    icon={item.icon}
                  />
                ))}
              </List>
            </Collapse>
            <ListItem button onClick={handleClickMaintenance}>
              <ListItemIcon className={classes.dropdownIcon}>
                <Settings />
              </ListItemIcon>
              <Typography className={classes.navTitle} variant="body2">
                Maintenance 
              </Typography>{" "}
              {openMaintenance ? (
                <ExpandMore style={{ color: "#637381", marginLeft: "70px" }} />
              ) : (
                <ChevronRight
                  style={{ color: "#637381", marginLeft: "67px" }}
                />
              )}
            </ListItem>
            <Collapse in={openMaintenance} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {adminMaintenance.map((item) => (
                  <NavItem
                    className={classes.dropdownList}
                    href={item.href}
                    key={item.title}
                    title2={item.title}
                    icon={item.icon}
                  />
                ))}
              </List>
            </Collapse>
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
