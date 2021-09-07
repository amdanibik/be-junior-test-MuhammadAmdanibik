const { Router } = require("express");
const models = require("../models");

const router = Router();

const returnData = {
  message: "",
  data: [],
  success: "",
};

// Find All Casts
router.get("/", async (req, res, next) => {
  try {
    await models.Cast.findAll({
        attributes: ["name", "birthdate", "deadday", "rating"],
    })
      .then((data) => {
        if (data.length) {
          returnData.message = "Casts successfully displayed.";
          returnData.data = data;
          returnData.success = 1;
        } else {
          returnData.message = "Casts not found.";
        }

        res.send(returnData);
      })
      .catch((error) => {
        returnData.message =
          error.message || "Some error occured while retrieving Casts.";

        res.send(returnData);
      });
  } catch (error) {
    next(error);
  }
});

// Find Cast by ID
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await models.Cast.findByPk(id, {
        attributes: ["name", "birthdate", "deadday", "rating"],
    })
      .then((data) => {
        if (data) {
          returnData.message = "Cast successfully displayed.";
          returnData.data = data;
          returnData.success = 1;
        } else {
          returnData.message = "Cast not found.";
        }

        res.send(returnData);
      })
      .catch((error) => {
        returnData.message =
          error.message || "Some error occured while retrieving Cast.";

        res.send(returnData);
      });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await models.Cast.create({
      name: req.body.name,
      birthdate: new Date(req.body.birthdate),
      deadday: new Date(req.body.deadday),
      rating: req.body.rating,
    })
      .then((data) => {
        returnData.data = data;
        returnData.message = "Cast created succesfully.";
        returnData.success = 1;

        res.send(returnData);
      })
      .catch((error) => {
        returnData.message =
          error.message || "Some error occured while creating Cast.";

        res.send(returnData);
      });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await models.Cast.update(req.body, { where: { id: id } })
      .then(num => {
        if (num == 1) {
          returnData.message = "Cast successfully updated.";
          returnData.success = 1;

          res.send(returnData)
        } else {
          returnData.message = "Some error occured while updating a Cast";
          
          res.send(returnData);
        }
      })
      .catch((error) => {
        returnData.message =
          error.message || "Some error occured while updating a Cast.";

        res.send(returnData);
      });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await models.Cast.destroy({ where: { id: id } })
      .then((num) => {
        if (num == 1) {
          returnData.message = "Cast deleted successfully.";
          returnData.success = 1;
        } else {
          returnData.message = "Some error occured while deleting a Cast.";
        }

        res.send(returnData);
      })
      .catch((error) => {
        returnData.message =
          error.message || "Some error occured while deleting a Cast";

        res.send(returnData);
      });
  } catch (error) {
    next(error);
  }
});

module.exports = router;