const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Olá Mundo!' });
})

app.listen(3000, () => {
  console.log('🔥 Server started at http://localhost:3000');
});