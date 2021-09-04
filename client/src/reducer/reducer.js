const initialState = {
    games:[],
    gameDetail:{},
    genders:[],
    platforms:[],
    gamesApi:[],
    gamesPost:[]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_GAMES':
                return{
                    ...state,
                    games: action.payload,
                    gamesApi: action.payload//esto agrega el juego en el arary de juegos existentes asi puedo hacer el filtro
                }

        case 'GET_GAME':
                return{
                    ...state,
                    gameDetail: action.payload
                }

        case 'GET_GENDERS':
                return{
                    ...state,
                    genders: action.payload
                }
                
        case 'GET_PLATFORMS':
                return{
                    ...state,
                    platforms: action.payload
                }
    
        default:
            return state;
    }
}

export default reducer;