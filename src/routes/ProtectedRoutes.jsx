// ProtectedRoutes.js

// import React from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { isAuthenticated } from "./Auth";
// import toast from "react-hot-toast";

// const ProtectedRoutes = ({ children }) => {
//   const location = useLocation();

//   // Define routes that do not require authentication
//   const publicRoutes = ["/", "/Signin", "/Signup"];

//   // Check if the current route is a public route
//   const isPublicRoute = publicRoutes.includes(location.pathname);

//   // If it's a public route, allow access
//   if (isPublicRoute) {
//     return children;
//   }

//   // If it's not a public route, perform authentication check
//   const auth = { token: isAuthenticated() };

//   if (!auth.token) {
//     toast.error("Please, Login to Continue");
//     return <Navigate to="/Signin" replace />;
//   }

//   // If authenticated, allow access to the protected route
//   return children;
// };

// export default ProtectedRoutes;

import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./Auth";
import toast from "react-hot-toast";

export const ProtectedRoutes = ({ element }) => {
  const auth = { token: isAuthenticated() };
  const localStorageToken = localStorage.getItem("authTOken");

  if (!localStorageToken && !auth.token) {
    toast.error("Please, Login to Continue");
    return <Navigate to="/Signin" replace />;
  }

  return element;
};


