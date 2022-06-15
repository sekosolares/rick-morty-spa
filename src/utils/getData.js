const API = 'https://rickandmortyapi.com/api/character/';

export const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;
    try {
        const response = await fetch(apiURL);
        return await response.json();
    } catch (error) {
        console.log(`Fetch Error ${error}`);
    }
};