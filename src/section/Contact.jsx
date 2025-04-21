import React from "react";
import ContactForm from "../component/ContactForm";

const Contact = () => {
  return (
    <section className="w-full m-w-[1400px] bg-midnight flex items-center  flex-col p-10 text-white">
      <p className="text-slate-400 font-bold mb-5">
        You would love to hear from you{" "}
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;
