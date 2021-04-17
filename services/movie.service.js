const MovieRepository = require("../repositories/movie.repository")

class MovieService {
    static async getMovieService(_, res, next) {
        try {
            const movies = await MovieRepository.getMovieQuery()
            return res.status(200).json({
                status: 'OK',
                data: movies
            })
        } catch (err) {
            return next(err)
        }
    }
}

module.exports = MovieService