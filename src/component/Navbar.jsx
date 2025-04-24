import React from "react";
import { Link } from "react-router-dom";
import BookLogo from "../assets/image/Booklogo.png";
const Navbar = () => {
  return (
    <nav className="bg-midnight text-white fixed w-full z-50 flex justify-between items-center shadow-md h-10  p-4 md:p-6 lg:p-10 max-sm:hidden">
      <div className="p-2">
        <img
          src={BookLogo}
          height={200}
          width={150}
          className=" drop-shadow-[0_0_15px_#61dafb] object-contain"
        />
      </div>

      <ul className="  flex justify-center items-center   gap-20 text-sm font-medium list-none pr-5">
        <li>
          <Link to={"/"} className=" hover:text-blue-500 duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to={"products"} className=" hover:text-blue-500 duration-200">
            Product
          </Link>
        </li>

        <li>
          <Link to={"login"} className=" hover:text-blue-500 duration-200">
            Login
          </Link>
        </li>
      </ul>
      <div className="absolute sm:hidden">&times</div>
    </nav>
  );
};

export default Navbar;
