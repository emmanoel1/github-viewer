import React, { useContext } from 'react';
import ReposContext from '../../context/ReposContext';
import '../ReposPage/repos.css'

function Input() {
  const { setUserFind } = useContext(ReposContext);

  return(
    <input
      className="input center is-primary is-medium mb-3"
      name="user"
      type="text"
      placeholder="Enter a Github User"
      onChange={({ target }) => setUserFind(target.value)}
  />
  )
}

export default Input;
