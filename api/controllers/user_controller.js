class UserController 
{
  constructor(req, res) 
  {
    this.req = req;
    this.res = res;
    console.log(':)')
  }

  index() {
    console.log('index')
    this.res.send('Home');
  }
}

module.exports = UserController;