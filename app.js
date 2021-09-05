if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
const PORT = +process.env.NODE_ENV || 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/',(req,res) => {
    res.send("hello world  ")
})

app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`)
})