const app = require('express').Router();
const axios = require('axios');
const {Videogame, Genero} = require('../db')
const {API_KEY} = process.env;

const juegos = async () => {
    const response = await axios.get(`https://api.rawg.io/api/games?&key=${API_KEY}&page_size=15`);
    const js = response.data;
    return js;
}

const juegosparafiltrar = async (name) => {
    const response = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
    const js = response.data;
    return js;
}

app.get('/', async function(req, res){
    //aca hago tambien el de ?name solo q validando si lo trae o no
    const {name} = req.query;

    if (!name) 
    {
        try 
        {
            
            const all = await juegos()
            let games= [...all.results]

            {// all.results.map(async (gam) => {
            //     const [games, created] = await Videogame.findOrCreate({
            //         where:{
            //             nombre : gam.name,
            //             descripcion: gam.description,
            //             fechaDeLanzamiento:gam.released,
            //             rating:gam.rating,
            //             plataformas: gam.platforms
            //         },
            //         attributes: { exclude: ['createdAt' , 'updatedAt']},
            //         include: Genero
            //     })
            // }}
            }
            
            res.json(games)
        } 
        catch (error) 
        {
            return res.status(500)
        }
    }
    else
    {
        try 
        {
            const all = await juegosparafiltrar(name)
            let games= [...all.results]
            // const gamesfiltrados = games.filter(g => g.name.toLowerCase().include(name.toLowerCase()))
            const resultado = games.slice(1,15)

            res.json(resultado)
        } 
        catch (error) {
            return res.status(404).send('El videojuego que esta intentando buscar no existe.')
        }
    }
});

module.exports = app;
