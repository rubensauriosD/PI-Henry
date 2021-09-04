const app = require('express').Router();
const axios = require('axios');
const {Videogame, Genero} = require('../db')
const {API_KEY} = process.env;
const { Op } = require('sequelize');

//========FUNCIONES 
const juegos = async () => {
    const response = await axios.get(`https://api.rawg.io/api/games?&key=${API_KEY}&page_size=20`);
    const js = response.data;
    return js;
}

const allgames = async () => {
    var games = await juegos()
    games = games.results

    let x = Videogame.findAll()
    
    if (!x.length) 
    {
        games = games.map(g => {
            if (!g.description) g.description = 'empty';
            return{
                name: g.name, 
                description: g.description,
                released:g.released,
                rating:g.rating,
                platforms:g.platforms,
                image:g.background_image,
                gender:g.genres
            }
        })
        
        const setObj = new Set(); 

        const unicos = games.reduce((acumulador, g) =>{
            if (!setObj.has(g.name)) 
            {
                setObj.add(g.name, g)
                acumulador.push(g)
            }
            return acumulador;
        }, []);

        await Videogame.bulkCreate(unicos);
    }

    x = await Videogame.findAll({
        include: Genero
    })

    return x;
}

const gamesname = async (name) => {
    let res = Videogame.findAll({
        where:{
            name:{[Op.substring]: name}
        }
    })

    return res;
}

//========RUTAS
app.get('/', async function(req, res){
    //aca hago tambien el de ?name solo q validando si lo trae o no
    const {name} = req.query;

    if (!name) 
    {
        try 
        {
            const all = await allgames()
            res.json(all)
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
            const allnames = await gamesname(name)//fijarme como hacer para que ignore las mayus

            // const resultado = allnames.slice(1,15)

            res.json(allnames)
        } 
        catch (error) {
            return res.status(404).send('El videojuego que esta intentando buscar no existe.')
        }
    }
});

module.exports = app;
