require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/setup');

// Connecting to Database
db.connectToDb();

// Connecting to Node JS Server and using additional CORS and URL Encoding package and other related packages for the project
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Listening to port for any incoming connections from the client computers(front end)
const PORT = process.env.PORT;
module.exports = app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});