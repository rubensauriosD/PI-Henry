import { useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react';
import {getGenders} from '../../../actions/actions'
import { filter } from './Filter-Order';
import DivStyle from './style'

function Filter() {
    const generos = useSelector(state => state.genders)
    const games = useSelector(state => state.games)
    const existentes = useSelector(state => state.gamesApi)
    const creados = useSelector(state => state.gamesPost)
    const dispatch = useDispatch();


    useEffect(() =>{
        dispatch(getGenders());
    },[])

    function filtered(e) {
        dispatch(filter(e.target.value, games))
    }

    function filteredExist(e) {
        if (e.target.value == 'exist') {
            return existentes;
        }
        else{
            return creados;
        }
    }

    return(
        <DivStyle>
            <h2>Filters</h2>
            <select onChange={filteredExist}>
                <option value="exist">Existing Game</option>
                <option value="create">Game Created</option>
            </select>
            <select onChange={filtered}>
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