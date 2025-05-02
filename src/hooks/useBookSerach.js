import React, { useEffect, useState } from "react";
import axios from "axios";
const useBookSerach = (bookName) => {
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setError] = useState(null);

  useEffect(() => {
    if (!bookName) return;


    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://openlibrary.org/search.json?title=${encodeURIComponent(
            bookName
          )}`
        );

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
