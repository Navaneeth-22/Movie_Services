const express = require('express');
const router = express.Router();

const {AddressController} = require('../../controllers');
router.post('/', AddressController.createAddress);
router.put('/:id', AddressController.updateAddress);

module.exports = router;