const { Router } = require('express');
const { googleCallback } = require('../controllers/apiGoogle/googleCallback')
const router = Router();

router.get('/', googleCallback)

module.exports = router;
