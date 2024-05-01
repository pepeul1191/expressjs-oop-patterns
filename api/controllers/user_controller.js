const ApplicationController = require('../../configs/application_controller');

class UserController extends ApplicationController
{
  constructor(req, res) 
  {
    super(req, res);
  }

  index() {
    this.res.send('user/index');
  }
}

module.exports = UserController;