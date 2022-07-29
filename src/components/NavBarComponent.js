import React, { useState } from "react";
import GitLogo from '../images/gitLogo.png';
import GitLogoAlt from "../staticTexts/GitLogoAlt";

function NavBarComponent() {
  const [isActive, setIsActive] = useState(false);

  const navMobileClick = () => {
    if(isActive === false){
      setIsActive(true);
    }
    if(isActive === true){
      setIsActive(false);
    }
  }

  return(
    <nav className="navbar is-fixed-top">
      <div className="container">

        <div className="navbar-brand">

            <a href="https://github.com/" className="navbar-item">
                <img src={GitLogo} alt={ GitLogoAlt } />
            </a>
            
            <button
            aria-label="menu"
            aria-expanded="false"
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            onClick={navMobileClick}
            >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </button>

        </div>

        <div className={ `navbar-menu ${isActive ? 'is-active' : ''} `}>
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
