import DivStyle from "./style.js";
import {useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'
import {getGenders, getPlatform} from '../../actions/actions'

function Create() {
    const [inputs, setInputs] = useState({
        name:'',
        description:'',
        released:'',
        rating:0,
        genres:0,
        platforms:[],
        image:''
    })
    const generos = useSelector(state => state.genders);
    const plataformas = useSelector(state => state.platforms);
    const game = useSelector(state => state.gamesPost);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getGenders());
    },[])

    useEffect(() =>{
        dispatch(getPlatform());
    },[])

    function handleChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        
    } 

    function handleGen(e) {
        let x = Number(e.target.value[0]);
        inputs.genres = x;
    } 
    
    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/videogame', inputs)
        game.push(inputs)//esto agrega el juego en el arary de juegos creados asi puedo hacer el filtro
        alert(`${inputs.name} create succesfully`)
    }

    return(
    <DivStyle>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <label>Name</label>
            <input type='text' name='name' onChange={(e) => handleChange(e)}/>

            <label>Description</label>
            <textarea name='description' onChange={(e) => handleChange(e)}/>

            <label>Released</label>
            <input type='date' name='released' onChange={(e) => handleChange(e)}/>

            <label>Rating</label>
            <input type='number' name='rating' onChange={(e) => handleChange(e)}/>

            <label>Generos</label>
            <select name='genres' onChange={(e) => handleGen(e)}>
            {
                generos && generos.map((g,id) => {
                    return <option key={id}>
                        {`${g.id} - ${g.nombre}`}
                    </option>
                })
            }
            </select>
            <label>Platforms</label>
            <select name='platforms' onChange={(e) => handleChange(e)}>
                {
                    plataformas && plataformas.map((p,id) => {
                        return <option key={id}>
                            {p}
                        </option>
                    })
                }   
            </select>
            <label>Image</label>
            <input type="file" name='image'/>
        
        <button type='submit'>Create</button>
        </form>
    </DivStyle>
    )
}

export default Create;