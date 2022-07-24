import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchRepo from './pages/SearchRepo';
import Repos from './pages/Repos';
import NavBar from './pages/NavBar';

function AllRoutes() {
    return(
    <BrowserRouter>
     <NavBar /> 
      <Routes>
        <Route exact path="/" element={ <SearchRepo /> } />
        <Route exact path="/:user/repos" element={ <Repos /> } />
        <Route exact path="/:repo" element={ <SearchRepo /> } />
      </Routes>
    </BrowserRouter>
    )
}

export default AllRoutes;