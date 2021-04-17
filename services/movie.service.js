const MovieRepository = require("../repositories/movie.repository")

class MovieService {
    static getMovieService() {
        return new Promise(async (resolve, rejects) => {
            try {
                const movies = await MovieRepository.getMovieQuery()
                return resolve(movies)
            } catch (err) {
                return rejects(err)
            }
        })

    }
}

module.exports = MovieService