import React, { useState } from 'react';
import allUsers from '../endpoints/allUsers';
import ReposContext from './ReposContext';

function ReposProvider({ children }) {
  const [userFind, setUserFind] = useState('');
  const [userEndpoint, setUserEndpoint] = useState(allUsers)

  const contextValue = {
    userFind,
    setUserFind,
    userEndpoint,
    setUserEndpoint,
  };
  
  return (
    <ReposContext.Provider value={contextValue}>
      {children}
    </ReposContext.Provider>
  );
};

export default ReposProvider;