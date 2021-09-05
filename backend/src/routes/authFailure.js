const { Router } = require('express');
const { authFailure } = require('../controllers/apiGoogle/authFailure')
const router = Router();

router.get('/', authFailure)

module.exports = router;
