import React, { useContext, useState } from "react";
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
import { AuthContext } from "../context/AuthContex";
import { useNavigate, Link } from "react-router";
import { formSchema } from "../schemas/UserRegistrationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "react-hot-toast";
const UserRegistration = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(AuthContext);
  const methods = useForm({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(data) {
    setUserData((prevData) => (prevData ? [...prevData, data] : [data]));

    const toastId = toast.success("Registered Succesfully!");

    toast
      .promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
        loading: "Redirecting...",
        success: "Redirected",
        error: "Somthing went wrong !",
      })
      .then(() => {
        navigate("/login");
      });
    methods.reset();
  }

  return (
    <section className="w-full max-w-[1400px] flex flex-col justify-center items-center p-30 bg-midnight ">
      <Toaster position="top-right" reverseOrder={false}></Toaster>
      <p className="text-white font-bold text-2xl">Register Here</p>
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Email"
                      {...field}
                      className="p-4 border bg-gray-700 text-white py-2 rounded-xl "
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

            <FormField
              control={methods.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Confirm Password"
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
            <p className="text-center">
              Already have an account ?{" "}
              <Link to="/login" className="text-blue-600">
                Login
              </Link>
            </p>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default UserRegistration;
