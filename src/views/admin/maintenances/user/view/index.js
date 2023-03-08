import React, { useContext } from "react";
import Toolbar from "../widgets/ToolBarBack";
import Form from "../form/index";
import { Box } from "@material-ui/core";

export default ({ data, action }) => {
  let modifyState = {
    ...data,
    info: { ...data.info, gender: data.info.gender._id },
  };
  let states = {
    info: {
      first_name: "",
      middle_name: "",
      last_name: "",
      gender: "",
      address: "",
      birth_date: "",
      email: "",
      mobile_number: "",
    },
    credential: {
      username: "",
      password: "",
      confirm_password: "",
    },
  };

  const updateState = { ...states, ...modifyState };

  const onRedirect = () => {};

  return (
    <>
      <Toolbar action={action} />
      <Box mt={3}>
        <Form
          states={updateState}
          onRedirect={onRedirect}
          action={action}
          updateId={data?._id}
        />
      </Box>
    </>
  );
};
