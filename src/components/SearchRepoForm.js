import React from 'react';
import allUsers from '../endpoints/allUsers';
import useFetch from '../Hooks/useFetch';

function SearchRepoForm() {
  const [ data ] = useFetch(allUsers);

  const reposList = !data ? <div></div> : data.map(repos => {
    return(
      <li key={repos.name}>
        <p>{repos.name}</p>
      </li>
    )
  })

  return(
    <div>
      { reposList }
    </div>
  )
}

export default SearchRepoForm;
