const ApplicationController = require('../../configs/application_controller');

class HomeController extends ApplicationController
{
  constructor(req, res) 
  {
    super(req, res);
  }

  index() 
  {
    console.log('index')
    this.res.render('home/index', { nombre: 'Mundo' });
  }
}

module.exports = HomeController;