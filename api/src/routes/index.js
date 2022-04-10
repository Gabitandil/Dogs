const { Router } = require('express');
const Dogs = require('./dogs')
const Create = require('./create')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use('/', Dogs);
 router.use('/create', Create)
module.exports = router;
