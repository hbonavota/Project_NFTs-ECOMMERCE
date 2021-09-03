const { Router } = require('express');
const { isAuthenticated } = require('../controllers/apiGoogle/isAuthenticated')
const router = Router();

router.get('/', isAuthenticated)

module.exports = router;
