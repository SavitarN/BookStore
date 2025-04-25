import React, { useContext, useEffect } from "react";

import { AuthContext } from "../context/AuthContex";
import { FormProvider, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.jsx";
import { Button } from "@/components/ui/button.jsx";
import { formSchema } from "../schemas/UserLoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { loggedIn, logging, userData } = useContext(AuthContext);
  console.log(loggedIn);
  const navigate = useNavigate();
  const methods = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit({ username, password }) {
    logging(username, password);
  }
  useEffect(() => {
    if (loggedIn) {
      navigate("/products");
    }
  }, [loggedIn]);

  return (
    <section className="w-full max-w-[1400px] flex flex-col justify-center items-center p-30 bg-midnight ">
      <p className="text-white font-bold text-2xl">Sign Up Here</p>
      <div className="p-10  mt-4 flex  justify-center items-center md:w-1/2 bg-white/90 z-50 rounded-xl  ">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5 "
          >
            <FormField
              control={methods.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Username"
                      {...field}
                      className="p-4 border bg-gray-700 text-white py-2 rounded-xl  "
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={methods.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Password"
                      {...field}
                      className="p-4 border bg-gray-700 text-white py-2 rounded-xl "
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="btn-navy btn-navy:hover mx-auto" type="submit">
              Submit
            </Button>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default Login;
