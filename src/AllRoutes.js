import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchRepo from './pages/SearchRepo';

function AllRoutes() {
    return(
      <Routes>
        <Route exact path="/" element={ <SearchRepo /> } />
      </Routes>
    )
}

export default AllRoutes;