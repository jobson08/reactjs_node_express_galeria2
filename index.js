const express = require('express');
const morgan = require('morgan');
//const bodyParser = require('body-parser');



const app = express();

//Sentings
const port = process.env.PORT || 4000;


//Middlewares
app.use(morgan('dev'));
//app.use(bodyParser.json());


//Routes
//app.use(require('./routes'));
app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Projeto React nodejs com express' });
});


//starta o sevidor
app.listen(port, () => console.log(`Sevidor na porta ${port}`));