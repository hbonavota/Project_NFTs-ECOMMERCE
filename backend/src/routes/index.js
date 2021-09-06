const { Router } = require("express");
const axios = require("axios");
const router = Router();
const auth = require("../controllers/user/auth.js");
const passport = require("passport");
const { isLoggedIn } = require("../controllers/user/isLoggedIn");
const { protected } = require("../controllers/apiGoogle/protected");

const {
  transactionMetaMask,
} = require("../controllers/payments/crypto/transactionMetaMask");
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
const login = require('../controllers/auth/login');
const register = require('../controllers/user/register');

// Routes
router.get("/search", searchProduct);
router.get("/nfts", getNFTs);
router.get("/nft/:id", getProductById);
router.post("/nft", createProduct);
router.post("/transaction", transactionMetaMask);
router.post('/auth/login', login);
router.post('/register', register);

router.put("/edit/:id", updateProductById);
router.delete("/delete/:id", deleteProductById);

router.put("/edit/:id", updateProductById);
router.delete("/delete/:id", deleteProductById);
// router.use('/auth/google',isAuthenticated)
// router.use('/google/callback',googleCallback)
// router.use('/auth/failure', authFailure)
router.use("/protected", isLoggedIn, protected);

module.exports = router;

