import React, { useEffect, useState } from "react";
import axios from "axios";
import SerachBooks from "../component/SerachBooks";
const useBookSerach = (bookName) => {
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setError] = useState(null);

  console.log('key you are pressing for query', bookName)
  console.log('after 3 press you will have search result', searchResult)
  useEffect(() => {
    if (!bookName?.trim() || bookName.length < 3) return;


    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://openlibrary.org/search.json?title=${encodeURIComponent(
            bookName
          )}
         &fields=*,availability&sort=new&limit=10`);

        setSearchResult(response.data.docs);

      }

      catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [bookName]);
  return { searchResult, loading, errors };
};

export default useBookSerach;
