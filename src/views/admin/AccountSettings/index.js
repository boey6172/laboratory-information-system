import React, { createContext, useReducer, useEffect } from "react";
import { Box, Container, makeStyles, Grid } from "@material-ui/core";
import Page from "../../../components/Page";
import Create from "./create";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "100%",
    borderRadius: "1%",
  },
}));

export const Parentcontext = createContext();

export default ({ onDispatch }) => {
  const classes = useStyles();

  const initialState = { activeScreen: "create", activeData: null };
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "create":
        return { activeScreen: "create" };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
  }, [state]);

  const setScreen = ({ activeScreen, activeData }) => {
    switch (activeScreen) {
      case "create":
        return (
          <>
            <Create action="create" />
            {/* <Table /> */}
          </>
        );
      default:
        throw new Error();
    }
  };

  return (
    <Parentcontext.Provider value={{ dispatch }}>
      <Page className={classes.root} title="Account Settings">
        <Container maxWidth={false}>
          <Box >{setScreen(state)}</Box>
        </Container>
      </Page>
    </Parentcontext.Provider>
  );
};
