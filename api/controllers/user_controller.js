const ApplicationController = require('../../configs/application_controller');

class UserController extends ApplicationController
{
  constructor(req, res) 
  {
    super(req, res);
  }

  index() 
  {
    this.res.send('user/index');
  }

  list()
  {
    this.db.query("SELECT * FROM users;", { })
      .then(users => {
        this.res.send(JSON.stringify(users));
      })
      .catch(error => {
        console.error('Error:', error);
        this.res.status(500).send({message: error.message, stack: error.stack});
      });
  }
}

module.exports = UserController;