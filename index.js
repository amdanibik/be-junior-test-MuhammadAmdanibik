require('dotenv').config()

const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const cors = require('cors')
const routers = require('./routers')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerOptions = require('./config/swagger.config')
const specs = swaggerJsDoc(swaggerOptions)
const errorHandler = require('./middlewares/handlerError.middleware')
const assignReqId = require('./middlewares/assignReqId.middleware')
const { morgan, formatLog, logStream } = require('./middlewares/logger.middleware')

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
app.use(cors())
app.use(assignReqId)
app.use(morgan(formatLog, logStream))
app.use(express.urlencoded({ extended: true }))
app.use(routers)
app.use(errorHandler)

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`I Love U ${PORT}`);
})