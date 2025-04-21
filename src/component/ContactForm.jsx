import React from "react";
import { Form, useForm } from "react-hook-form";
const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="p-5 border border-blue-200/10 text-white flex flex-col items-center gap-4 w-[50%]"
    >
      <input
        {...register("firstName")}
        type="text"
        className="bg-black text-white w-[70%] rounded p-2"
        placeholder="Username"
      />
      <input {...register("email")} type="text" className="bg-white" />
      <button type="submit">submit</button>
    </form>
  );
};

export default ContactForm;
