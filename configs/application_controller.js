const sequelize = require('./database');

class ApplicationController 
{
  constructor(req, res) 
  {
    if (new.target === ApplicationController) {
      throw new Error("No se puede instanciar ApplicationController");
    }else{
      this.req = req;
      this.res = res;
      this.db = sequelize;
    }
  }

  // Método abstracto
  index() 
  {
    throw new Error("El método 'index' debe ser implementado por las clases hijas.");
  }
}

module.exports = ApplicationController;