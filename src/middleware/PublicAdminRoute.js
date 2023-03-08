import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";

export default ({ component: Component, ...rest }) => {
  const { getUser } = useAuthentication();
  const user = getUser();

  const isAuthenticated = () => {
    if (user.authenticated) {
      if (user.role.includes("admin")) {
        return <Navigate to="/admin" />;
      } else {
        return <Navigate to="/" />;
      }
    } else {
      return <Component/>;
    }
  };

  return isAuthenticated();
};
