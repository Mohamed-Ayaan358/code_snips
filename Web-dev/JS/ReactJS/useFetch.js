/*
    useFetch can be used to fetch data asynchronously
*/

import { useEffect, useState, useRef } from 'react';

function useFetch(url, options = undefined) {
    const [isLoading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            fetch(url, options)
                .then((response) => {
                    if (!response.ok) {
                        setError(new Error('Bad Response...'));
                        setHasError(true);
                        return null;
                    }
                    return response.json();
                })
                .then((res) => setData(res))
                .catch((error) => {
                    setError(error);
                    setHasError(true);
                });

            setLoading(false);
        };

        try {
            fetchData();
        } catch {
            setError(new Error('Something went wrong...'));
            setHasError(true);
        }
    }, [url]);

    return { isLoading, hasError, error, data };
}

export default useFetch;
