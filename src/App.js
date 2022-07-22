import React from 'react';
import allUsers from './endpoints/allUsers';
import useFetch from './Hooks/useFetch';

function App() {

  const [ data ] = useFetch(allUsers);

  const app = !data ? ('load') : data.map(repos => {
  
    return(
      <li key={repos.name}>
        <p>{repos.name}</p>
      </li>
    )
  })

  return (
    <div className='App'>
        {app}
    </div>
  );
}

export default App;
