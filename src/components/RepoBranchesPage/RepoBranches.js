import React from 'react';
import { useParams } from 'react-router-dom';

function RepoBranches() {

    const repo = useParams();

    console.log(repo);

    return(
        <div>
          ola
        </div>
    )
}

export default RepoBranches;