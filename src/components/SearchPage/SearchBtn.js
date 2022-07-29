import React, { useContext } from 'react';
import ReposContext from '../../context/ReposContext';
import { useNavigate } from 'react-router-dom';
import searchBtnHandler from './functions/searchBtnHandler';
import '../ReposPage/repos.css'

function SearchBtn() {
  const { userFind } = useContext(ReposContext);

  const navigate = useNavigate();

  return(
    <div>
      <button
        className="button center is-primary is-rounded" 
        disabled={ userFind.length > 0 ? false : true }
        onClick={ ({ target }) =>
          searchBtnHandler(
            target,
            userFind,
            navigate
        )}
      >
        Search Repositories
      </button>
      </div>
  )
}

export default SearchBtn;
