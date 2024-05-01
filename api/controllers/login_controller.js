const ApplicationController = require('../../configs/application_controller');

class LoginController extends ApplicationController
{
  constructor(req, res) 
  {
    super(req, res);
  }

  index() 
  {
    this.res.send('login/index');
  }
}

module.exports = LoginController;