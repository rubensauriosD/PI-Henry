const app = require('express').Router();
const axios = require('axios');
const {API_KEY} = process.env;
const {Videogame, Genero} = require('../db')

app.get('/:idVideogame', async function(req, res){
    const {idVideogame} = req.params;
    
    try 
    {
        const gam = await Videogame.findByPk(idVideogame);
        res.json(gam)
    } 
    catch (error) {
        res.status(404).send('Juego no encontrado')
    }
    
});


app.post('/', async function(req, res){
    const {name, description, released, rating, platforms, genres}  = req.body;

    try 
    {
        const game = await Videogame.create({
            name: name, 
            description: description,
            released:released,
            rating:rating,
            platforms:platforms     
        })

        await game.setGeneros(genres)//para crear paso el id de genero
        res.json(game)
    } 
    catch (error) {
        console.log(error);
    }

    // res.send('Creado Correctamente')
});

module.exports = app;