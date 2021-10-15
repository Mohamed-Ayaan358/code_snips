/*
    useLocalStorage can be used to set and retrieve data from localStorage
*/

import { useEffect, useState } from 'react';

function useLocalStorage(key) {
    const [isLoading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);
    const [value, setValue] = useState(null);

    const setStorageValue = (value) => {
        try {
            if (value) {
                window.localStorage.setItem(key, String(value));
            }
            setValue(value);
        } catch (error) {
            setHasError(true);
            setError(new Error('Error Setting Storage value'));
        }
    };

    useEffect(() => {
        if (key) {
            setValue(() => {
                setLoading(true);
                const getValue = window.localStorage.getItem(key);
                setLoading(false);
                return getValue;
            });
        }
    }, [key]);

    return { isLoading, hasError, error, value, setStorageValue };
}

export default useLocalStorage;
