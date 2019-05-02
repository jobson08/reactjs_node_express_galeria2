'use strict'

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.send('Sevidor rodando');
});


//Rotas
router.use('/', require('./mensagem'));
router.use('/', require('./imagens'));


module.exports = router;