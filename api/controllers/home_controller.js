class HomeController 
{
  constructor(req, res) 
  {
    this.req = req;
    this.res = res;
  }

  index() {
    console.log('index')
    this.res.render('home/index', { nombre: 'Mundo' });
  }
}

module.exports = HomeController;