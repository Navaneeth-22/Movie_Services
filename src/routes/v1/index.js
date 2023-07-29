const express = require('express');
const {InfoController} = require("../../controllers")
const hallRoutes = require("./hall-routes");
const movieRoutes = require("./movie-routes");
const cinemaRoutes = require("./cinema-routes");
const cityRoutes = require("./city-routes");

const router = express.Router();

router.use("/halls",hallRoutes);
router.use("/movies",movieRoutes);
router.use("/cinemas",cinemaRoutes);
router.use("/cities",cityRoutes);
router.get("/info",InfoController.info);


module.exports = router;