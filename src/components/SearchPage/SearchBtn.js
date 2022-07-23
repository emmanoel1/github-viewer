import React, { useContext } from 'react';
import ReposContext from '../../context/ReposContext';
import user from '../../endpoints/user';
import { useNavigate } from 'react-router-dom';

function SearchBtn() {
  const { userFind, setUserEndpoint } = useContext(ReposContext);

  const navigate = useNavigate();

  const handleSearch = (target) => {
    target.disabled = true;

    const endpoint = user(userFind);

    setUserEndpoint(endpoint);

    navigate('/')
  }

  return(
      <button
        className="button is-primary" 
        disabled={ userFind.length > 0 ? false : true }
        onClick={ ({ target }) => handleSearch(target) }
      >
        Search
      </button>
  )
}

export default SearchBtn;
