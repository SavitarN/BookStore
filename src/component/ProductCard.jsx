import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
const ProductCard = (props) => {
  const { setCartItems, cartItems } = useCart();

  console.log("cartItems", cartItems);
  function handleCart(id) {
    const addedProduct = props.cover_edition_key === id ? props : null;
    setCartItems((prevValue) => {
      return prevValue ? [...prevValue, addedProduct] : addedProduct;
    });
  }
  return (
    <div className="min-h-[400px]  flex flex-col items-center justify-around p-5 rounded shadow-xl gap-5  ">
      <div className="w-[200px] h-[240px] flex bg-white items-center justify-center ">
        <img
          src={`https://covers.openlibrary.org/b/id/${props.cover_id}-M.jpg`}
          alt="book cover image"
          className="w-full h-full object-contain "
        ></img>
      </div>

      <div className="w-full flex flex-col items-start gap-2  max-w-[400px] ">
        <p className="font-black  w-full truncate">
          Title:<span className="text-blue-600"> {props.title}</span>
        </p>
        <p className="w-full truncate">
          Author:
          {/* <span className="text-blue-600 "> {props?.authors[0]?.name}</span> */}
        </p>
      </div>
      <div className="flex w-auto justify-around sm:flex-row  flex-col gap-2 items-center  ">
        <Button
          className="btn-navy btn-navy:hover px-2 "
          onClick={() => handleCart(props.cover_edition_key)}
        >
          Add To Cart
        </Button>
        <Button className="btn-navy btn-navy:hover  px-2  ">
          <Link to={`/products/${props.cover_edition_key}`}>Book Detail</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
