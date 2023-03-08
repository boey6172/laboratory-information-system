import React from "react";

import { Box  } from "@material-ui/core";

import Form from "../form/index";
import Toolbar from "../../../../widgets/Toolbar";

export default () => {
  let toolbarInfo = {
    title: "Dashboard",
    links: [
      {
        name: "Home",
        href: "/admin/dashboard"
      },
      {
        name: "Account Setting",
        href: ""
      },
      {
        name: "Change Password",
        href: ""
      }
    ]
  }

  return (
    <>
      <Toolbar info={toolbarInfo} />
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Form action="create" />
      </Box>
    </>
  );
};
