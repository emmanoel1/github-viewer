const branchCommitsEndpoint = (username, repo) => {
    const repoFind = `https://api.github.com/repos/${ username }/${repo}/commits`;
    return repoFind;
  }
  
export default branchCommitsEndpoint;