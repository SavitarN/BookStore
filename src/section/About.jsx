import React from "react";
import img1 from "../assets/image/AboutImg1.jpg";
import useInView from "../hooks/useInView";
const About = () => {
  const [ref, isVisible] = useInView();

  return (
    <section
      ref={ref}
      className={`w-full bg-midnight flex flex-col items-center justify-center
      max-sm:p-5 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100"
      } `}
    >
      <h2 className="font-bold text-2xl text-white max-sm:mr-10 max-sm:mb-3 ">
        Overview
      </h2>
      <div className="w-full flex justify-around items-center max-sm:flex-col gap-6 ">
        <div className="w-[40%]  flex items-center">
          <p className="text-white text-lg mx-auto leading-relaxed max-sm:w-">
            Welcome to BookStore, where passion for books meets the joy of
            reading. Whether you’re a casual reader or a dedicated bookworm, we
            have a vast collection waiting for you. Our mission is to inspire
            curiosity and provide the best selection for your next great read
          </p>
        </div>

        <div className="w-90 h-90">
          <img
            src={img1}
            className="object-contain w-full h-full rounded-full"
          ></img>
        </div>
      </div>

      <div className="max-w-120 flex flex-col items-center justify-center  ">
        <p className="text-white text-lg max-w-100  mb-3">
          How it Works <span className="text-blue-600 font-bold"> ?</span>
        </p>

        <p className="text-slate-400 text-lg mx-auto leading-relaxed">
          Browse books, add them to your cart, and place an order in three easy
          steps. We’ll take care of the rest, ensuring your books are delivered
          directly to your door
        </p>
      </div>
    </section>
  );
};

export default About;
