import React from 'react';
import useFetch from '../../Hooks/useFetch';
import LoadingComponent from './LoadingComponent';
import { useParams } from 'react-router-dom';
import oneUser from '../../endpoints/oneUser'
import ReposCards from './ReposCards';

function RenderRepos() {
  const { user } = useParams();

  const [ api_response ] = useFetch(oneUser(user));

  console.log(api_response);

  const render_repos = api_response.length > 0
    ? (<ReposCards res={api_response} />)
    : (<LoadingComponent />)

    return(
      <div>
        {render_repos}
      </div>
    );
}

export default RenderRepos;