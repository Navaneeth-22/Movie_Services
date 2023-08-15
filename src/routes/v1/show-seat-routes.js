const express = require('express');
const router = express.Router();
const {ShowSeatController} = require('../../controllers');

router.get('/status', ShowSeatController.getShowSeatsFiltered);
router.get('/:showId', ShowSeatController.getShowSeats);
router.post('/', ShowSeatController.createShowSeats);
router.patch('/status', ShowSeatController.updateShowSeats);

module.exports = router;