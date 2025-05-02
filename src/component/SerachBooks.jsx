import React, { useState } from "react";
import { HandHelping, Search, Tornado } from "lucide-react";
import { Input } from "../components/ui/input";

import { useForm } from "react-hook-form";
import { FilterIcon } from "lucide-react";
import useBookSerach from "../hooks/useBookSerach";
const SerachBooks = ({ modal, setShowModal }) => {
  const {
    register,
    handleSubmit,

    formState: { error, isSubmitting },
  } = useForm();
  const [searchedBook, setSearchedBook] = useState(null);
  const { serachResult, loading, errors } = useBookSerach(searchedBook);
  console.log(serachResult);
  console.log(searchedBook);
  function onSubmit(data) {
    setSearchedBook(data.search);
  }
  return (
    <form
      className="w-full flex items-center "
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className="border-none bg-transparent focus:outline-none  p-5  "
        placeholder="Search your books here"
        {...register("search")}
      />
      <button type="submit" className="m-4 cursor-pointer">
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
