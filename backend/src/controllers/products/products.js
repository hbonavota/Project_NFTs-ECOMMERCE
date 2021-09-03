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

async function getProductsApi (req, res,next)  {
    
   
    try{

            const nfts = await axios.get('https://api.coinranking.com/v2/nfts?&limit=100')
            const nft = nfts.data.data.nfts;
            let dataAssets = [];    
            for (let n of nft) {
                    const assets = { 
                        name: n.name,
                        image: n.image,
                        id: n.id,
                        price:n.price,
                        price_dolar:n.priceInDollar,     
                        tokenId:n.tokenId
              };
            dataAssets.push(assets);
            }
           //VER COMO TRAER LOS PRODUCTOS CREADOS DE LA BASE DE DATOS !!!!!
           //     var dbNFTs=db.henry.findAll({
              
            res.json(dataAssets);
      
    }
    catch(error){
        next('Error')
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
 
} catch(error) {
    // console.log(error)
    return res.json(error)
}

}

async function searchProduct(req, res,next) {
    var name= req.query.query  
    try{
        const nfts = await axios.get('https://api.coinranking.com/v2/search-suggestions?query='+name)
        console.log(nfts)
        
        return res.send(nfts.data.data.coins)
       
    }
    
    catch(error){
        next("error")
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
    searchProduct
}
