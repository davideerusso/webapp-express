const express = require("express");
const router = express.Router();
let { movies } = require("../data/movieConnection");
const moviesController = require("../controller/moviesController");

router.get("/", moviesController.index);

router.get("/:id", moviesController.show);
// router.post("/", moviesController.store);
// router.put("/:id", moviesController.update);
// router.delete("/:id", moviesController.destroy);

module.exports = router;
