import { useEffect, useState } from "react";
import axios from "axios";

const useFetchBranches = (url, param) => {
    const [result, setResult] = useState([]);

    useEffect(() => {

        axios.get(url, param)
        .then(response => {
            setResult(response.data)
        })
        .catch((error) => {
            setResult( ['error', error.message] )
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return [ result ];
}

export default useFetchBranches;