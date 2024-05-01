const ApplicationController = require('../../configs/application_controller');
const UserDao = require('../daos/user_dao');

class UserController extends ApplicationController
{
  constructor(req, res) 
  {
    super(req, res);
    this.userDao = new UserDao();
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

  async list_dao()
  {
    await this.userDao.fetchAll();
    this.res.send(this.userDao.toJSON());
  }
}

module.exports = UserController;