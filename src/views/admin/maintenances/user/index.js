import React, { useState, useReducer, createContext, useEffect } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Page from "../../../../components/Page";
import Create from "./create";
import Update from "./update";
import Table from "./table";
// import { useMutation, useQuery, gql } from "@apollo/client";
import ErrorDialog from "../../../../widgets/ErrorDialog";
import BackDrop from "../../../../widgets/BackDrop";
// import { GET_GENDERS } from "src/views/user/admin/Maintenance/user/query";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "100%",
    borderRadius: "1%",
    marginTop: "50px",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

export const ParentContext = createContext();

export default ({ onDispatch }) => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);


  // const { loading, error, data } = useQuery(GET_GENDERS, {
  //   errorPolicy: "all",
  // });

  const initialState = { activeScreen: "list", activeData: null };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "list":
        return { activeScreen: "list" };
      case "create":
        return { activeScreen: "create" };
      case "update":
        return { activeScreen: "update", activeData: payload };
      case "view":
        return { activeScreen: "view", activeData: payload };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setScreen = ({ activeScreen, activeData }) => {
    switch (activeScreen) {
      case "list":
        return <Table />;
      case "create":
        return <Create action="create" />;
      case "update":
        return <Update data={activeData} action="update" />;
      case "view":
        return <Update data={activeData} action="view" />;
      default:
        throw new Error();
    }
  };

  return (
    <ParentContext.Provider
      value={{ dispatch, users: users, genders: data?.genders }}
    >
      <Page className={classes.root} title="User Maintenance">
        <Container maxWidth={false}>
          <Box mt={3}>{setScreen(state)}</Box>
        </Container>
      </Page>
      {/* <BackDrop loading={loading} />
      <ErrorDialog error={error} /> */}
    </ParentContext.Provider>
  );
};
