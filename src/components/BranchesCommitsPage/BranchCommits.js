import React from 'react';
import { useParams } from 'react-router-dom';
import branchCommitsEndpoint from '../../endpoints/branchCommitsEndpoint';
import useFetchCommits from '../../Hooks/useFetchCommits';
import getLocalStorage from '../../services/getLocalStorage';
import setLocalStorage from '../../services/setLocalStorage';
import ErrorComponent from '../apiError/ErrorComponent';
import LoadingComponent from '../ReposPage/LoadingComponent';
import '../ReposPage/repos.css'
import CommitsCards from './CommitsCards';

function BranchCommits() {
    const { user, repo, branch } = useParams();
    setLocalStorage('user', user);
    setLocalStorage('repo', repo);
    setLocalStorage('branch', branch);

    const storagedUser = getLocalStorage('user');
    const storagedRepo = getLocalStorage('repo')
    const storagedBranch = getLocalStorage('branch');

    const getEndpoint = branchCommitsEndpoint(storagedUser, storagedRepo, storagedBranch);

    const getParams = {
      owner: storagedUser,
      repo: storagedRepo,
    }

    const [ api_response ] = useFetchCommits(getEndpoint, getParams);

    const can_render_commits = api_response.length > 0;
    const is_error = api_response[0] === 'error';

    const renderRepo = can_render_commits && is_error === false ? (
      <CommitsCards res={api_response} repo={storagedBranch}/>
    ) : (
      <LoadingComponent />
   )

   const error = (<ErrorComponent message={api_response[1]}/>)

    return(
        <div className='center-loginImg'>
          {is_error === true ? error : renderRepo}
        </div>
    )
}

export default BranchCommits;