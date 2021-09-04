const Transaction = require('../../../models/Transaction')
const Web3 = require('web3');

async function transactionMetaMask (req, res) {
    // Hacer las validaciones del front acá antes de guardarlo en la db
    // Tras validar todo, enviarlo al front y hacer la transacción
    try {
        const { myAddress, transactionTo, moneyAmount} = req.body
  
        const transactionMade  = new Transaction (
            {
                myAddress, 
                transactionTo,
                moneyAmount,

            }
        )

        const saveTransactions = await transactionMade.save()
        console.log("Se ha realizado una nueva transacción")
        console.log(saveTransactions)
        res.status(201).json(transactionMade)

    } catch(error) {
        console.log(error);
        res.status(500).json({error: 'Enviar dinero falló'})
    }
} 

module.exports = {
    transactionMetaMask
}