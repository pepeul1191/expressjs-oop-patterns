const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/app.db',
  define: {
    timestamps: false // true by default
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;