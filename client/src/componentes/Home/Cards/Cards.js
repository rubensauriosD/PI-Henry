import Card from "./Card/Card";
import {DivStyle ,DivStyle2} from "./style";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import {getVideoGameName,getVideoGames,reset,filtrados} from "../../../actions/actions"

function Cards() {
    var games = useSelector(state => state.games);
    var gamesNames = useSelector(state => state.gamesNames);
    var filt = useSelector(state => state.gamesFilter);
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    var [currentPage, setCurrentPage] = useState(1);
    const [gamesXPag] = useState(15);
    const pageNumber = Math.ceil(games.length / gamesXPag);
    const indexOfLastPost = currentPage * gamesXPag;
    const indexOfFirstPost = indexOfLastPost - gamesXPag;
    var currentGames = games.slice(indexOfFirstPost, indexOfLastPost);

    const nextPage = () => {
        if (currentPage < pageNumber) setCurrentPage(currentPage + 1);
        else setCurrentPage(1);
    };
        
    const prePage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
        else setCurrentPage(pageNumber);
    };

    useEffect(() =>{
        dispatch(getVideoGames());
    },[])

    function handleChange(e) {
        setName(e.target.value)
    } 

    return(
        <div>
            <DivStyle2>
                <input onChange={(e)=> handleChange(e)} type='text'/>
                <button onClick={() => {
                    dispatch(getVideoGameName(name));
                    dispatch(filtrados(gamesNames))
                }}
                >Search 🔍</button>
                <button onClick={() => dispatch(filtrados(games))}>🔄</button>
            </DivStyle2>

            <DivStyle>
            {
                // bool == true ? currentGames?.map((game,i) => {
                //     return <Card
                //     key={i} 
                //     name={game.name}
                //     image={game.image}
                //     genres={game.gender}
                //     id={game.id}/>
                // })
                // :
                // gamesNames.length >= 1 ? gamesNames.map((game,i) => {
                //     return <Card
                //     key={i} 
                //     name={game.name}
                //     image={game.image}
                //     genres={game.gender}
                //     gender={game.gender}
                //     id={game.id}/>
                // }) 
                // :
                // filt.length >= 1 || filt.length < 1 ? filt.map((game,i) => {
                //     return <Card
                //     key={i} 
                //     name={game.name}
                //     image={game.image}
                //     genres={game.gender}
                //     id={game.id}/>
                // })
                // :
                filt.length >= 1 ? filt.map((game,i) => {
                    return <Card
                    key={i} 
                    name={game.name}
                    image={game.image}
                    genres={game.gender}
                    id={game.id}/>
                })
                :
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