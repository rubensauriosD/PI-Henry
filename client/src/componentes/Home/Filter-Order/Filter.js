import { useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react';
import {getGenders,generico, filtrados} from '../../../actions/actions'
import DivStyle from './style'

function Filter() {
    const generos = useSelector(state => state.genders)
    var games = useSelector(state => state.games)
    const existentes = useSelector(state => state.gamesApi)
    const creados = useSelector(state => state.gamesPost)
    var paraFiltrar = useSelector(state => state.gamesFilter)
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getGenders());
    },[])

    function filteredGenros(e) {
        var gen = []

        games.filter((item) => {
            if (item.gender) {
                item.gender.forEach(element => {
                    if (element.name == e.target.value) {
                        gen.push(item)
                    }
                });
            }
        })

        paraFiltrar = [...gen]
        dispatch(filtrados(paraFiltrar))
    }

    function filteredExist(e) {

        if (e.target.value == 'exist') 
        {
            for (let index = 0; index < creados.length; index++) 
            {
                existentes.shift()
            }
            dispatch(filtrados(existentes))
        }
        else{
            dispatch(filtrados(creados))
        }
    }

    return(
        <DivStyle>
            <h2>Filters</h2>
            <select onChange={filteredExist}>
                <option value="exist">Existing Game</option>
                <option value="create">Game Created</option>
            </select>
            <select onChange={filteredGenros}>
                {
                    generos && generos.map((g,id) => {
                        return <option key={id}>
                            {`${g.nombre}`}
                        </option>
                    })
                }
            </select>
            <button onClick={() => dispatch(filtrados(games))}>🔄</button>
        </DivStyle>
    )
}

export default Filter;