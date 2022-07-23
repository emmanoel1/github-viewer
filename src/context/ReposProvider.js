import React, { useState } from 'react';
import reposContext from './reposContext';

function ReposProvider({ children }) {
  const [repoUsers, setRepoUsers] = useState('');

  const contextValue = {
    repoUsers,
    setRepoUsers,
  };

  return (
    <reposContext.Provider value={contextValue}>
      {children}
    </reposContext.Provider>
  );
}

export default ReposProvider;