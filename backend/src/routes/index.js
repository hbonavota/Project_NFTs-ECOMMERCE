const { Router } = require('express');
const axios = require('axios')
const router = Router();
const auth = require('../controllers/user/auth.js');
const passport = require('passport');
const {isLoggedIn} = require('../controllers/user/isLoggedIn')
const {protected} = require('../controllers/apiGoogle/protected')


const { connectWallet } = require('../controllers/crypto/connectWallet.routes') 
const isAuthenticated = require('./isAuthenticated.js')
const googleCallback = require('./googleCallback');
const authFailure = require('./authFailure');
const { pinDirectoryToIPFS } = require('../controllers/products/CDI-IPFS') 
const { createProduct, getProducts, getProductById, updateProductById, deleteProductById } = require('../controllers/products/products')

// Routes      
//router.get('/connect', connectWallet)
router.get('/connect', connectWallet)
router.post('/cdi', pinDirectoryToIPFS)
router.post('/nft', createProduct)
router.get('/nft', getProducts)
// router.get('/nft', getProductById)
// router.put('/nft', updateProductById)
// router.delete('/nft', deleteProductById)
router.use('/auth/google',isAuthenticated)
router.use('/google/callback',googleCallback)
router.use('/auth/failure', authFailure)
router.use('/protected', isLoggedIn, protected)

module.exports = router ;