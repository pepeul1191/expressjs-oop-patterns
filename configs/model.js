const sequelize = require('./database');

class Model 
{
  constructor(req, res) 
  {
    this.db = sequelize;
  }
}

module.exports = Model;