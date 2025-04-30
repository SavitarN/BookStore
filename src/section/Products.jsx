import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContex";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ConfirmLogout from "../component/confirmLogout";
import { useNavigate } from "react-router";
import CategorySelect from "../component/CategorySelect";
import { useFetch } from "../hooks/useFetch";
import SerachBooks from "../component/SerachBooks";
import { Button } from "../components/ui/button";
import ProductCard from "../component/ProductCard";
const Products = () => {
  const { userLogged, loggedIn, handleLogout } = useContext(AuthContext);
  const [modal, setShowModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [category, setCategory] = useState("arts");
  const { books, loading, merror } = useFetch(category);
  console.log("products page rendering");

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
      <div className="w-full flex justify-between items-center gap-10  ">
        <div className="flex items-center   w-full  ">
          <SerachBooks modal={modal} setShowModal={setShowModal} />

          {modal && <CategorySelect />}
        </div>

        {userLogged && (
          <div className=" flex flex-col items-center justify-center gap-2  border border-red-400">
            {" "}
            <p className="font-semibold max-sm:whitespace-nowrap ">
              Hi{userLogged?.username}🙋‍♂️
            </p>
            <Button
              className="btn-navy btn-navy:hover "
              onClick={() => setLogoutModal(true)}
            >
              Log out
            </Button>
            {logoutModal && <ConfirmLogout confirm={confirm} cancel={cancel} />}
          </div>
        )}
      </div>

      <section className="w-full ">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
          {books && books.map((bookItem) => <ProductCard {...bookItem} />)}
        </div>
      </section>
    </section>
  );
};

export default Products;
