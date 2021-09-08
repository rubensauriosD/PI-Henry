/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame,Genero, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Naruto',
  description: 'game of ninjas with powers',
  released: "09/09/2009",
  rating: 10.0,
  platforms: [],
  image:"image",
  gender: [],
};
const genero = {
  name: 'Action'
};

describe('Videogame and Genero routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames/', () => {
    it('should get 200', () =>
      agent.get('/videogames/').expect(200)
    );
  });

  beforeEach(() => Genero.sync({ force: true })
    .then(() => Genero.create(genero)));
    describe('GET /genres', () => {
      it('should get 200', () =>
        agent.get('/genres').expect(200)
      );
    });
});

