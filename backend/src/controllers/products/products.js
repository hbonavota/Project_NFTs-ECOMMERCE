const Product = require("../../models/Product");

async function createProduct(req, res) {
  const {
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
  } = req.body;
  const newProduct = new Product({
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
  });
  const productSaved = await newProduct.save();
  res.status(201).json(productSaved);
}

async function getProducts(req, res) {}

async function getProductById(req, res) {}

async function updateProductById(req, res) {}

async function deleteProductById(req, res) {}

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
