const express = require('express');
const app = express();
const port = 3000;

app.get('/*', (req, res) => {
  const path = req.path.split('/');
  const controlador = path[1];
  const metodo = path[2];
  const archivo = './controllers/' + controlador + '_controller.js';
  require(archivo);
  const instaciaControllador = controlador.charAt(0).toUpperCase() + controlador.slice(1) + 'Controller';
  const instancia = eval(`new ${instaciaControllador}(${req}, ${res})`);
  instancia[metodo]();
  res.send('¡Hola mundo!');
});

app.get('/hola', (req, res) => {
  res.send('¡Hola mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});