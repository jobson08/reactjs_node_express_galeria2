'use strict'

const { Router } = require('express');
const router = Router();

router.get('/mensagem', (req, res) => {
    res.send({ express: 'Projeto React nodejs com express' });
  });


module.exports = router;