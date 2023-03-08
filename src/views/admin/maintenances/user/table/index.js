import React, { useEffect, useState } from "react";
import Toolbar from "../widgets/ToolBarList";
import TableList from "./TableList";
import { Box } from "@material-ui/core";
// import { useQuery, gql } from "@apollo/client";
import ErrorDialog from "../../../../../widgets/ErrorDialog";
import BackDrop from "../../../../../widgets/BackDrop";
// import { GET_USERS } from "src/views/user/admin/Maintenance/user/query";
import instance from '../../../../../instance/instance';

export default () => {
  const [search, setSearch] = useState("")
  const [filteredUsers, setFilteredUsers] = useState([])
  const [users, setUsers] = useState([])

  // const { loading, error, data, refetch } = useQuery(GET_USERS, {
  //   errorPolicy: "all",
  // });

  const setKeyWords = (key) => {
    setSearch(key)
  }

  useEffect(() => {
    if (search == "") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users?.filter((user) =>
          user.username
            // .concat(
            //   " ",
            //   user.info.last_name,
            //   " ",
            //   user.info?.email,
            //   " ",
            //   user.credential?.username
            // )
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      );
    }
    // refetch();
  }, [search, users]);

  useEffect(() => {
    instance.get("./auth").then((response) => {
      setUsers(response.data)
      console.log(users)
    }) 
  }, [])

  return (
    <>
      <Toolbar setKeyWords={setKeyWords} />
      <Box mt={3}>
        <TableList users={filteredUsers} />
      </Box>
      {/* <BackDrop loading={loading} />
      <ErrorDialog error={error} /> */}
    </>
  );
};
