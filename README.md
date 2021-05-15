# README #

This app is created using nestjs as node js framework.
Using TypeORM as Database mapping.
Using TypeScript as main language.

### API DOCS : ###

* MOVIE API :
     * GET
          * http://localhost:3000/movie : get All Movie Data 
          * http://localhost:3000/movie/id : get Movie Data By Id
     * POST
          * http://localhost:3000/movie
               * please set content-type header as application/json
               * send the body as raw json
               * param : name, language, status, rating
     * PATCH
          * http://localhost:3000/movie/ID
               * please set content-type header as application/json
               * send the body as raw json
     * DELETE
          * http://localhost:3000/movie/ID


* CAST API :
     * GET
          * http://localhost:3000/cast : get All Cast Data 
          * http://localhost:3000/cast/id : get Cast Data By Id
     * POST
          * http://localhost:3000/cast
               * please set content-type header as application/json
               * send the body as raw json
               * param : name, birthday, deadday, rating, movieId
     * PATCH
          * http://localhost:3000/cast/ID
               * please set content-type header as application/json
               * send the body as raw json
     * DELETE
          * http://localhost:3000/cast/ID


