import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContex";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search } from "lucide-react";
import { FilterIcon } from "lucide-react";
import { useForm } from "react-hook-form";

const Products = () => {
  const { userLogged, loggedIn } = useContext(AuthContext);
  const [modal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="w-full p-30  min-h-screen flex flex-col  max-sm:px-10 max-sm:py-30">
      <div className="w-full flex justify-between items-center ">
        <div className="flex items-center rounded-2xl shadow p-3 w-[50%]">
          <Input
            className="border-none bg-transparent focus:outline-none  p-5  "
            placeholder="Search your books here"
          />
          <button className="m-4 cursor-pointer">
            <Search />
          </button>

          <button
            className="m-4 cursor-pointer "
            onClick={() => {
              setShowModal((prev) => !prev);
            }}
          >
            <FilterIcon />
          </button>
          {modal && (
            <div className="font-semibold">
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
          )}
        </div>

        {userLogged && (
          <div className=" flex flex-col items-center justify-center gap-2">
            {" "}
            <p className="font-semibold max-sm:whitespace-nowrap ">
              Hi {userLogged.username}🙋‍♂️
            </p>
            <Button className="btn-navy btn-navy:hover">Log out</Button>
          </div>
        )}
      </div>

      <section></section>
    </section>
  );
};

export default Products;
