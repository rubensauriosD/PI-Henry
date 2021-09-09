import DivStyle from "./style";
import {NavLink} from 'react-router-dom';

function Card({id, name, genres, image, gender}) {
    return(
        <DivStyle>
            <div className='conteiner'>
                <img src={image} alt={name}/>
                    <NavLink className='link' to={`/videogame/${id}`}>
                    <h3>{name}</h3>
                    </NavLink>
                    <h4>Generos</h4>
                    <ul>
                    {    
                        // gender.length >= 1 ? gender.map((g,id) =>{
                        //     return <li key={id}>{g.name}</li>
                        // })                            
                        // :                
                        gender ? <li>{gender}</li>
                        :
                        genres.length >= 1 && genres.map((g,id) =>{
                            return <li key={id}>{g.name}</li>
                        })
                    }
                </ul>
            </div>
        </DivStyle>
    )
}

export default Card;