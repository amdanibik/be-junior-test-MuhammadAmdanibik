require('dotenv').config()

const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const cors = require('cors')
const routers = require('./routers')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const errorHandler = require('./middlewares/handler.error.middleware')
const swaggerOptions = require('./config/swagger.config')
const specs = swaggerJsDoc(swaggerOptions)
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const assignReqId = require('./middlewares/assignReqId.middleware')

morgan.token('id', function getId (req) {
    return req.id
  })
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
app.use(cors())
app.use(assignReqId)
app.use(morgan(':id :remote-addr - :remote-user :method :url :response-time ms ":user-agent"', { stream: accessLogStream }))
app.use(express.urlencoded({ extended: true }))
app.use(routers)
app.use(errorHandler)

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`I Love U ${PORT}`);
})