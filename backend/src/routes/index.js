const { Router } = require('express');
const axios = require('axios')
const router = Router();
const auth = require('../controllers/user/auth.js');
const passport = require('passport');
const {isLoggedIn} = require('../controllers/user/isLoggedIn')
const {protected} = require('../controllers/apiGoogle/protected')


const { connectWallet } = require('../controllers/payments/crypto/connectWallet.routes') 
const isAuthenticated = require('./isAuthenticated.js')
const googleCallback = require('./googleCallback');
const authFailure = require('./authFailure');
const { pinDirectoryToIPFS } = require('../controllers/products/CDI-IPFS') 
const { createProduct, getProducts, getProductById, updateProductById, deleteProductById } = require('../controllers/products/products')

// Routes      
//router.get('/connect', connectWallet)
router.get('/connect', connectWallet)

// router.use("/nft",getAssets)
router.get("/nft",async (req,res,next)=>{ 
    try {
        const nfts = await axios.get('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50')
        const nft = nfts.data.assets; 
        let dataAssets = []
 
        for (let data of nft) {   
           const assets = {
            name: data.name,
            image: data.image_url,
            id: data.id,
            short_description:data.collection,
            sales: data.num_sales,
            token_id: data.token_id,
            description: data.collection.description,
            address: data.address,
            featured: data.featured,
            featured_image_url: data.featured_image_url,
            // twitter_username: data.twitter_username,
            // instagram_username: data.instagram_username,
            // owner: data.user.username,
            // addressOwner: data.owner.address,
         //    creator: data.creator.user.username,
         //    addressCreator: data.creator.address,
           }
           dataAssets.push(assets)
         }
           
           res.send(dataAssets)
     }
     catch(err){
         console.log(err)
     }

     
 
})
   

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