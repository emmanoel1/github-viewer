import React, { useContext } from 'react';
import ReposContext from '../../context/ReposContext';

function SearchBtn() {
  const { userFind } = useContext(ReposContext);

  return(
      <button
        className="button is-primary" 
        disabled={ userFind.length > 0 ? false : true }
      >
        Search
      </button>
  )
}

export default SearchBtn;
