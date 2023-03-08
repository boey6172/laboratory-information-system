import React, { useContext } from "react";
import Toolbar from "../widgets/ToolBarBack";
import Form from "../form/index";
import { Box } from "@material-ui/core";
import { ParentContext } from "../../user";

export default ({action}) => {
  const { dispatch } = useContext(ParentContext);

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
      photo: ""
    },
    credential: {
      roles: "",
      username: "",
      password: "",
      confirm_password: "",
    },
  };

  const onRedirect = () => {
    dispatch({ type: "list" });
  };

  return (
    <>
      <Toolbar action={action} />
      <Box mt={3}>
        <Form states={states} onRedirect={onRedirect} action={action} />
      </Box>
    </>
  );
};
