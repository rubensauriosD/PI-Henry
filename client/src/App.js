import './App.css';
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import inicial from './componentes/PagInicial/inicial.js';
import Home from './componentes/Home/Home.js'
import Nav from './componentes/Nav/Nav.js'
import Create from './componentes/Create/Create'
import Videogame from './componentes/VideoGame/VideoGame'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={inicial}></Route>
      <Route path={["/home", "/videogame/:id", "/create"]} component={Nav}></Route>
      <Route path='/home' component={Home}></Route>
      <Route path='/create' component={Create}></Route>
      <Route path='/videogame/:id' component={Videogame}></Route>
    </div>
  );
}

export default App;
