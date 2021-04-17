const MovieService = require("../services/movie.service")

class MovieController {
    static async getMovie(req, res, next) {
        try {
            const result = await MovieService.getMovieService()
            return res.status(200).json({
                status: 'OK',
                data: result
            })
        } catch (err) {
            return next(err)
        }
    }
}

module.exports = MovieController