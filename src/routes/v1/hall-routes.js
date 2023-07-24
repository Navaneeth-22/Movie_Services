const express = require('express');
const router = express.Router();

const {HallController} = require('../../controllers');

router.get('/', HallController.getHalls);
router.post('/', HallController.createHall);
router.put('/:id', HallController.updateHall);
router.delete('/:id', HallController.deleteHall);
router.post('/:id/seats', HallController.addSeats);
router.get('/:id/seats', HallController.getSeats);
router.get('/:id/seats/:seatId', HallController.getSeat);
router.put('/:id/seats/:seatId', HallController.updateSeat);

module.exports = router;
