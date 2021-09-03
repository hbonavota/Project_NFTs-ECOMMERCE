const Product = require('../../models/Product')
const Web3 = require('web3')
const web3 = new Web3();
const axios = require('axios').default
const { API_KEY_OPENSEA } = process.env;

async function createProduct (req, res)  {
    try {
        const { name, description, price, image, categories, artist, address, reviews, collection } = req.body
        const randomString = web3.utils.sha3(Math.random(0, 1000000).toString(16) + web3.utils.randomHex(32))
        const sevenHundred = web3.eth.accounts.wallet.create(1, randomString)

        let tokenId = sevenHundred[0].address;
        const newProduct  = new Product (
            {
            name, 
            description,
            price,
            image, 
            tokenId,
            categories,
            artist,
            address,
            reviews,
            collection,
            }
        )

        const productSaved = await newProduct.save()
        res.status(201).json(productSaved)

    } catch(error) {
    console.log(error)
    res.json(error)
}
}

let offset = 0
async function getProductsApi (req, res)  {
    try {
        
        const nfts = await axios.get(`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset * 50}&limit=50`)
        const nft = nfts.data.assets; 
        offset++;

        for (let data of nft) { 
            const newProduct  = new Product ({
                    name: data.name,
                    image: data.image_url,
                    id: data.id,
                    // short_description:data.collection,
                    sales: data.num_sales,
                    tokenId: data.token_id,
                    description: data.collection.description,
                    address: data.asset_contract.address,
                    // featured: data.featured,
                    // featured_image_url: data.featured_image_url,
                    // twitter_username: data.twitter_username,
                    // instagram_username: data.instagram_username,
                    // owner: data.user.username,
                    addressOwner: data.owner.address,
                }
            )
            return await newProduct.save()
        }

     }
     catch(err){
         console.log(err)
     }
}

async function getProductsDb (req, res)  {
    try {
           const products = await Product.find()
           return res.json(products)
     }
     catch(err){
         console.log(err)
     }
}

async function getProductById (req, res)  {
try {
    const { id } = req.params;

    const product = await Product.findById(id)

    const nfts = await axios.get(`https://api.opensea.io/api/v1/asset/${product.address}/${product.tokenId}/`)
    const nft = nfts.data;

    console.log(nft)
    


    


    // for (let data of nft) { 
    //     const productId = {
    //             name: data.name,
    //             image: data.image_url,
    //             id: data.id,
    //             address: data.asset_contract.address,
    //             token_id: data.token_id,
    //             description: data.collection.description,
    //             featured: data.featured,
    //             featured_image_url: data.featured_image_url,
    //             twitter_username: data.twitter_username,
    //             instagram_username: data.instagram_username,
    //             addressOwner: data.owner.address,
    //         }
    //         return res.json(productId)
    // }


} catch(error) {
    console.log(error)
    return res.json(error)
}

}

async function updateProductById (req, res)  {
    
}

async function deleteProductById (req, res)  {
    
}



module.exports = {
    createProduct,
    getProductsApi,
    getProductsDb,
    getProductById,
    updateProductById,
    deleteProductById,
}
