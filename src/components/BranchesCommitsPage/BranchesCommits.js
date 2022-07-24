import React from 'react';
import { useParams } from 'react-router-dom';
import '../ReposPage/repos.css'

function BranchesCommits() {

    const { repo } = useParams();

    console.log(repo);

    return(
        <div className='center-loginImg'>
          ola
        </div>
    )
}

export default BranchesCommits;