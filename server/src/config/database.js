const { Sequelize } = require('sequelize')

const path = require('path')

console.log()

/* Connect to database */
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `${path.join(__dirname, '../', '../', '../', 'database')}/data.sqlite`,
  logging: false,
})

/* Test Connection */
sequelize
  .authenticate()
  .then(console.log('Database connected...'))
  .catch(error => console.error(error))

module.exports = sequelize
