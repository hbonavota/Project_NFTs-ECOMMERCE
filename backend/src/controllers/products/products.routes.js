require('dotenv').config();require('dotenv').config();
const Product = require('../../models/Product')
const {API_KEY_PINATA, API_SECRET_KEY_PINATA} = process.env;
const axios = require('axios').default;

async function createProduct (req, res)  {
    try {

        const { name, description, price, image, tokenId, categories, artist, specs, reviews, collection } = req.body
        const newProduct  = new Product (
            {
                name, 
                description,
                price,
                image,
                tokenId,
                categories,
                artist,
                specs,
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

async function getProducts (req, res)  {
    console.log(req.body)
    res.json(' get products')
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
