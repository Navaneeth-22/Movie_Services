const express = require('express');
const router = express.Router();

const {CityController} = require('../../controllers');

router.get('/', CityController.getCities);
router.post('/', CityController.createCity);
router.put('/:id', CityController.updateCity);

module.exports = router;