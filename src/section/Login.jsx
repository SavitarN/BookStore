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
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
const Login = () => {
  const { loggedIn, logging, userData } = useContext(AuthContext);

  const navigate = useNavigate();

  const methods = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit({ username, password }) {
    if (logging(username, password)) {
      toast.success("You have logged in successully");
    } else {
      toast.error("invalid username and password");
    }
  }
  useEffect(() => {
    if (loggedIn) {
      navigate("/products");
    }
  }, [loggedIn]);

  return (
    <section className="w-full max-w-[1400px] flex flex-col justify-center items-center p-30 bg-midnight ">
      <Toaster position="top-center" reverseOrder={false} />
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
            <div className="w-full flex justify-between items-center">
                  <Button className="btn-navy btn-navy:hover mx-auto" type="submit">
              Login
            </Button>
                <Link className="mr-10" to='/register'>Dont Have an Account ? <span className="text-blue-600 ">Register Here</span></Link>
            </div>

        
          </form>
        
        </FormProvider>
          
      </div>
    
    </section>
  );
};

export default Login;
