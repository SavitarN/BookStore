import React from "react";
import { Form, useForm } from "react-hook-form";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="p-5 border border-blue-200/10 text-white flex flex-col items-center gap-4 w-[50%]"
    >
      <input
        {...register("firstName", {
          required: { value: true, message: "This field cannot be empty" },
          maxLength: {
            value: 20,
            message: "Maximum character you can have is 20",
          },
        })}
        type="text"
        className="bg-black text-white w-[70%] rounded p-2"
        placeholder="Username"
      />
      {errors.firstName && <span>{errors.firstName.message}</span>}
      <input
        {...register("email", {
          required: { value: true, message: "This field cannot be empty" },
        })}
        type="text"
        className="bg-black text-white w-[70%] rounded p-2"
        placeholder="youremali@gmail.com"
      />
      {errors.email && <span>{errors.email.message}</span>}
      <textarea
        {...register("message", {
          required: { value: true, message: "This field cannot be empty" },
        })}
        rows={10}
        className="bg-black text-white w-[70%] rounded p-2"
        placeholder="Any message for us ?"
      />
      {errors.message && <span>{errors.message.message}</span>}
      <button
        className="w-fit  btn-navy btn-navy:hover px-5 py-1 rounded"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default ContactForm;
