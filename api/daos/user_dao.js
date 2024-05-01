const Model = require('../../configs/model');
const User = require('../entities/user');

class UserDao extends Model
{
  constructor() 
  {
    super();
    this.list = [];
  }

  fetchAll() // List<User>
  {
    this.db.query("SELECT * FROM users;", { })
      .then(resultSet => {
        resultSet.forEach(row => {
          
          const user = new User(row['id'], row['user']);
          console.log(user);
          this.list.push(user);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  toJSON(){
    var listJSON = [];
    this.list.forEach(user => {
      listJSON.push({
        user: user.user,
        id: user.id
      });
    })
  }
}

module.exports = UserDao;