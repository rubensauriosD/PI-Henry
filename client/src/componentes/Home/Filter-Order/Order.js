import { ordered } from "./Filter-Order";
import {useDispatch, useSelector} from 'react-redux'
import DivStyle from './style'
// import { getVideoGames } from "../../../actions/actions";
// import { useEffect} from 'react';

function Order() 
{
    var games = useSelector((state) => state.games);
    const dispatch = useDispatch();

    function order(e) {
        dispatch(ordered(e.target.value, games))
    }

    return(
        <DivStyle>
            <h2>Ordered</h2>
            <select onChange={(order)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
            <option value="rating+">Higher Rating 📈 </option>
            <option value="rating-">Lower Rating 📉</option>
            </select>
        </DivStyle>
    )
}

export default Order;