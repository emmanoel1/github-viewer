import React from 'react';
import SearchRepoForm from '../components/SearchRepoForm';
import JFY_logo from '../images/jfy-logo-apricot-1280.png';
import JFY_alt from '../staticTexts/AltLogo';

function SearchRepo() {
  
    return(
      <div>
        <h1>
          Github Viewer
        </h1>
        <img
          src={ JFY_logo }
          alt={ JFY_alt }
        />
        <SearchRepoForm />
      </div>
    )
}

export default SearchRepo;