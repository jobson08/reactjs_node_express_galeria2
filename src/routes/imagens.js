'use strict'

const { Router } = require('express');
const router = Router();

router.get('/imagens', (req, res) => {
    res.send({ express: 'Galeria de Imagens ' });
  });


module.exports = router;