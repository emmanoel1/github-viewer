const oneUser = (username) => {
  const userFind = `https://api.github.com/users/${ username }/repos`;
  return userFind;
}

export default oneUser;
