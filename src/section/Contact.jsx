import React from "react";
import ContactForm from "../component/ContactForm";
import useInView from "../hooks/useInView";

const Contact = () => {
  const [ref, isVisible] = useInView();
  return (
    <section
      ref={ref}
      className={`w-full m-w-[1400px] bg-midnight flex items-center  flex-col p-10 text-white transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100"
      }  `}
    >
      <p className="text-slate-400 font-bold mb-5">
        We would love to hear from you{" "}
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;
