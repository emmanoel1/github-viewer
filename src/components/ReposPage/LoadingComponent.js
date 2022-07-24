import React from 'react';
import spinnerLoadingSvg from '../../images/logo.svg'

function LoadingComponent() {
  return(
    <div>
      <img
        className="center-loadingImg"
        src={spinnerLoadingSvg}
        alt={'load'}
      />
      </div>
  )
}

export default LoadingComponent;
