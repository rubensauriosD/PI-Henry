import axios from 'axios';

//trae todos los juegos
export function getVideoGames()
{
    return function (dispatch){
        return axios.get('http://localhost:3001/videogames/')
        .then(res => res.data)
        .then(data => {
            dispatch({
                type: 'GET_GAMES', payload: data
            })
        })
    }
};

//trae las pataformas q haya
export function getPlatform()
{
    return function (dispatch){
        return axios.get('http://localhost:3001/genres/platforms')
        .then(res => res.data)
        .then(data => {
            dispatch({
                type: 'GET_PLATFORMS', payload: data
            })
        })
    }
};

//trae los generos q haya
export function getGenders()
{
    return function (dispatch){
        return axios.get('http://localhost:3001/genres/')
        .then(res => res.data)
        .then(data => {
            dispatch({
                type: 'GET_GENDERS', payload: data
            })
        })
    }
};

//trae el game detail
export function getVideoGameId(id) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/videogame/${id}`);
        dispatch({ type: 'GET_GAME', payload: response.data });
    }
}


