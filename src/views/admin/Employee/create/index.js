/* Core Imports */
import React, { useContext } from "react";

/* UI Imports */
import { Box, makeStyles } from "@material-ui/core";
import Toolbar from "../../../../widgets/Toolbar";

/*View Imports */
import Form from "../form/index";

/* Context Instance */
// import { ParentContext } from "../../../../views/admin/maintenances/rank";

const useStyles = makeStyles((props) => ({
  boxStyle: {
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

export default () => {
  // const dispatch = useContext(ParentContext);
  const classes = useStyles();

  let toolbarInfo = {
    title: "Add Patient",
    links: [
      {
        name: "Home",
        href: "/admin/dashboard",
      },
      {
        name: "Employee",
        href: "/admin/employees",
      },
      {
        name: "Create",
        href: "",
      },
    ],
  };

  const states = {
    info: {
      first_name: "",
      middle_name: "",
      last_name: "",
      gender: "",
      address: "",
      birth_date: "",
      email: "",
      mobile_number: "",
      photo: "",
    },
    // credential: {
    //   username: "",
    //   password: "",
    //   confirm_password: "",
    // },
  };

  // const onRedirect = () => {
  //   dispatch({ type: "list" });
  // };

  return (
    <>
      <Box className={classes.boxStyle}>
        <Toolbar info={toolbarInfo} />
      </Box>

      <Box mt={3}>
        <Form states={states} 
        // onRedirect={onRedirect} 
        action="create" />
      </Box>
    </>
  );
};
