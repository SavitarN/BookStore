import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContex";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { HandHelping, Search, Tornado } from "lucide-react";
import { FilterIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ConfirmLogout from "../component/confirmLogout";
import { useNavigate } from "react-router";
import CategorySelect from "../component/CategorySelect";
import { useFetch } from "../hooks/useFetch";

const Products = () => {
  const { userLogged, loggedIn, handleLogout } = useContext(AuthContext);
  const [modal, setShowModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const { books, loading } = useFetch("arts");
  console.log(books);
  useFetch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  function confirm() {
    handleLogout();

    toast.success("Logged Out Succesfully");
    setLogoutModal(false);

    navigate("/");
  }

  function cancel() {
    setLogoutModal(false);
  }

  return (
    <section className="w-full p-30  min-h-screen flex flex-col  max-sm:px-10 max-sm:py-30">
      <div className="w-full flex justify-between items-center   ">
        <div className="flex items-center rounded-2xl shadow p-3 ">
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
          {modal && <CategorySelect />}
        </div>

        {userLogged && (
          <div className=" flex flex-col items-center justify-center gap-2 ">
            {" "}
            <p className="font-semibold max-sm:whitespace-nowrap ">
              Hi {userLogged?.username}🙋‍♂️
            </p>
            <Button
              className="btn-navy btn-navy:hover"
              onClick={() => setLogoutModal(true)}
            >
              Log out
            </Button>
            {logoutModal && <ConfirmLogout confirm={confirm} cancel={cancel} />}
          </div>
        )}
      </div>

      <section className="w-full ">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 border border-red-400">
          {books.map((bookItem) => (
            <div className="border border-green-400">
              <img
                src={`https://covers.openlibrary.org/b/id/${bookItem.cover_id}-M.jpg`}
                alt="book cover image"
              ></img>
              <p>{bookItem.title}</p>
              <p>{bookItem?.authors[0]?.name}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Products;
