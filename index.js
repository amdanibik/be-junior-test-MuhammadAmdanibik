require('dotenv').config()

const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const cors = require('cors')
const routers = require('./routers')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(routers)
app.use(errorHandler)

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`I Love U ${PORT}`);
})