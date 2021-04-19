require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.MYSQL_ROOT_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "logging": true
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
