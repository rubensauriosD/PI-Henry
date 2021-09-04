import {DivStyle} from "./style";

function Vg({id, name, genres, image, rating, platforms}) 
{
    return(
        <DivStyle>
            <div className='conteiner'>
                <h1>{name}</h1>
                <img src={image} alt={name}/>
                <h2>Rating</h2>
                <p>{rating} 📈</p>
                <h2>Generos</h2>
                <ul>
                    {
                        genres && genres.map((g,id) => {
                            return <li key={id}>{g.name}</li>
                        })
                    }
                </ul> 
                <h2>Plataformas</h2>
                <ul>
                    {
                        platforms && platforms.map((g,id) =>{
                            return <li key={id}>{g.platform.name}</li>
                        })
                    }
                </ul>
            </div>
        </DivStyle>
    )
}

export default Vg;