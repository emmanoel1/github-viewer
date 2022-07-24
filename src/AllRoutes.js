import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchRepo from './pages/SearchRepo';
import Repos from './pages/Repos';
import NavBar from './pages/NavBar';
import Repo from './pages/Repo';
import Commits from './pages/Commits';

function AllRoutes() {
    return(
    <BrowserRouter>
     <NavBar /> 
      <Routes>
        <Route exact path="/" element={ <SearchRepo /> } />
        <Route exact path="/:user/repos" element={ <Repos /> } />
        <Route exact path="/:user/repos/:repo" element={ <Repo /> } />
        <Route exact path="/:user/repos/:repo/:branch" element={ <Commits /> } />
      </Routes>
    </BrowserRouter>
    )
}

export default AllRoutes;