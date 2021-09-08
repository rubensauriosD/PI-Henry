import { useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react';
import {getGenders} from '../../../actions/actions'

import DivStyle from './style'
import {generico} from '../../../actions/actions'

function Filter() {
    const generos = useSelector(state => state.genders)
    var games = useSelector(state => state.games)
    const existentes = useSelector(state => state.gamesApi)
    const creados = useSelector(state => state.gamesPost)
    const dispatch = useDispatch();


    useEffect(() =>{
        dispatch(getGenders());
    },[])

    function filteredGenros(e) {
        // dispatch(filter(e.target.value, games))
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

        games = [...gen]
        dispatch(generico(games))
    }

    function filteredExist(e) {
        if (e.target.value == 'exist') {
            dispatch(generico(existentes))
        }
        else{
            dispatch(generico(creados))
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
        </DivStyle>
    )
}

export default Filter;