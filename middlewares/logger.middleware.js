const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../access.log'), { flags: 'a' })
const formatLog = ':id :remote-addr - :remote-user :date :method :url :response-time ms :status ":user-agent"'
const logStream = { stream: accessLogStream }

morgan.token('id', (req, res, next) => { return req.id })

module.exports = { morgan, formatLog, logStream }