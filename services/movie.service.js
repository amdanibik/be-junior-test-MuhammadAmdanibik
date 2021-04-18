const MovieRepository = require("../repositories/movie.repository")

class MovieService {
    static getMovieService(name) {
        return new Promise(async (resolve, rejects) => {
            try {
                const movies = await MovieRepository.getMovieQuery(name)
                return resolve(movies)
            } catch (err) {
                console.log(err);
                return rejects(err)
            }
        })

    }
}

module.exports = MovieService