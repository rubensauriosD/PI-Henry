const app = require('express').Router();
const axios = require('axios');
const {Genero} = require('../db')

const generos = async () => {
    const response = await axios.get(`https://api.rawg.io/api/games?key=d0a01e72cc1f4ca5960a25de3434ea0d`);
    const js = response.data.results;
    return js;
}

app.get('/', async function(req, res){

    const juegos = await generos()
    let gen = []
    const setObj = new Set(); 

    juegos.map((item) => {
        item.genres.map(g => gen.push(g))
    })

    const unicos = gen.reduce((acumulador, g) =>{
        if (!setObj.has(g.name)) 
        {
            setObj.add(g.name, g)
            acumulador.push(g)
        }
        return acumulador;
    }, []);

    try 
    {
        unicos.map(async g => {
            const genro = await Genero.findOrCreate({
                where:{
                nombre: g.name,
                }
            })
        })

        const all = await Genero.findAll();
        res.json(all)
    } 
    catch (error) {
        console.log(error);
    }
});

app.get('/platforms', async function(req, res){

    const juegos = await generos()
    var gen = [] 

    juegos.map((item) => {
        item.platforms.map(g => gen.push(g.platform.name))
    })

    gen = [...new Set(gen)];
    res.json(gen)
});

module.exports = app;