const { Router } = require("express");
const axios = require("axios");
const router = Router();
const auth = require("../controllers/user/auth.js");
const passport = require("passport");
const { isLoggedIn } = require("../controllers/user/isLoggedIn");
const { protected } = require("../controllers/apiGoogle/protected");

const {
  connectWallet,
} = require("../controllers/payments/crypto/connectWallet.routes");
const {
  searchProduct,
  createProduct,
  getProductsApi,
  getProductsDb,
  getProductById,
  updateProductById,
  deleteProductById,
  getNFTs,
} = require("../controllers/products/products");

// Routes
//router.get('/connect', connectWallet)
router.get("/search", searchProduct);
router.get("/connect", connectWallet);
router.get("/nfts", getNFTs);
// router.get('/nft', getProductsDb)
router.get("/nft/:id", getProductById);
router.post("/nft", createProduct);

router.put("/edit/:id", updateProductById);
router.delete("/delete/:id", deleteProductById);
// router.use('/auth/google',isAuthenticated)
// router.use('/google/callback',googleCallback)
// router.use('/auth/failure', authFailure)
router.use("/protected", isLoggedIn, protected);

module.exports = router;

