const repoBranches = (username, repo) => {
    const repoFind = `https://api.github.com/repos/${ username }/${ repo }/branches`;

    return repoFind;
  }
  
export default repoBranches;