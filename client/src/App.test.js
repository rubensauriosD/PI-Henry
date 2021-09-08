import { render, screen } from '@testing-library/react';
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import store from './store/index'
import Card from './componentes/Home/Cards/Card/Card';
import Order from './componentes/Home/Filter-Order/Order'

  const vg = {
    id: 1,
    name: "lol",
    image: "Link",
    genres:['action', 'terror']
  }
describe("Order VideoGame By Name ASC and DESC", () => {
  it("It has one element to order from A to Z called ASCENDING and from Z to A DESCENDING", () => {
    render(
      <Provider store={store}>
        <Router>
          <Order />
        </Router>
      </Provider>
    );
    const asc = screen.getByText("Ascending");
    const desc = screen.getByText("Descending");
    expect(asc).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });
  it("Cards component shows videogames info", () => {
    render(
      <Provider store={store}>
        <Router>
        <Card id={vg.id} name={vg.name} genres={vg.genres} image={vg.image}/>
        </Router>
      </Provider>
    );
    const Name = screen.getByText("lol")
    expect(Name).toBeInTheDocument();
  })
});