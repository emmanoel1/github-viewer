import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {

    const [result, setResult] = useState([]);

    useEffect(() => {

        axios.get(url)
        .then(response => { setResult(response.data) })

    }, [url])

    return [ result ];

}

export default useFetch;