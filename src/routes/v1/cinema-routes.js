const express = require('express');
const router = express.Router();

const {CinemaController} = require('../../controllers');

router.get('/', CinemaController.getCinemas);
router.post('/', CinemaController.createCinema);
router.delete('/:id', CinemaController.deleteCinema);
router.post('/:id/movies', CinemaController.addMovie);

module.exports = router;