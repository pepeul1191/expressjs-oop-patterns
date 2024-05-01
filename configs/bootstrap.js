const fs = require('fs');
const path = require('path');

const bootstrap = (req, res) => {
  const pathUrl = req.path.split('/');
  // check if static content
  const staticExtensions = ['.ico', '.png', '.css', '.js'];
  const isStatic = staticExtensions.some(item => pathUrl[pathUrl.length - 1].endsWith(item));
  // if not static, call controller and method, if they exist
  if (!isStatic){
    var controller = '';
    var method = '';
    var pathParams = [];
    // find controller and method from path
    if(pathUrl[1] == ''){
      controller = 'home';
      method = 'index';
    }else if(pathUrl.length == 2){
      controller = pathUrl[1];
      method = 'index';
    }else{
      controller = pathUrl[1];
      method = pathUrl[2];
      pathParams = pathUrl.slice(3);
    }
    // find 
    const controllerPath = `../api/controllers/${controller}_controller.js`;
    const absolutePath = path.resolve(__dirname, controllerPath);
    if (fs.existsSync(absolutePath)) {
      try {
        const modulePath = require.resolve(absolutePath); 
        const moduleExports = require(modulePath);
        //const controllerClassName = controller.charAt(0).toUpperCase() + controller.slice(1) + 'Controller';
        const instance = typeof moduleExports === 'function' ? new moduleExports(req, res) : moduleExports;
        instance[method]();
      } catch (error) {
        console.error(error);
        res.status(500).send({message: error.message, stack: error.stack});
      }
    } else {
      res.status(500).send('Controlador no existe');
    }
  }
};

module.exports = bootstrap;