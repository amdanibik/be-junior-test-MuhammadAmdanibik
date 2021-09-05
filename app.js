if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express()
const PORT = +process.env.NODE_ENV || 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)


app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`)
})