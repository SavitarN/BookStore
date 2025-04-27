import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContex";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";
import { FilterIcon } from "lucide-react";
import { useForm } from "react-hook-form";
const Products = () => {
  const { userLogged, loggedIn } = useContext(AuthContext);
  const [modal, showModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="w-full p-30  min-h-screen flex flex-col border border-red-400 max-sm:px-10 max-sm:py-30">
      <div className="lg:w-1/2 flex items-center rounded-2xl shadow p-3 max-sm:w-full  sm:w-full ">
        <Input
          className="border-none bg-transparent focus:outline-none  p-5  "
          placeholder="Search your books here"
        />
        <button className="m-4 cursor-pointer">
          <Search />
        </button>

        <button className="m-4 cursor-pointer">
          <FilterIcon />
          <div>
            <form onSubmit={handleSubmit(onsubmit)}>
              <select
                id="mySelect"
                {...register("mySelect", {
                  required: "This field is required",
                })}
              >
                <option value="">Select category</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </form>
          </div>
        </button>
      </div>

      <section></section>
    </section>
  );
};

export default Products;
