import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ component: Component, ...restProps }) {
  const token = sessionStorage.getItem('token');
  if (token) {
    return <Component {...restProps} />;
  }
  else {
    return (
      <Navigate to='/auth' replace/>
    );
  }
}