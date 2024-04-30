const bootstrap = (req, res) => {
  const pathUrl = req.path.split('/');
  // check if static content
  const staticExtensions = ['.ico', '.png', '.css', '.js'];
  const isStatic = staticExtensions.some(item => pathUrl[pathUrl.length - 1].endsWith(item));
  console.log('1 +++++++++++++++++++++++++++++++++++++')
  console.log(isStatic)
  console.log('2 +++++++++++++++++++++++++++++++++++++')
  if (!isStatic){
    const controlador = pathUrl[1];
    const metodo = pathUrl[2];
    const archivo = './controllers/' + controlador + '_controller.js';
    require(archivo);
    const instaciaControllador = controlador.charAt(0).toUpperCase() + controlador.slice(1) + 'Controller';
    const instancia = eval(`new ${instaciaControllador}(${req}, ${res})`);
    instancia[metodo]();
    res.send('¡Hola mundo!');
  }
};

module.exports = bootstrap;