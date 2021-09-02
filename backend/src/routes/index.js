const { Router } = require('express');
const axios = require('axios')
const router = Router();
const auth = require('../controllers/user/auth.js');
const {getAssets}=require ("./openSeaNft")

function isLoggedIn(req,res,next){
    req.user? next() : res.sendStatus(401)
}
// Imports
// const { signUp } = require('../controllers/signUp')
const { connectWallet } = require('../controllers/crypto/connectWallet.routes') 



// Routes      
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
            // short_description:data.collection,
            sales: data.num_sales,
            token_id: data.token_id,
            description: data.collection.description,
            address: data.address,
            featured: data.featured,
            featured_image_url: data.featured_image_url,
            twitter_username: data.twitter_username,
            instagram_username: data.instagram_username,
            owner: data.user.username,
            addressOwner: data.owner.address,
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