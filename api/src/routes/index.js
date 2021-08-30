const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genero = require('./Genero')
const videogames = require('./Videogames')
const videogame = require('./Videogame')
const router = Router();
const axios = require('axios');
const {Videogame, Genero} = require('../db');

// Configurar los routers
router.use('/videogames', videogames);
router.use('/videogame', videogame);//este es del post
router.use('/genres', genero);


// router.get('/prueba', async (req, res) => 
// {
//     // var vg = await Videogame.findAll({
//     //     include: Genero
//     // })

//     // vg = JSON.stringify(vg)
//     // vg = JSON.parse(vg)

//     // vg = vg.reduce((previous, current) => 
//     // {
//     //     previous.concat({
//     //         ...current,
//     //         genres: current.genres.map((item) => item.name)
//     //     })
//     // }, [])

//         try{
//             let games = []

//             let response = await axios.get(`https://api.rawg.io/api/games?key=d0a01e72cc1f4ca5960a25de3434ea0d`);
//             response.data.results = response.data.results.map((item) => {
//                 games.push(item)
//             })

//             games.map(async juego => await Videogame.findOrCreate({
//                 where:{
//                     nombre: juego.name,
//                     descripcion: juego.description,
//                     fechaDeLanzamiento:juego.released,
//                     rating: juego.rating,
//                     plataformas: juego.platforms,
//                     },
//                     defaults:{
//                         descripcion: 'empty',
//                         plataformas:[],
//                     }
//                 }))                   

//             return res.json(games);
    
//         } catch(error){
//             return console.log(error)
//         }
    
// });



router.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});

module.exports = router;
