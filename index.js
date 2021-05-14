const express = require('express');
const bodyParser = require('body-parser')
const {Movie: MovieModel, Cast: CastModel} = require('./models');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send({
        status: 200,
        message: 'Hi, Welcome!'
    })
})

app.get('/movies', async (req, res) => {
      // make relation 1 : N, movie -> cast
  MovieModel.hasMany(CastModel, {
    foreignKey: 'movieId',
    sourceKey: 'id',
    as: 'casts'
  });

  CastModel.belongsTo(MovieModel, {
    foreignKey: 'movieId',
    sourceKey: 'id',
    as: 'casts'
  });

  const movies = await MovieModel.findAll({
      include: {
          model: CastModel,
          as: 'casts'
      }
  });

  res.send({
      status: 200,
      message: 'Success get all movies!',
      data: movies
  })
})

app.get('/casts', async (req, res) => {
    const casts = await CastModel.findAll();

    res.send({
        status: 200,
        message: 'Success get all casts',
        data: casts
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000!')
})