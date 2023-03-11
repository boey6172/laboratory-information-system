/* Core Imports */
import React from "react";

/* UI Imports */
import { Box } from "@material-ui/core";
import Toolbar from "../../../../widgets/Toolbar";

/*View Imports */
import TableList from "./TableList";

export default () => {
  let toolbarInfo = {
    title: "Patients",
    links: [
      {
        name: "Home",
        href: "/admin/dashboard"
      },
      {
        name: "List of Patient",
        href: ""
      }
    ]
  }

  return (
    <>
      <Toolbar info={toolbarInfo}/>
      <Box mt={3}>
        <TableList/>
      </Box>
    </>
  );
};
