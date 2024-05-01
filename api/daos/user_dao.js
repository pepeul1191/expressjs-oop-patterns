const Model = require('../../configs/model');
const User = require('../entities/user');

class UserDao extends Model
{
  constructor() 
  {
    super();
    this.list = [];
  }

  async fetchAll() {
    const data = await this.db.query('SELECT * FROM users;', {});
    data[0].forEach(row => {
      const user = new User(row['id'], row['user']);
      this.list.push(user);
    });
  }

  toJSON(){
    var listJSON = [];
    this.list.forEach(user => {
      listJSON.push({
        id: user.id,
        user: user.user,
      });
    })
    return listJSON;
  }
}

module.exports = UserDao;