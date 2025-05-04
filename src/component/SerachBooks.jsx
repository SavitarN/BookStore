import React, { useEffect, useState } from "react";
import { HandHelping, Search, Tornado } from "lucide-react";
import { Input } from "../components/ui/input";

import { useForm } from "react-hook-form";
import { FilterIcon } from "lucide-react";
import useBookSerach from "../hooks/useBookSerach";
const SerachBooks = ({ modal, setShowModal }) => {
  const {
    register,

    formState: { error, isSubmitting },
  } = useForm();

  const [query, setQuery] = useState("");
  const { searchResult, loading, errors } = useBookSerach(query);
  const [suggestions, setSuggestions] = useState([]);
  console.log(searchResult);
  function handleChange(e) {
    console.log("key stocked");
    const searchedName = e.target.value;
    setQuery(searchedName);
  }

  useEffect(() => {
    if (query && searchResult) {
      const filtered = searchResult.filter((elem) =>
        elem.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query, searchResult]);

  function handleSubmit(e) {
    e.preventDefault();
    setSuggestions([]);
  }

  return (
    <form className="w-full flex items-center " onSubmit={handleSubmit}>
      <Input
        className="border-none bg-transparent focus:outline-none  p-5  "
        placeholder="Search your books here"
        onChange={handleChange}
      />
      <button type="submit" className="m-4 cursor-pointer">
        <Search />
      </button>
      {suggestions.length > 0 && (
        <div className="absolute w-[50%] z-50 top-45 rounded-xl gap-4 flex flex-col bg-white text-black">
          <ul>
            {suggestions.map((s, i) => (
              <li key={i}>{s.title}</li>
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
