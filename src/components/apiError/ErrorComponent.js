import React from 'react';
import errorImg from '../../images/gitLogo.png';
import error_alt from '../../staticTexts/error_alt.js';

function ErrorComponent({ message }) {
  return(
    <div>
      <img
        className='center-loadingImg'
          src={ errorImg }
          alt={ error_alt }
      />
      <p className='has-text-centered has-text-grey is-size-3'>{message}</p>
    </div>
  )
}

export default ErrorComponent;