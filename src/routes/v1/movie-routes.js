const express = require('express');
const router = express.Router();

const {MovieController} = require('../../controllers');

router.get('/', MovieController.getMovies);
router.post('/', MovieController.createMovie);
router.post('/:id/cinemas', MovieController.addCinema);
module.exports = router;