import React from 'react';
import { useParams } from 'react-router-dom';

function RepoBranches() {
    // useEffect((a) => {
        // const repo = params();
        // console.log(a);
    // }, []);
    const repo = useParams();
    console.log(repo);

    return(
        <div>ola</div>
    )
}

export default RepoBranches;