const BASE_URL = 'https://vpic.nhtsa.dot.gov/api';

export const decodeVin = id => {
    return fetch(`${BASE_URL}/vehicles/decodevin/${id}?format=json`)
        .then( response => {
            if ( !response.ok ) {
                throw new Error(response.statusText);
            }

            return response.json();
        })
};

export const getVinVariables = () => {
    return fetch(`${BASE_URL}/vehicles/getvehiclevariablelist?format=json`)
        .then( response => {
            if ( !response.ok ) {
                throw new Error(response.statusText);
            }

            return response.json();
        })
};

const api = {
    decodeVin,
    getVinVariables
};


export default api;
