const { Router } = require("express");
const models = require("../models");

const router = Router();

const returnData = {
  message: "",
  data: [],
  success: "",
};

// Find All Movies
router.get("/", async (req, res, next) => {
  try {
    await models.Movie.findAll({
      attributes: ["name", "language", "status", "rating"],
      include: [
        {
          as: "casts",
          model: models.Cast,
          attributes: ["name", "birthdate", "deadday", "rating"],
          through: {
            attributes: [],
          },
        },
      ],
    })
      .then((data) => {
        if (data.length) {
          returnData.message = "Movies successfully displayed.";
          returnData.data = data;
          returnData.success = 1;
        } else {
          returnData.message = "Movies not found.";
        }

        res.send(returnData);
      })
      .catch((error) => {
        returnData.message =
          error.message || "Some error occured while retrieving Movies.";

        res.send(returnData);
      });
  } catch (error) {
    next(error);
  }
});

// Find Movie by ID
router.get('/:id', async(req, res, next) => {
    const id = req.params.id

    try {
        await models.Movie.findByPk(id, {
          attributes: ["name", "language", "status", "rating"],
          include: [
            {
              as: "casts",
              model: models.Cast,
              attributes: ["name", "birthdate", "deadday", "rating"],
              through: {
                attributes: [],
              },
            },
          ],
        })
          .then((data) => {
            if (data) {
              returnData.message = "Movies successfully displayed.";
              returnData.data = data;
              returnData.success = 1;
            } else {
              returnData.message = "Movies not found.";
            }

            res.send(returnData);
          })
          .catch((error) => {
            returnData.message =
              error.message || "Some error occured while retrieving Movies.";

            res.send(returnData);
          });
    } catch(error) {
        next(error)
    }
})

router.post('/', async(req, res, next) => {
    const castArray = []
    
    try {
        if (!req.body.casts) {
            returnData.message = "Casts can not be empty."

            res.send(returnData)
        } else {
            req.body.casts.forEach(item => {
                const castRegex = /^[0-9]+$/.exec(item)

                if (!!castRegex) {
                    castArray.push(item)
                }
            })
        }
        
        await models.Movie.create({
            name: req.body.name,
            language: req.body.language,
            status: req.body.status,
            rating: req.body.rating
        }).then((data) => {
            castArray.forEach(item => {
                models.Cast.findByPk(item).then((dataCast) => {
                    if (dataCast) {
                        models.MovieCast.create({
                            movie_id: data.id,
                            cast_id: dataCast.id 
                        })
                    }
                })
            })
            
            returnData.data = data
            returnData.message = "Movie created succesfully."
            returnData.success = 1

            res.send(returnData)
        }).catch((error) => {
            returnData.message = error.message || "Some error occured while creating Movie."

            res.send(returnData)
        }) 
    } catch(error) {
        next(error)
    }
})

router.put('/:id', async(req, res, next) => {
    const id = req.params.id

    try {
        await models.Movie.update(
            req.body, 
            {where: {id: id}}
        ).then(num => {
            if (num == 1) {
                returnData.message = "Movie successfully updated."
                returnData.success = 1
            } else {
                returnData.message = "Some error occured while updating a Movie"
            }

            res.send(returnData)
        }).catch(error => {
            returnData.message = error.message || "Some error occured while updating a Movie."

            res.send(returnData)
        })
    } catch(error) {
        next(error)
    }
})

router.delete('/:id', async(req, res, next) => {
    const id = req.params.id
    
    try {
        await models.Movie.destroy(
            {where: {id: id}}
        ).then(num => {
            if (num == 1) {
                returnData.message = "Movie deleted successfully."
                returnData.success = 1

                models.MovieCast.destroy(
                    {where: {movie_id: id}
                })
            } else {
                returnData.message = "Some error occured while deleting a Movie."
            }

            res.send(returnData)
        }).catch(error => {
            returnData.message = error.message || "Some error occured while deleting a Movie"

            res.send(returnData)
        })
    } catch(error) {
        next(error)
    }
})

module.exports = router;