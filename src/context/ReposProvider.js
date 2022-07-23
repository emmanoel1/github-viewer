import React, { useState } from 'react';
import ReposContext from './ReposContext';

function ReposProvider({ children }) {
  const [repoUsers, setRepoUsers] = useState('');

  const contextValue = {
    repoUsers,
    setRepoUsers,
  };

  return (
    <ReposContext.Provider value={contextValue}>
      {children}
    </ReposContext.Provider>
  );
};

export default ReposProvider;