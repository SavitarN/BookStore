import React, { useEffect, useState } from "react";
import { ClockFading, HandHelping, Search, Tornado } from "lucide-react";
import { Input } from "../components/ui/input";

import { useForm } from "react-hook-form";
import { FilterIcon } from "lucide-react";
import useBookSerach from "../hooks/useBookSerach";
const SerachBooks = ({
  modal,
  setShowModal,
  setQuery,
  keystrokeSearch,
  handleSuggestionClick,
  inputValue,
}) => {
  return (
    <form
      className="w-full flex items-center "
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        className="border-none bg-transparent focus:outline-none  p-5  "
        placeholder="Search your books here"
        onChange={(e) => setQuery(e.target.value)}
        value={inputValue && inputValue}
      />
      <button className="m-4 cursor-pointer">
        <Search />
      </button>
      {keystrokeSearch.length > 0 && (
        <div className="absolute w-[50%] z-50 top-45 rounded-xl gap-4 flex flex-col bg-white text-black">
          <ul>
            {keystrokeSearch.map((s, i) => (
              <li
                className="cursor-pointer active:text-blue-500"
                key={i}
                onClick={() => handleSuggestionClick(i)}
              >
                {s.title}
              </li>
            ))}
          </ul>
        </div>
      )}

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
