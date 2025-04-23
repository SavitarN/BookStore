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
      className="p-5 border border-blue-400/10 rounded text-white flex flex-col items-center gap-4 w-[50%]"
    >
      <input
        {...register("firstName", {
          required: { value: true, message: "This field cannot be empty" },
          maxLength: {
            value: 20,
            message: "Maximum character length can be 20",
          },
          minLength: {
            value: 3,
            message: "Minimum chracter length should be 3",
          },
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Name should only contain letters and spaces",
          },
        })}
        type="text"
        className="bg-black text-white w-[70%] rounded p-2 max-sm:px-4  max-sm:w-[100%]"
        placeholder="Username"
      />

      <p className="min-h-[1em]">
        {errors.firstName && (
          <span className="text-red-400 font-semibold">
            {errors.firstName.message}
          </span>
        )}
      </p>

      <input
        {...register("email", {
          required: { value: true, message: "This field cannot be empty" },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        })}
        type="text"
        className="bg-black text-white w-[70%] rounded p-2 max-sm:w-[100%]  max-sm:px-4 "
        placeholder="youremali@gmail.com"
      />
      <p className="min-h-[1em]">
        {errors.email && (
          <span className="text-red-400 font-semibold">
            {errors.email.message}
          </span>
        )}
      </p>

      <textarea
        {...register("message", {
          required: { value: true, message: "This field cannot be empty" },
        })}
        rows={10}
        className="bg-black text-white w-[70%] rounded p-2  max-sm:w-[100%]  max-sm:px-4 "
        placeholder="Any message for us ?"
      />
      <p className="min-h[1em]">
        {errors.message && (
          <span className="text-red-400 font-semibold">
            {errors.message.message}
          </span>
        )}
      </p>

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
