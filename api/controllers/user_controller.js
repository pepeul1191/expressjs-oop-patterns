class UserController 
{
  constructor(req, res) 
  {
    this.req = req;
    this.res = res;
  }

  index() {
    this.res.send('user/index');
  }
}

module.exports = UserController;