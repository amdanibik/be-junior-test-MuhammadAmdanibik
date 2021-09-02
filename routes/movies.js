const router = require('express').Router();
const Movie = require('../models/Movie');
const MovieCast = require('../models/MovieCast');
const Cast = require('../models/Cast');

Movie.hasMany(MovieCast, { 
    as: 'connection',
    foreignKey: 'movie_id'
});
MovieCast.belongsTo(Movie, {
    as: 'movies',
    foreignKey: 'movie_id'
});
Cast.hasOne(MovieCast, {
    as: 'connection',
    foreignKey: 'cast_id'
});
MovieCast.belongsTo(Cast, {
    as: 'casts',
    foreignKey: 'cast_id'
})

router.get('/', async (req, res) => {
    const data = await Movie.findAll({
        include: [{
            model: MovieCast,
            attributes: ['cast_id'],
            as: 'connection',
            include: [
                {
                    model: Cast,
                    as: 'casts'
                }
            ]
        }]
    })
    const response = [];
    data.forEach(e => {
        const casts = [];
        e.connection.forEach(el => {
            const cast = {
                id: el.casts.id,
                name: el.casts.name,
                rating: el.casts.rating,
                birthday: el.casts.birthday,
                deadday: el.casts.deadday
            }
            casts.push(cast)
        });
        const x = {
            id: e.id,
            name: e.name,
            rating: e.rating,
            languge: e.language,
            status: e.status,
            casts: casts
        };
        response.push(x);
    })
    res.send(response)
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id, {
        include: [{
            model: MovieCast,
            attributes: ['cast_id'],
            as: 'connection',
            include: [
                {
                    model: Cast,
                    as: 'casts'
                }
            ]
        }]
    });
    const casts = [];
    movie.connection.forEach(el => {
        const cast = {
            id: el.casts.id,
            name: el.casts.name,
            rating: el.casts.rating,
            birthday: el.casts.birthday,
            deadday: el.casts.deadday
        }
        casts.push(cast)
    })
    const data = {
        id: movie.id,
        name: movie.name,
        rating: movie.rating,
        languge: movie.language,
        status: movie.status,
        casts: casts
    };
    res.send(data);
});


router.post('/', async (req, res) => {
    const { name, language, status, rating } = req.body;
    const newMovie = Movie.create({
        name, language, status, rating
    })
    try {
        await newMovie.save();
        res.send({
            film: name,
            message: "film berhasil disimpan"
        });
    } catch(err) {
        res.send(err);
    }
    
})

module.exports = router;