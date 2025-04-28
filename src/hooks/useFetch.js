import axios from "axios";
import { useEffect, useState } from "react";

//
const baseUrl = 'https://openlibrary.org/subjects';




export const useFetch = (bookName) => {
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/${bookName}.json`);
                if (response.status === 200) {
                    setBooks(response.data.works)
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [bookName]);
    return { books, loading, error }

}

