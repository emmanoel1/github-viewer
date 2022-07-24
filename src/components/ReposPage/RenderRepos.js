import React from 'react';
import useFetch from '../../Hooks/useFetch';
import LoadingComponent from './LoadingComponent';
import { useParams } from 'react-router-dom';
import oneUser from '../../endpoints/oneUser'
import ReposCards from './ReposCards';
import setLocalStorage from '../../services/setLocalStorage';
import getLocalStorage from '../../services/getLocalStorage';
import ErrorComponent from '../apiError/ErrorComponent';

function RenderRepos() {
  const { user } = useParams();
  setLocalStorage('user', user);
  const getEndpoint = oneUser(getLocalStorage('user'));

  const [ api_response ] = useFetch(getEndpoint);

  const can_render_repos = api_response.length > 0;
  const is_error = api_response[0] === 'error';

  const renderRepo = can_render_repos && is_error === false ? (
    <ReposCards res={api_response} />
  ) : (
    <LoadingComponent />
 )

  const error = (<ErrorComponent message={api_response[1]}/>)

    return(
      <div>
        {is_error === true ? error : renderRepo}
      </div>
    );
}

export default RenderRepos;