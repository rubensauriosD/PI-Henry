
import {useDispatch, useSelector} from 'react-redux'
import DivStyle from './style'
import { generico } from "../../../actions/actions";
// import { useEffect} from 'react';

function Order() 
{
    var games = useSelector((state) => state.games);
    const dispatch = useDispatch();

    function order(e) {
        // dispatch(ordered(e.target.value, games))
        var names = games.map((m) => m.name);
        var rating = games.map((m) => m.rating);
        var o = [];

        switch (e.target.value) {
            case "asc":
                names = names.sort();
                names.forEach((n) =>{
                    games.forEach((element) =>{
                        if(n === element.name){
                            o.push(element);
                        }
                    });
                });
                games = [...o]
                console.log(games)
                dispatch(generico(games))
                break;

            case "desc":
                names = names.sort().reverse();
                names.forEach((n) =>{
                    games.forEach((element) =>{
                        if(n === element.name){
                            o.push(element);
                        }
                    });
                });
                games = [...o]
                dispatch(generico(games))
                break;

            case "rating+":
                rating = rating.sort((a,b) => b - a);
                rating.forEach((f) => {
                    games.forEach((element) => {
                        if(f === element.rating){
                            o.push(element);
                        }
                    });
                });

                o = o.filter((e, i) => o.indexOf(e)=== i);
                games = [...o]
                dispatch(generico(games))
                break;

            case "rating-":
                rating = rating.sort((a,b) => a - b);
                rating.forEach((f) => {
                    games.forEach((element) => {
                        if(f === element.rating){
                            o.push(element);
                        }
                    });
                });

                o = o.filter((e, i) => o.indexOf(e)=== i);
                games = [...o]
                dispatch(generico(games))
                break;
        }
    }

    return(
        <DivStyle>
            <h2>Ordered</h2>
            <select onChange={(e) => order(e)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
            <option value="rating+">Higher Rating 📈 </option>
            <option value="rating-">Lower Rating 📉</option>
            </select>
        </DivStyle>
    )
}

export default Order;