const initialState = {
    games:[],
    gameDetail:{},
    genders:[],
    platforms:[],
    gamesApi:[],
    gamesPost:[],
    gamesName:[],
    gamesFilter:[]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_GAMES':
                return{
                    ...state,
                    games: action.payload,
                    gamesApi: action.payload,
                    gamesPag:action.payload
                    //esto agrega el juego en el arary de juegos existentes asi puedo hacer el filtro
                }

        case 'GET_GAME':
                return{
                    ...state,
                    gameDetail: action.payload
                }

        case 'GET_NAME':
                return{
                    ...state,
                    gamesName: action.payload
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

        case 'GENERICO':
                return{
                    ...state,
                    games: action.payload
                }

        case 'FILTRADOS':
                return{
                    ...state,
                    gamesFilter: action.payload
                }

        case 'RESET':
                return{
                    ...state,
                    gamesName: action.payload
                }
    
        default:
            return state;
    }
}

export default reducer;