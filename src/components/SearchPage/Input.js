import React, { useContext } from 'react';
import ReposContext from '../../context/ReposContext';
import '../ReposPage/repos.css'

function Input() {
  const { setUserFind } = useContext(ReposContext);

  return(
    <input
      className="input is-primary is-medium mb-3 has-text-centered searchRepo-input"
      type="text"
      placeholder="User"
      onChange={({ target }) => setUserFind(target.value)}
  />
  )
}

export default Input;
