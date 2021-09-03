const { Router } = require('express');
const { protected } = require('../controllers/apiGoogle/protected')
const router = Router();

router.get('/', protected)

module.exports = router;
