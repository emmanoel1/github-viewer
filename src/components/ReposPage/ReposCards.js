import React, { useContext } from 'react';
import useFetch from '../../Hooks/useFetch';
import ReposContext from '../../context/ReposContext';

function ReposCards() {

  const { userFind, userEndpoint, setGitApiResponse, gitApiResponse } = useContext(ReposContext);

  console.log(userEndpoint, userFind);

  const [ api_response ] = useFetch(userEndpoint);

  setGitApiResponse(api_response);

  // useEffect(() => { console.log(userFind) }, []);

  console.log(gitApiResponse);

  const render_repos = gitApiResponse.length > 0 ? (gitApiResponse.map((repo) => (
    <li key={ repo.name }>
    <p>
      { repo.name }
    </p>
    </li>
  ))) : (<div>load...</div>)

    return(
      <div>
        {render_repos}
      </div>
    );
}

export default ReposCards;