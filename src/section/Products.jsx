import React, { useContext, useEffect, useRef, useState } from "react";
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
import useBookSerach from "../hooks/useBookSerach";
const Products = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userLogged, loggedIn, handleLogout } = useContext(AuthContext);

  const [modal, setShowModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [category, setCategory] = useState("arts");
  //custom hook for fetching book according to the category//
  const { books, loading, error } = useFetch(category);
  const [booksFiltered, setBooksFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  //for searching a book//
  // 1st) store the query of user and we will pass them as prop to our search component//
  const [query, setQuery] = useState("");

  //2nd) now as the user types in we constantly makes api request//
  const { searchResult } = useBookSerach(query);

  //3) once you filter out the keys typed that matches the title we store it in a state//

  const [keystrokeSearch, setKeyStrokeSearch] = useState([]);
  console.log("keystrokeSearch", keystrokeSearch);

  //for every key stroke firing an api call//
  useEffect(() => {
    if (query && searchResult.length > 0) {
      const keystrokeSearch = searchResult.filter((elem) =>
        elem.title.includes(query)
      );
      setKeyStrokeSearch(keystrokeSearch);
    }
  }, [query, searchResult]);

  //logic for pagination//
  const itemsPerPage = 6;
  const pages = Math.ceil(books && books.length / itemsPerPage); // itemsPerPage=6

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

  useEffect(() => {
    if (!loading) {
      const start = (currentPage - 1) * itemsPerPage;
      const end = itemsPerPage * currentPage;
      setBooksFiltered(books.slice(start, end));
    }
  }, [loading, currentPage, books]);

  return (
    <section className="w-full p-30  min-h-screen flex flex-col  max-sm:px-10 max-sm:py-30">
      <div className="w-full flex justify-between items-center gap-10  ">
        <div className="flex items-center   w-full  ">
          <SerachBooks
            modal={modal}
            setShowModal={setShowModal}
            setQuery={setQuery}
            keystrokeSearch={keystrokeSearch}
          />

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
          {loading && <p>Loading.........</p>}
          {booksFiltered &&
            booksFiltered.map((bookItem) => <ProductCard {...bookItem} />)}
        </div>

        <div className="flex gap-4 ">
          {/* creating something like [0,0,0,0,0] idx=0,1,2,3,4*/}
          {Array.from({ length: pages }, (_, idx) => (
            <button
              key={idx}
              className="px-2 py-2 border"
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Products;
