const apiUrls = {
    BASE: 'https://vpic.nhtsa.dot.gov/api',
    GET_VARIABLES: '/vehicles/getvehiclevariablelist?format=json'
};

export const decodeVin = () => {

};

export const getVinVariables = () => {
    return fetch(`${apiUrls.BASE}${apiUrls.GET_VARIABLES}`)
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
