const { Router } = require('express');
const router = require('express').Router();
const auth = require('../controllers/user/auth.js');

function isLoggedIn(req,res,next){
    req.user? next() : res.sendStatus(401)
}
// Imports
// const { signUp } = require('../controllers/signUp')
const { connectWallet } = require('../controllers/payments/crypto/connectWallet.routes') 
const { pinDirectoryToIPFS } = require('../controllers/products/CDI-IPFS')
const { createProduct, 
        getProducts, 
        getProductById, 
        updateProductById, 
        deleteProductById 
        } = require('../controllers/products/products.routes') 

// Routes      
router.get('/connect', connectWallet)
router.post('/product', createProduct)
router.post('/cid', pinDirectoryToIPFS)
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