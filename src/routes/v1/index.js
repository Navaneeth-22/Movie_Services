const express = require('express');
const {InfoController} = require("../../controllers")
const hallRoutes = require("./hall-routes");
const router = express.Router();

router.use("/halls",hallRoutes);
router.get("/info",InfoController.info);


module.exports = router;