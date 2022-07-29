import React from "react";
import GitLogo from '../images/gitLogo.png';
import GitLogoAlt from "../staticTexts/GitLogoAlt";

function NavBarComponent() {
  return(
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
            <a href="https://github.com/" className="navbar-item">
                <img src={GitLogo} alt={ GitLogoAlt } />
            </a>
            <p className="navbar-item" >Github Viewer</p>
            <a role="button" aria-label="menu" aria-expanded="false" href="/" className="navbar-burger" data-target="navbarBasicExample">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </a>
        </div>

        <div className="navbar-menu" id="navMenu">
            <div className="navbar-start">
                <a href="/" className="navbar-item">
                    Home
                </a>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBarComponent;
