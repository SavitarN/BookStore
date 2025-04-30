import React from "react";

const ProductCard = (props) => {
  console.log("props here", props);
  return (
    <div className="flex flex-col items-center p-5 rounded shadow">
      <img
        src={`https://covers.openlibrary.org/b/id/${props.cover_id}-M.jpg`}
        alt="book cover image"
        className="object-contain w-[60%] h-[60%]"
      ></img>
      <p className="font-black max-w-50">{props.title}</p>
      <p>{props?.authors[0]?.name}</p>
    </div>
  );
};

export default ProductCard;
