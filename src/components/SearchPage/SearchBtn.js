import React, { useContext } from 'react';
import ReposContext from '../../context/ReposContext';
import inputUser from '../../endpoints/user';

function SearchBtn() {
  const { userFind, setUserEndpoint } = useContext(ReposContext);
  
  const endpoint = inputUser(userFind);

  return(
      <button
        className="button is-primary" 
        disabled={ userFind.length > 0 ? false : true }
        onClick={() => setUserEndpoint(endpoint)}
      >
        Search
      </button>
  )
}

export default SearchBtn;
