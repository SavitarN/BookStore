import React from "react";

import BookLogo from "../assets/image/Booklogo.png";
const Footer = () => {
  return (
    <footer className=" w-full max-w-[1400px] bg-midnight flex  px-6 pt-25  ">
      <div className="w-1/2  p-10 flex flex-col  ">
        <p className="text-slate-400 text-base leading-relaxed max-w-150max-sm:hidden">
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
      </div>

      <div className="flex w-1/2 gap-20 justify-center p-10">
        <div className="flex flex-col gap-3 text-white max-sm:gap-2">
          <strong className="mb-2 text-white text-base">Support</strong>
          <a href="#" className="hover:underline">
            Order Track
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Guide
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            Help Desk
          </a>
        </div>

        <div className="flex flex-col gap-3 text-white max-sm:gap-2">
          <strong className="mb-2 text-white text-base">Policies</strong>
          <a href="#" className="hover:underline">
            Terms of Uses
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
