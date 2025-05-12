import axios from "axios";
import { useEffect, useState } from "react";

//
const baseUrl = 'https://openlibrary.org/subjects';




export const useFetch = (category) => {
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);
    console.log('when the user first loads the page', books)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${baseUrl}/${category}.json`);
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
    }, [category]);
    return { books, loading, error }

}

