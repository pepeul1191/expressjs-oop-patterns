const express = require('express');
const path = require('path');
const bootstrap = require('./configs/bootstrap');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'ejs');

app.get('/*', (req, res) => {
  try {
    // Bloque de código donde puede ocurrir un error
    bootstrap(req, res);
  } catch (error) {
    console.error(error);
  }
});

app.get('/hola', (req, res) => {
  res.send('¡Hola mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});