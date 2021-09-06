const Product = require("../../models/Product");
const Web3 = require("web3");
const web3 = new Web3();
const axios = require("axios").default;
const { API_KEY_OPENSEA } = process.env;

<<<<<<< HEAD


=======
>>>>>>> 4fb0080971bc1a1b1e3a7468f22164945bfdeb4d
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
<<<<<<< HEAD
 name,
=======
      name,
>>>>>>> 4fb0080971bc1a1b1e3a7468f22164945bfdeb4d
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

<<<<<<< HEAD

async function getProductsApi ()  {
    try{
            const nfts = await axios.get('https://api.coinranking.com/v2/nfts?&limit=100');
            const nft = nfts.data.data.nfts;
            let dataAssets = [];    
            for (let n of nft) {
                    const assets = { 
                        name: n.name,
                        image: n.image,
                        _id: n.id,
                        price:n.price,
                        description:n.description,
                        price_dolar:n.priceInDollar,     
                        tokenId:n.tokenId
              };
            dataAssets.push(assets);
            }
            return dataAssets;
      
    }
    catch(error){
        console.log('Error')
    }

}



=======
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

>>>>>>> 4fb0080971bc1a1b1e3a7468f22164945bfdeb4d
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

<<<<<<< HEAD

async function getProductById (req, res)  {
    console.log("entree")
   
try {
=======
async function getProductById(req, res) {
  try {
>>>>>>> 4fb0080971bc1a1b1e3a7468f22164945bfdeb4d
    const { id } = req.params;
    let nft = await getAll();   
    const result=nft.find(n=>{

<<<<<<< HEAD
        if(n._id && n._id == id){           
            return n
            }
        })
    if (!result){
        return next({msg: 'Id incorrecto', status: 500})
    }else{
        if(!result.createdInDB){
            let nftApi = await axios.get('https://api.coinranking.com/v2/nft/'+id)
            return res.send(nftApi.data.data.nft)
        }
        res.status(200).send(result)
    }
} catch(error) {
    
    return res.json(error)
=======
    const product = await Product.findById(id);

    const nfts = await axios.get(
      `https://api.opensea.io/api/v1/asset/${product.address}/${product.tokenId}/`
    );
    const nft = nfts.data;
  } catch (error) {
    return res.json(error);
  }
}
>>>>>>> 4fb0080971bc1a1b1e3a7468f22164945bfdeb4d

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
<<<<<<< HEAD
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

async function deleteProductById(req, res, next) {
  const id = req.params.id;
  console.log("id desde backend", id);
  try {
    const nftDb = await Product.findByIdAndDelete({ _id: id });
    if (!nftDb) {
      res.send("Can´t remove it");
    } else {
      res.json("Deleted");
    }
  } catch (error) {
    next("error");
  }
}

=======

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
  console.log("acaaaaaaa");
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

>>>>>>> 4fb0080971bc1a1b1e3a7468f22164945bfdeb4d
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
