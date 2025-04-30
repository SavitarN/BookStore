import React from "react";
import { HandHelping, Search, Tornado } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
import { FilterIcon } from "lucide-react";
const SerachBooks = ({ modal, setShowModal }) => {
  console.log("searchbar component");
  return (
    <form className="w-full flex items-center">
      <Input
        className="border-none bg-transparent focus:outline-none  p-5  "
        placeholder="Search your books here"
      />
      <button type="button" className="m-4 cursor-pointer">
        <Search />
      </button>

      <button
        type="button"
        className="m-4 cursor-pointer "
        onClick={() => {
          setShowModal((prev) => !prev);
        }}
      >
        <FilterIcon />
      </button>
    </form>
  );
};

export default SerachBooks;
