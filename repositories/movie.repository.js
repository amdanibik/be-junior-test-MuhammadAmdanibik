const { Movie, Cast, MovieCast, Sequelize } = require('../models')
const { Op } = require('sequelize')

class MovieRepository {
    static async getMovieQuery(name) {
        return await Movie.findAll({
            attributes: { exclude: [ 'updatedAt', 'createdAt' ] },
            include: [
                {
                    model: MovieCast,
                    attributes: { exclude: [ 'updatedAt', 'createdAt', 'cast_id', 'movie_id' ] },
                    required: true,
                    include: [
                        {
                            model: Cast,
                            attributes: { exclude: [ 'updatedAt', 'createdAt' ] },
                            required: true
                        }
                    ]
                }
            ],
            where: {
                [Op.and]: [
                    Sequelize.where(
                        Sequelize.fn('lower', Sequelize.col('Movie.name')),
                        {
                          [Op.like]: `%${name || ''}%`
                        }
                      )
                ]
            }
        })
    }
}

module.exports = MovieRepository