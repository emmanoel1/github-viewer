import React, { useContext } from 'react';
import reposContext from '../context/reposContext';

function SearchRepoForm() {
  const { setRepoUsers } = useContext(reposContext);

  return(
    <form>
      <input
        className="input is-primary is-medium"
        name="user"
        type="text"
        placeholder="Enter a Github User"
        onChange={({ target }) => setRepoUsers(target.value)}
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
