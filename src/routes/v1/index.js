const express = require('express');
const {InfoController} = require("../../controllers")
const hallRoutes = require("./hall-routes");
const movieRoutes = require("./movie-routes");
const cinemaRoutes = require("./cinema-routes");
const cityRoutes = require("./city-routes");
const showRoutes = require("./show-routes");
const addressRoutes = require("./address-routes");
const showSeatRoutes = require("./show-seat-routes");

const router = express.Router();

router.use("/halls",hallRoutes);
router.use("/movies",movieRoutes);
router.use("/cinemas",cinemaRoutes);
router.use("/cities",cityRoutes);
router.use("/shows",showRoutes);
router.use('/address',addressRoutes);
router.use('/show-service',showSeatRoutes);
router.get("/info",InfoController.info);



module.exports = router;