const express = require('express');
const router = express.Router();
const {ShowController} = require('../../controllers');

router.get('/', ShowController.getShows);
router.post('/', ShowController.createShow);

module.exports = router;