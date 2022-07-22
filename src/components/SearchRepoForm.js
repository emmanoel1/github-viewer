import React, { useState } from 'react';

function SearchRepoForm() {
  const [userName, setUserName] = useState('');

  console.log(userName);

  return(
    <form>
      <input
        className="input is-primary is-medium"
        name="user"
        type="text"
        placeholder="Enter a Github User"
        onChange={({ target }) => setUserName(target.value)}
      />
      <button
      type="submit"
      >
        Search
      </button>
    </form>
  )
}

export default SearchRepoForm;
