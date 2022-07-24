import React, { useContext } from 'react';
import ReposContext from '../../context/ReposContext';
import { useNavigate } from 'react-router-dom';
import searchBtnHandler from './functions/searchBtnHandler';

function SearchBtn() {
  const { userFind } = useContext(ReposContext);

  const navigate = useNavigate();

  return(
      <button
        className="button is-primary" 
        disabled={ userFind.length > 0 ? false : true }
        onClick={ ({ target }) =>
          searchBtnHandler(
            target,
            userFind,
            navigate
        )}
      >
        Go To Repos
      </button>
  )
}

export default SearchBtn;
