const Product = require('../../models/Product')
const axios = require('axios').default

async function createProduct (req, res)  {
    const {
        name, description, price, image, tokenId, categories, artist, specs, reviews, collection } = req.body
    const newProduct  = new Product (
        {
        name, 
        description,
        price,
        image,
        tokenId, //--> lo traigo desde CDI-IPFS guardado previamente en Mongo
        categories,
        artist,
        specs,
        reviews,
        collection,
        }
    )
    const productSaved = await newProduct.save()
    res.status(201).json(productSaved)
}

async function getProducts (req, res)  {
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
            // owner: data.user.username,
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
}

async function getProductById (req, res)  {
    
}

async function updateProductById (req, res)  {
    
}

async function deleteProductById (req, res)  {
    
}



module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById,
}
