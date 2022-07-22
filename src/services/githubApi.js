const api = async (url) => {
    const search = await fetch(url);
    const results = await search.json();
    return results;
};

export default api;