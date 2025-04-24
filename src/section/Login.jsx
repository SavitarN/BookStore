import React, { useContext, useEffect } from "react";

import { AuthContext } from "../context/AuthContex";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.jsx";
const Login = () => {
  const { loggedIn, logging, userData } = useContext(AuthContext);

  return <div></div>;
};

export default Login;
