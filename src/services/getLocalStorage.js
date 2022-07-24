const getLocalStorage = (key) => {
    const getStored = JSON.parse(localStorage.getItem(key));
    if (getStored !== null) {
        return getStored;
    }
}

export default getLocalStorage;
