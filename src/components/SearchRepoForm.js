import React, { useContext } from 'react';
import ReposContext from '../context/ReposContext';
import inputUser from '../endpoints/inputUser';

function SearchRepoForm() {
  const { setUserFind, setUserEndpoint } = useContext(ReposContext);

  return(
    <form>
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
      <button
      className="button is-primary"
      type="submit"
      >
        Search
      </button>
    </form>
  )
}

export default SearchRepoForm;
