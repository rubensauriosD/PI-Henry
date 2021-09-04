import Cards from './Cards/Cards';
import Filter from './Filter-Order/Filter'
import Order from './Filter-Order/Order';
import DivStyle from './style'


function Home() {
    return(
        <DivStyle>
            <input type='text'/>
            <button>Search 🔍</button>
            <div className='utils'>   
                <Filter/>
                <Order/>
            </div>
            <div>
                <Cards/>
            </div>
        </DivStyle>
    )
}

export default Home;
