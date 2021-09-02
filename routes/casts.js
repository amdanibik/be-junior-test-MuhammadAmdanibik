const router = require('express').Router();

const Movie = require('../models/Movie');
const MovieCast = require('../models/MovieCast');
const Cast = require('../models/Cast');

Movie.hasMany(MovieCast, { 
    as: '_connection',
    foreignKey: 'movie_id'
});
MovieCast.belongsTo(Movie, {
    as: '_movies',
    foreignKey: 'movie_id'
});
Cast.hasOne(MovieCast, {
    as: '_connection',
    foreignKey: 'cast_id'
});
MovieCast.belongsTo(Cast, {
    as: '_casts',
    foreignKey: 'cast_id'
})

router.get('/', async (req, res) => {
    const cast = await Cast.findAll({
        include: [{
            model: MovieCast,
            attributes: ['movie_id'],
            as: 'connection',
            include: [
                {
                    model: Movie,
                    as: 'movies'
                }
            ]
        }]
    })
    const data = []
    cast.forEach(e => {
        const { id, name, birthday, deadday, rating } = e
        const x = {
            id, name, birthday, deadday, rating,
            movie_id: e.connection.movie_id,
            movie_name: e.connection.movies.name
        }
        data.push(x)
    });
    res.send(data);
})

router.post('/', async (req, res) => {
    const { name, birthday, deadday, rating } = req.body;
    const newCast = Cast.create({
        name, birthday, deadday, rating
    })
    try {
        await newCast.save();
        res.send({
            cast: name,
            message: "cast berhasil disimpan"
        });
    } catch(err) {
        res.send(err);
    }
    
})

module.exports = router;