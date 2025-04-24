import React from "react";
import coverImg from "../assets/image/BookCover1.jpg";
const Hero = () => {
  return (
    <section className="w-full  flex justify-between items-center  pt-20 px-15 max-sm:flex-col ">
      <div className="w-1/2 flex flex-col gap-5 p-3 max-w-[500px] flex-wrap max-sm:text-center fade-in">
        <h2 className="text-4xl font-bold text-white  max-sm:whitespace-normal whitespace-nowrap sm:whitespace-pre-wrap ">
          Welcome to Our{" "}
          <span className="text-blue-600 inline-block max-sm:ml-0 mt-4">
            BookStore
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-90">
          Discover a wide range of books to enhance your knowledge and enjoy
          reading.
        </p>
        <button className="btn-navy btn-navy:hover text-slate-100 px-6 py-3 rounded-md w-fit max-sm:mx-auto ">
          <a href="#about">Explore Now</a>
        </button>
      </div>

      <div
        className=" max-w-full flex items-center
      rounded-xl justify-center mt-10  h-[500px] max-sm:h-[300px] max-sm:rounded-xl  fade-in  shadow-2xl shadow-blue-500/30  "
      >
        <img
          src={coverImg}
          className="object-cover w-full h-full rounded-xl "
        />
      </div>
    </section>
  );
};

export default Hero;
