const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genero = require('./Genero')
const videogames = require('./Videogames')
const videogame = require('./Videogame')
const router = Router();

// Configurar los routers
router.use('/videogames', videogames);
router.use('/videogame', videogame);//este es del post
router.use('/genres', genero);

router.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});

module.exports = router;
