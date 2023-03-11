/* Core Imports */
import React, { createContext, useReducer, useEffect, useState } from "react";

/* UI Imports */
import { Box, Container, makeStyles } from "@material-ui/core";
import ErrorDialog from "../../../widgets/ErrorDialog";
import BackDrop from "../../../widgets/BackDrop";

/*View Imports */
import Page from "../../../components/Page";
import Create from "./create";
import Table from "./table";
import View from "./view";
import instance from '../../../instance/instance';


// /* Api Imports */
// import { useQuery } from "@apollo/client";

// /* Query Imports */
// import { GET_EMPLOYEE } from "./view/Query";

/* Context Instance */
export const ParentContext = createContext();

/* Create Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "100%",
    borderRadius: "1%",
    marginTop: "30px",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

export default () => {
  const classes = useStyles();
  const [employee, setEmployee] = useState(null);

  // const {
  //   loading: loadingEmployeeInfo,
  //   error: errorEmployeeInfo,
  //   data: dataEmployeeInfo,
  // } = useQuery(GET_EMPLOYEE, { errorPolicy: "all" });

  // const employee = dataEmployeeInfo?.employees
  //   .filter((e) => {
  //     return e.status.name == "Hired";
  //   })
  //   .reverse();
  // const employee =[{},{}]; 

  // useEffect(() => {}, [employee]);

  // useEffect(() => {
  //   if(dataEmployeeInfo){
  //     console.log(dataEmployeeInfo.employees)
  //   }
  // }, [dataEmployeeInfo])

  useEffect(()=>{
    instance.get("./employee").then((response) => {
      setEmployee(response.data)
      
    }) 
  },[])

  const initialState = { activeScreen: "list", activeData: null };
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "list":
        return { activeScreen: "list" };
      case "create":
        return { activeScreen: "create" };
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
        return (
          <>
            <Table />
          </>
        );
      case "create":
        return (
          <>
            <Create action="create" />
          </>
        );
      case "view":
        return (
          <>
            <View data={activeData} action="view" />
            {/* <Table /> */}
          </>
        );
      default:
        throw new Error();
    }
  };

  return (
    <ParentContext.Provider 
    value={{ dispatch, employee: employee }}
    >
      <Page className={classes.root} title="Patient">
        <Container maxWidth={false}>
          <Box mt={3}>{setScreen(state)}</Box>
        </Container>
      </Page>
      {/* <BackDrop loading={loadingEmployeeInfo} />
      <ErrorDialog error={errorEmployeeInfo} /> */}
    </ParentContext.Provider>
  );
};
