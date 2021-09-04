import { getVideoGameId } from '../../actions/actions.js';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Vg from './Vg.js';
import {DivStyle2} from "./style";

function Videogame() {
    const game = useSelector(state => state.gameDetail);
    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;
    useEffect(() => {
        dispatch(getVideoGameId(id));
    },[])

    return(
        <DivStyle2>
            <Link to='/home '>
            <button>Go back</button>
            </Link>
            <Vg key={game.id}
                name={game.name}
                description={game.description}
                rating={game.rating}
                platforms={game.platforms}
                genres={game.gender}
                image={game.image}/>        
        </DivStyle2>
    )
}

export default Videogame;