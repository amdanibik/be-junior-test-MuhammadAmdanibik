const router = require('express').Router()
const CastController = require('../controllers/cast.controller')

/**
 * @swagger
 * components:
 *  schemas:
 *      Cast: 
 *          type: object
 *          required:
 *              - name
 *              - birthday
 *              - deadday
 *              - rating
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto-increment
 *              name:
 *                  type: string
 *                  description: cast's name
 *              birthday:
 *                  type: string
 *                  description: cast's birthday
 *              deadday:
 *                  type: string
 *                  description: cast's deadday
 *              rating:
 *                  type: integer
 *                  description: cast's quality rating
 *          example:
 *              id: 1
 *              name: Indro
 *              birthday: 1967-10-21
 *              deadday: 2010-11-12
 *              rating: 5
 */

 /**
  * @swagger
  * tags:
  *   name: Casts
  *   description: The Casts data API
  */


 /**
 * @swagger
 * /Casts:
 *   get:
 *     summary: Returns the list of all the casts
 *     tags: [Casts]
 *     responses:
 *       200:
 *         description: The list of the casts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cast'
 */
router.get('/', CastController.getCast)

module.exports = router