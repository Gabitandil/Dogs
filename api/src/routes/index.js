const { Router } = require('express');
const Dogs = require('./dogs')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use('/', Dogs);

module.exports = router;
