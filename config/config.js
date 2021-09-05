
let env = process.env.NODE_ENV || 'development'
env = env.toUpperCase()


if(env !== "PRODUCTION") require('dotenv').config()


const username = process.env[`DB_USERNAME_${env}`],
      password = process.env[`DB_PASSWORD_${env}`],
      database = process.env[`DB_DATABASE_${env}`],
      host     = process.env[`DB_HOST_${env}`],
      dialect  = process.env[`DB_DIALECT_${env}`]


module.exports = {
  "development": {
    username,
    password,
    database,
    host,
    dialect
  },
  "test": {
    username,
    password,
    database,
    host,
    dialect
  },
  "production": {
    username,
    password,
    database,
    host,
    dialect
  }
}

