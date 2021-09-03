const Web3 = require('web3')
const web3 = new Web3();

// string aleatorio para generar las wallets 
const randomString = web3.utils.sha3(Math.random(0, 1000000).toString(16) + web3.utils.randomHex(32))

// const createWallet = web3.eth.accounts.create(randomString)
// Retorna una wallet (pública) y la clave privada para conectarse
// console.log(createWallet)

// Creo wallets de manera automática con la librería
const sevenHundred = web3.eth.accounts.wallet.create(7, randomString)



// Encripto la clave privada
// const privateKeyEncrypted = web3.eth.accounts.encrypt(sevenHundred.privateKey, 'password');
// console.log(privateKeyEncrypted)

// Desencripto la clave privada
// const walletPrivateKey = web3.eth.accounts.decrypt(privateKeyEncrypted, 'password');
// console.log(walletPrivateKey)

console.log(sevenHundred)

