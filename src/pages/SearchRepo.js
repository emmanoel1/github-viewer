import React from 'react';
import SearchRepoForm from '../components/SearchPage/SearchRepoForm';
import git_logo from '../images/gitLogo.png';
import git_alt from '../staticTexts/git_alt';
import '../components/ReposPage/repos.css';

function SearchRepo() {
    return(
      <div>
        <h1 className="center-login-title title has-text-centered">Github Viewer</h1>
        <img
          className='center-loginImg'
          src={ git_logo }
          alt={ git_alt }
        />
        <SearchRepoForm />
      </div>
    )
}

export default SearchRepo;