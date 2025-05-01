import React, { useContext, useEffect, useState } from "react";
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
  const { books, loading, error } = useFetch(category);
  const [booksFiltered, setBooksFiltered] = useState([]);
  console.log("books original array here", books);
  console.log("filtered books", booksFiltered);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  //confirm page for logout//
  function confirm() {
    handleLogout();

    toast.success("Logged Out Succesfully");
    setLogoutModal(false);

    navigate("/");
  }

  function cancel() {
    setLogoutModal(false);
  }

  //logic for handeling previous and next pages(pagination)//
  function handleClick(e) {
    if (e.target.value === "next") {
      setBooksFiltered(books.slice(5, 12));
    } else if (e.target.value === "previous") {
      setBooksFiltered(books.slice(0, 5));
    }
  }
  useEffect(() => {
    if (!loading) {
      setBooksFiltered(books.slice(0, 5));
    }
  }, [loading]);

  return (
    <section className="w-full p-30  min-h-screen flex flex-col  max-sm:px-10 max-sm:py-30">
      <div className="w-full flex justify-between items-center gap-10  ">
        <div className="flex items-center   w-full  ">
          <SerachBooks modal={modal} setShowModal={setShowModal} />

          {modal && <CategorySelect />}
        </div>

        {userLogged && (
          <div className=" flex flex-col items-center justify-center gap-2   px-5">
            {" "}
            <p className="font-semibold whitespace-nowrap ">
              Hi {userLogged?.username} 🙋‍♂️
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

      <section className="w-full mt-10">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {booksFiltered &&
            booksFiltered.map((bookItem) => <ProductCard {...bookItem} />)}
        </div>
        <div className="flex gap-4 ">
          <button onClick={handleClick} value="next">
            next
          </button>
          <button onClick={handleClick} value="previous">
            previous
          </button>
        </div>
      </section>
    </section>
  );
};

export default Products;
