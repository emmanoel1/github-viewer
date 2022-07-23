const user = (username) => {
  const userFind = `https://api.github.com/users/${ username }/repos`;
  return userFind;
}

export default user;