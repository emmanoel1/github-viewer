import React, { useContext } from 'react';
import ReposContext from '../../context/ReposContext';

function Input() {
  const { setUserFind } = useContext(ReposContext);

  return(
    <input
      className="input is-primary is-medium"
      name="user"
      type="text"
      placeholder="Enter a Github User"
      onChange={({ target }) => setUserFind(target.value)}
  />
  )
}

export default Input;
