const express = require('express');
const Sequelize = require('sequelize');

const movieRoutes = require('./routes/movies');
const castRoutes = require('./routes/casts');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('halo'));
app.use('/movie', movieRoutes);
app.use('/cast', castRoutes);

const sequelize = new Sequelize('moviedb', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});
try{
    sequelize.authenticate().then(console.log('success'));
} catch(err) {
    console.error('Unable to connect to the database:', err);
}

app.listen(process.env.PORT || 8080, () => console.log("im working"));