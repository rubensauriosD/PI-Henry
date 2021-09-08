import Card from "./Card/Card";
import {DivStyle ,DivStyle2} from "./style";
import {getVideoGames} from '../../../actions/actions'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import {generico,paginate,getVideoGameName} from "../../../actions/actions"

function Cards() {
    var games = useSelector(state => state.games);
    // var gPAg = useSelector(state => state.pag);
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getVideoGames());
    },[])
    
    // useEffect(() =>{
    //     dispatch(paginate())
    // },[])

    function handleChange(e) {
        setName(e.target.value)
    } 

    
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesXPag] = useState(15);
    const pageNumber = Math.ceil(games.length / gamesXPag);
    const indexOfLastPost = currentPage * gamesXPag;
    const indexOfFirstPost = indexOfLastPost - gamesXPag;
    const currentGames = games.slice(indexOfFirstPost, indexOfLastPost);

    const nextPage = () => {
        if (currentPage < pageNumber) setCurrentPage(currentPage + 1);
        else setCurrentPage(1);
    };
        
    const prePage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
        else setCurrentPage(pageNumber);
    };

    return(
        <div>
            <DivStyle2>
                <input onChange={(e)=> handleChange(e)} type='text'/>
                <button onClick={()=> dispatch(getVideoGameName(name))}>Search 🔍</button>
                <button onClick={()=> dispatch(getVideoGames())}>Reset 💾</button>
            </DivStyle2>
            <DivStyle>
            {
                currentGames?.map((game,i) => {
                    return <Card
                    key={i} 
                    name={game.name}
                    image={game.image}
                    genres={game.gender}
                    id={game.id}/>
                })
            }
            </DivStyle>
            <DivStyle2>
            <button onClick={() => prePage()}>Previus</button>
            <button onClick={() => nextPage()}>Next</button>
            </DivStyle2>

        </div>
    )
}

export default Cards;