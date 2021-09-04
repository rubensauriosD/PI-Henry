import Card from "./Card/Card";
import DivStyle from "./style";
import {getVideoGames} from '../../../actions/actions'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect} from 'react';

function Cards() {
    const games = useSelector(state => state.games);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getVideoGames());
    },[])

    return(
        <DivStyle>
            {
                games?.map((game,i) => {
                    return <Card
                    key={i} 
                    name={game.name}
                    image={game.image}
                    genres={game.gender}
                    id={game.id}/>
                })
            }
        </DivStyle>
    )
}

export default Cards;