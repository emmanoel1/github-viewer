import React from 'react';
import SearchRepoForm from '../components/SearchPage/SearchRepoForm';
import JFY_logo from '../images/jfy-logo-apricot-1280.png';
import JFY_alt from '../staticTexts/AltLogo';
import '../components/ReposPage/repos.css';

function SearchRepo() {
    return(
      <div>
        <img
          className='center-loginImg'
          src={ JFY_logo }
          alt={ JFY_alt }
        />
        <SearchRepoForm />
      </div>
    )
}

export default SearchRepo;