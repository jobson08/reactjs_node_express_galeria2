const { Router } = require('express');
const router = Router();

router.get('/api', (req, res) => {
  res.send({ express: 'Api para o projeto' });
});

router.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Projeto React nodejs com express' });
  });


module.exports = router;