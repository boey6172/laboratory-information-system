import React, { useContext } from "react";
import Toolbar from "../widgets/ToolBarBack";
import Form from "../form/index";
import { Box } from "@material-ui/core";
import { ParentContext } from "../../user";

export default ({ data, action }) => {
  const { dispatch } = useContext(ParentContext);

  let modifyState = {
    ...data,
    info: { ...data.info  },
  };
  console.log(data)

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
      roles: "",
      username: "",
      password: "",
      confirm_password: "",
    },
  };

  const updateState = { 
    ...states, 
    ...modifyState, 
    credential : {
      // roles:  modifyState.credential.roles[0],
      password: "",
    }
  };

  const onRedirect = () => {
    dispatch({ type: "list" });
  };

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
