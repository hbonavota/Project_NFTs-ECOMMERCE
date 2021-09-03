const { Router } = require('express');
const axios = require('axios')
const router = Router();
const auth = require('../controllers/user/auth.js');

function isLoggedIn(req,res,next){
    req.user? next() : res.sendStatus(401)
}
// Imports
// const { signUp } = require('../controllers/signUp')
const { connectWallet } = require('../controllers/payments/crypto/connectWallet.routes') 
const { createProduct, getProductsApi, getProductsDb, getProductById, updateProductById, deleteProductById } = require('../controllers/products/products')

// Routes      
router.get('/connect', connectWallet)
router.get('/nfts', getProductsApi)
router.get('/nft', getProductsDb)
router.get('/nft/:id', getProductById)
router.post('/nft', createProduct)
// router.put('/nft', updateProductById)
// router.delete('/nft', deleteProductById)

/* router.get('/auth/google',
passport.authenticate('google'), {scope:['email','profile']} ) 

router.get('/google/callback',
passport.authenticate('google',{
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
})
)

router.get('/auth/failure', (req,res)=>{
    res.send('Something went wrong...');
})

router.get('/protected', isLoggedIn,(req,res)=>{
    res.send('Hello!')
})



*/     


module.exports = router ;