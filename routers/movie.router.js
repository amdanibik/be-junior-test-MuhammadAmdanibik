const router = require('express').Router()
const MovieController = require('../controllers/movie.controller')

/**
 * @swagger
 * components:
 *  schemas:
 *      Movie: 
 *          type: object
 *          required:
 *              - name
 *              - language
 *              - status
 *              - rating
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto-increment
 *              name:
 *                  type: string
 *                  description: movie's name
 *              language:
 *                  type: string
 *                  description: movie's language
 *              status:
 *                  type: string
 *                  description: movie's screenings status
 *              rating:
 *                  type: integer
 *                  description: movie's quality rating
 *          example:
 *              id: 1
 *              name: Warkop DKI
 *              language: indonesia
 *              status: ongoing
 *              rating: 5
 */


 /**
  * @swagger
  * tags:
  *   name: Movies
  *   description: The Movies data API
  */


 /**
 * @swagger
 * /Movies:
 *   get:
 *     summary: Returns the list of all the movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: The list of the movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */

router.get('/', MovieController.getMovie)

module.exports = router