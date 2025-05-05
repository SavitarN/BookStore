import React from "react";

const SearchResult = (props) => {
  return (
    <div className="min-h-[400px]  flex flex-col items-center justify-around p-5 rounded shadow-xl gap-5  ">
      <p>Title:{props.title}</p>
      <p>{props.author_name[0]}</p>
    </div>
  );
};

export default SearchResult;
