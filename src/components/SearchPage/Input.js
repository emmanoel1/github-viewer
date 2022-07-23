import React, { useContext } from 'react';
import ReposContext from '../../context/ReposContext';
import inputUser from '../../endpoints/user';

function Input() {
  const { setUserFind, setUserEndpoint } = useContext(ReposContext);

  return(
    <input
      className="input is-primary is-medium"
      name="user"
      type="text"
      placeholder="Enter a Github User"
      onChange={({ target }) => {
        setUserFind(target.value)
        setUserEndpoint(inputUser(target.value))
      }}
  />
  )
}

export default Input;
