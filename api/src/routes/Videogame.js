const app = require('express').Router();
const axios = require('axios');
const {API_KEY} = process.env;
const {Videogame, Genero} = require('../db')

const juegos = async (id) => {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=d0a01e72cc1f4ca5960a25de3434ea0d`);
    const js = response.data;
    return js;
}

app.get('/:idVideogame', async function(req, res){
    const {idVideogame} = req.params;
    
    try 
    {
        const game = await juegos(idVideogame)

        res.json(game)
    } 
    catch (error) {
        res.status(404).send('El id ingresado no es valido')
    }
});

app.post('/', async function(req, res){
    const {nombre, descripcion, rating, fechaDeLanzamiento, plataformas} = req.body;

    try 
    {
        const game = await Videogame.findOrCreate({
            where:{
            nombre,
            descripcion,
            fechaDeLanzamiento,
            rating,
            plataformas,
            }
        })
    } 
    catch (error) {
        console.log(error);
    }

    res.send('Creado Correctamente')
});

module.exports = app;