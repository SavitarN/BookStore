import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [detailBook, setBookDetail] = useState(null);

  async function details() {
    const response = await fetch(
      `https://openlibrary.org/api/books?bibkeys=OLID:${id}&format=json&jscmd=data`
    );
    const specificBookDetail = await response.json();
    setBookDetail(specificBookDetail[`OLID:${id}`]);
  }
  console.log(detailBook);
  useEffect(() => {
    details();
  }, [id]);
  return (
    <div className="w-full p-30 flex justify-between">
      <div>
        <p>
          <span>Title:</span>
          {detailBook.title}
        </p>
        <p>
          <span>Author:</span>
          {detailBook?.authors[0]?.name}
        </p>
        <p>
          <span>Number of pages:</span>
          {detailBook?.number_of_pages}
        </p>
        <p>
          <span>Publish Date:</span>
          {detailBook?.publish_date}
        </p>
        <p>
          <span>Publishers:</span>
          {detailBook?.publishers[0]?.name}
        </p>
      </div>

      <div>
        <img src={detailBook.cover.large}></img>
      </div>
    </div>
  );
};

export default ProductDetails;
