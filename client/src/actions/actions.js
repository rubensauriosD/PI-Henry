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

export function generico(games)
{
    return function (dispatch)
    {
        dispatch({type: 'GENERICO', payload: games})
    }
};

export function paginate()
{
    return function (dispatch)
    {
        dispatch({type: 'PAGINATE'})
    }
}; 

//trae el game detail
export function getVideoGameId(id) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/videogame/${id}`);
        dispatch({ type: 'GET_GAME', payload: response.data });
    }
}

export function getVideoGameName(name) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        dispatch({ type: 'GET_NAME', payload: response.data });
    }
}


