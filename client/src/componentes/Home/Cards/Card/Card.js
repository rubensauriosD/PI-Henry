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
                        // typeof gender == 'string' && typeof genres =='number' ? <li key={genres.id}> {gender}</li>
                        // :
                        gender?<li>{gender}</li>
                        :
                        genres.length >= 1 && genres.map((g,id) =>{
                            return <li key={id}>{g.name}</li>
                        })
                        // :
                        // typeof genres == 'number' ? <li key={genres.id}> {gender}</li>
                        // :
                        // <li key={genres.id}>{genres.nombre}</li>
                    }
                </ul>
            </div>
        </DivStyle>
    )
}

export default Card;