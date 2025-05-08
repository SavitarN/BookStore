import React from "react";
import { useParams } from "react-router";
import { AuthContext } from "../context/AuthContex";
import { useContext } from "react";
const ProductDetails = () => {
  const { title } = useParams();

  return (
    <div className="bg-red-400 text-black p-30">
      <p>details here:{title}</p>
    </div>
  );
};

export default ProductDetails;
