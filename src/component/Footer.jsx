import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import BookLogo from "../assets/image/Booklogo.png";
const Footer = () => {
  return (
    <footer className=" w-full  bg-midnight flex  px-6 pt-25 border border-blue-600/10 ">
      <div className="w-1/2  p-10 flex flex-col  ">
        <p className="text-slate-400 text-base leading-relaxed max-w-150 max-sm:hidden ">
          we believe every great story deserves a reader. From timeless classics
          to modern bestsellers, our shelves are filled with books that inspire,
          educate, and entertain. Thank you for supporting a passion for
          reading—one page at a time.{" "}
        </p>
        <img
          src={BookLogo}
          height={200}
          width={150}
          className=" drop-shadow-[0_0_15px_#61dafb] object-contain  "
        />
        <div className="flex gap-5 items-center pl-4 ">
          <FaFacebook className="text-white hover:text-blue-500 text-xl" />
          <FaInstagram className="text-white hover:text-pink-500 text-xl" />
          <FaTwitter className="text-white hover:text-blue-400 text-xl" />
        </div>
      </div>

      <div className="flex w-1/2 gap-20 justify-center p-10 max-sm:gap-10">
        <div className="flex flex-col gap-3 text-white max-sm:gap-2">
          <strong className="mb-2 text-white text-base">Support</strong>
          <a
            href="#"
            className="text-slate-400 hover:text-blue-600 transition-colors duration-200 max-sm:whitespace-nowrap"
          >
            Order Track
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-blue-600 transition-colors duration-200 max-sm:whitespace-nowrap"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="text-slate-400  hover:text-blue-600 transition-colors duration-200 max-sm:whitespace-nowrap"
          >
            Guide
          </a>
          <a
            href="#"
            className="text-slate-400  hover:text-blue-600  transition-colors duration-200 max-sm:whitespace-nowrap"
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-slate-400  hover:text-blue-600 transition-colors duration-200 max-sm:whitespace-nowrap"
          >
            Help Desk
          </a>
        </div>

        <div className="flex flex-col gap-3 text-white max-sm:gap-2">
          <strong className="mb-2 text-white text-base">Policies</strong>
          <a
            href="#"
            className="text-slate-400  hover:text-blue-600 transition-colors duration-200 max-sm:whitespace-nowrap"
          >
            Terms of Uses
          </a>
          <a
            href="#"
            className="text-slate-400  hover:text-blue-600 transition-colors duration-200 max-sm:whitespace-nowrap"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-slate-400  hover:text-blue-600 transition-colors duration-200 max-sm:whitespace-nowrap"
          >
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
