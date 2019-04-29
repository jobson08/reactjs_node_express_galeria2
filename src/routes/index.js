const { Router } = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.send('Galeria de imagens com sNodejs com Reactjs')
});

module.exports = router;