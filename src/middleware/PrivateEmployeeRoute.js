import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";

export default ({ component: Component, ...rest }) => {
  const { getUser } = useAuthentication();
  const user = getUser();

  const isAuthenticated = () => {
    if (user.authenticated) {
      if (user.role.includes("employee")) {
        return <Component />;
      } else {
        return <Navigate to="/employee" />;
      }
    } else {
      //TODO change to "/admin/login"
      return <Navigate to="/login" />;
    }
  };

  return isAuthenticated();
};
