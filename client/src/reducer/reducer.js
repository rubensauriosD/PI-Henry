const initialState = {
    games:[],
    gameDetail:{},
    genders:[],
    platforms:[],
    gamesApi:[],
    gamesPost:[],
    gamesPag:[],
    pag:[]
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
                    games: action.payload
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

        case 'PAGINATE':
            var p;
            if (state.pag.length > 4) 
            {
                p = state.gamesPag.slice(0,15)
                state.gamesPag.splice(0,15)
                return {
                    ...state,
                    pag: [...state.pag, p]
                };
            }
            else{
                p = state.gamesPag.slice(0,15)
                state.gamesPag.splice(0,15)
                return {
                    ...state,
                    pag: p
                };
            }
            
    
        default:
            return state;
    }
}

export default reducer;