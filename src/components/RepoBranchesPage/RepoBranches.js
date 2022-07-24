import React from 'react';
import { useParams } from 'react-router-dom';
import repoBranches from '../../endpoints/repoBranches';
import useFetchBranches from '../../Hooks/useFetchBranches';
import getLocalStorage from '../../services/getLocalStorage';
import setLocalStorage from '../../services/setLocalStorage';
import ErrorComponent from '../apiError/ErrorComponent';
import LoadingComponent from '../ReposPage/LoadingComponent';
import '../ReposPage/repos.css'
import BranchCards from './BranchCards';

function RepoBranches() {
    const { user, repo } = useParams();
    setLocalStorage('user', user);
    setLocalStorage('repo', repo);
    const getEndpoint = repoBranches(getLocalStorage('user'), getLocalStorage('repo'));

    const getParams = {
      owner: getLocalStorage('user'),
      repo: getLocalStorage('repo'),
    }

    const [ api_response ] = useFetchBranches(getEndpoint, getParams);

    const can_render_branches = api_response.length > 0;
    const is_error = api_response[0] === 'error';

    const renderRepo = can_render_branches && is_error === false ? (
      <BranchCards res={api_response} repo={getParams.repo}/>
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

export default RepoBranches;