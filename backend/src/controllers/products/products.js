const Product = require("../../models/Product");
const Web3 = require("web3");
const web3 = new Web3();
const axios = require("axios").default;
const { API_KEY_OPENSEA } = process.env;

async function createProduct(req, res) {
  try {
    const {
      name,
      description,
      price,
      image,
      categories,
      artist,
      address,
      reviews,
      collection,
      currency,
    } = req.body;
    const randomString = web3.utils.sha3(
      Math.random(0, 1000000).toString(16) + web3.utils.randomHex(32)
    );
    const sevenHundred = web3.eth.accounts.wallet.create(1, randomString);

    let tokenId = sevenHundred[0].address;
    const newProduct = new Product({
      name,
      description,
      price,
      currency,
      image,
      tokenId,
      categories,
      artist,
      address,
      reviews,
      collection,
    });

    const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}

async function getProductsApi() {
  try {
    const nfts = await axios.get(
      "https://api.coinranking.com/v2/nfts?&limit=100"
    );
    const nft = nfts.data.data.nfts;
    let dataAssets = [];
    for (let n of nft) {
      const assets = {
        name: n.name,
        image: n.image,
        id: n.id,
        price: n.price,
        price_dolar: n.priceInDollar,
        tokenId: n.tokenId,
      };
      dataAssets.push(assets);
    }
    return dataAssets;
  } catch (error) {
    next("Error");
  }
}

async function getProductsDb() {
  try {
    const products = await Product.find();
    return products;
  } catch (err) {
    console.log(err);
  }
}
let getAll = async () => {
  try {
    const nftApi = await getProductsApi();
    const nftDB = await getProductsDb();
    const nftTotal = nftApi.concat(nftDB);
    return nftTotal;
  } catch (error) {
    console.log(error);
  }
};
//FUNCION QUE HACE EL GET
let getNFTs = async (_req, res) => {
  try {
    let nft = await getAll();
    return res.json(nft);
  } catch (error) {
    console.log(error);
  }
};

async function getProductById(req, res) {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    const nfts = await axios.get(
      `https://api.opensea.io/api/v1/asset/${product.address}/${product.tokenId}/`
    );
    const nft = nfts.data;
  } catch (error) {
    return res.json(error);
  }
}

async function searchProduct(req, res, next) {
  var name = req.query.query;
  try {
    let nft = await getAll();
    const result = nft.filter((n) => {
      if (n.name && n.name.toLowerCase().includes(name.toLocaleLowerCase())) {
        return n;
      }
    });
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    next("error");
  }
}

async function updateProductById(req, res, next) {
  const id = req.params.id;
  const body = req.body;
  try {
    await Product.findByIdAndUpdate(id, body);

    res.send("edit nft");
  } catch (error) {
    next("error");
    res.send("fail edit");
  }
}

async function deleteProductById(req, res) {
  console.log("acaaaaa");
  const id = req.params.id;
  console.log("id desde backend", id);
  try {
    const nftDb = await Product.findByIdAndDelete({ _id: id });
    console.log(nftDb, "ACAAAAAAA");
    if (!nftDb) {
      res.send("No se puede eliminar");
    } else {
      res.json("Eliminado");
    }
  } catch (error) {
    next("error");
  }
}

module.exports = {
  createProduct,
  getProductsApi,
  getProductsDb,
  getProductById,
  updateProductById,
  deleteProductById,
  searchProduct,
  getNFTs,
};
