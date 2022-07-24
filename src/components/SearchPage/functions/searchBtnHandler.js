const searchBtnHandler = (target, userFind, navigate) => {
    target.disabled = true;
    navigate(`/${userFind}/repos`);
}

export default searchBtnHandler;