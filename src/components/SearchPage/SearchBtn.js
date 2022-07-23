import React, { useContext } from 'react';
import ReposContext from '../../context/ReposContext';
import user from '../../endpoints/user';
import { useNavigate } from 'react-router-dom';
import setLocalStorage from '../../services/setLocalStorage';

function SearchBtn() {
  const { userFind, setUserEndpoint } = useContext(ReposContext);

  const navigate = useNavigate();

  const handleSearch = (target) => {
    target.disabled = true;

    setLocalStorage('user', userFind);

    const endpoint = user(userFind);

    setUserEndpoint(endpoint);

    navigate(`/${userFind}/repos`)
  }

  return(
      <button
        className="button is-primary" 
        disabled={ userFind.length > 0 ? false : true }
        onClick={ ({ target }) => handleSearch(target) }
      >
        Go To Repos
      </button>
  )
}

export default SearchBtn;
