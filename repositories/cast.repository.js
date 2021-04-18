const { Movie, Cast, MovieCast, Sequelize } = require('../models')
const { Op } = require('sequelize')

class CastRepository {
    static async getCastQuery(name) {
        return await Cast.findAll({
            attributes: { exclude: [ 'updatedAt', 'createdAt' ] },
            include: [
                {
                    model: MovieCast,
                    required: true,
                    attributes: { exclude: [ 'updatedAt', 'createdAt', 'cast_id', 'movie_id' ] },
                    include: [
                        {
                            model: Movie,
                            attributes: { exclude: [ 'updatedAt', 'createdAt' ] },
                            required: true
                        }
                    ]
                }
            ],
            where: {
                [Op.and]: [
                    Sequelize.where(
                        Sequelize.fn('lower', Sequelize.col('Cast.name')),
                        {
                          [Op.like]: `%${name || ''}%`
                        }
                      )
                ]
            }
        })
    }
}

module.exports = CastRepository