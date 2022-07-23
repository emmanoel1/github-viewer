import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchRepo from './pages/SearchRepo';
import Repos from './pages/Repos';

function AllRoutes() {
    return(
      <Routes>
        <Route exact path="/" element={ <SearchRepo /> } />
        <Route exact path="/:user/repos" element={ <Repos /> } />
      </Routes>
    )
}

export default AllRoutes;