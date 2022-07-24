import React from 'react';
import errorImg from '../../images/jfy-marca-donts-2cores.jpg';
import error_alt from '../../staticTexts/error_alt.js';

function ErrorComponent({ message }) {
  return(
    <div>
      <img
          src={ errorImg }
          alt={ error_alt }
      />
      {message}
    </div>
  )
}

export default ErrorComponent;