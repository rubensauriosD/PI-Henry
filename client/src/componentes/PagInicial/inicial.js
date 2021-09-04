import {Link} from 'react-router-dom';
import DivStyle from './style'

function inicial(){
    return(
        <DivStyle>
            <h1 className='titulo'>App VideoGames</h1>
            <Link to='/home'>
                <button className='btn'>
                    Go Home
                </button>
            </Link>
        </DivStyle>
    )
}

export default inicial;