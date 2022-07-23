import React from 'react';
import SearchRepoForm from '../components/SearchPage/SearchRepoForm';
import JFY_logo from '../images/jfy-logo-apricot-1280.png';
import JFY_alt from '../staticTexts/AltLogo';

function SearchRepo() {
    return(
      <div className="body-Search">
        <header className='header-search'>
          <h1 className='header-title'>
            Github Viewer
          </h1>
        </header>
        <img
          src={ JFY_logo }
          alt={ JFY_alt }
        />
        <SearchRepoForm />
      </div>
    )
}

export default SearchRepo;