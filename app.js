
/* eslint-env node */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem vindos ao WebAcademy!! Fazendo o deploy na google cloud. Quando não é uma coisa e outra');
});

app.listen(8080, () => {
  console.log('Rodando na porta 8080');
});
