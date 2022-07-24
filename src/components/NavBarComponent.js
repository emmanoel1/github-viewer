import React from "react";
import GitLogo from '../images/gitLogo.png';
import GitLogoAlt from "../staticTexts/GitLogoAlt";

function NavBarComponent() {
  return(
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
            <a href="/" className="navbar-item">
                <img src={GitLogo} alt={ GitLogoAlt } />
            </a>
            <a href='/' className="navbar-burger">
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

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a href="/" className="button is-primary">
                            <strong>Sing up</strong>
                        </a>
                        <a href="/" className="button is-light">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBarComponent;
