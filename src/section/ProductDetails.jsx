import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/ui/button";

const ProductDetails = () => {
  const { id } = useParams();
  const [detailBook, setBookDetail] = useState(null);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

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
    <>
      <div className="w-full p-30 flex justify-between">
        <div className="flex flex-col gap-10">
          <p>
            <span className="text-blue-600">Title: </span>
            {detailBook?.title}
          </p>
          <p>
            <span className="text-blue-600">Author: </span>
            {detailBook?.authors[0]?.name}
          </p>
          <p>
            <span className="text-blue-600">Number of pages: </span>
            {detailBook?.number_of_pages}
          </p>
          <p>
            <span className="text-blue-600">Publish Date: </span>
            {detailBook?.publish_date}
          </p>
          <p>
            <span className="text-blue-600">Publishers: </span>
            {detailBook?.publishers[0]?.name}
          </p>
        </div>

        <div className="h-[300px] w-[200px] rounded shadow-2xl">
          {!isImgLoaded && (
            <div className="h-full w-full bg-gray-200 animate-pulse rounded">
              Loading image...
            </div>
          )}
          <img
            src={detailBook?.cover?.large}
            alt="Book Image"
            className={`h-full w-full ${isImgLoaded ? "block" : "hidden"} `}
            onLoad={() => setIsImgLoaded(true)}
          ></img>
        </div>
      </div>
      <div className="w-full flex justify-center mb-10">
        <Button className="btn-navy btn-navy:hover w-[20%] ">
          Add To cart
        </Button>
      </div>
    </>
  );
};

export default ProductDetails;
