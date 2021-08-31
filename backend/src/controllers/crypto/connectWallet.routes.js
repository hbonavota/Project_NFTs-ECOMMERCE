const Web3 = require('web3');

async function connectWallet(req, res) {
    try {
        if(window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccount'})
          } else {
            alert("Instala Metamask")
          }
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error: 'Conectar wallet falló'})
    }
} 

module.exports = {
    connectWallet
}