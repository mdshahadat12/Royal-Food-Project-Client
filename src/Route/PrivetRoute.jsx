/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location);
  if (loading) {
    return <Loading></Loading>
  }
  if (user) {
    return <div>{children}</div>;
  } else {
    return <Navigate state={"kiscu"} to={"/login"}></Navigate>;
  }
};

export default PrivetRoute;
