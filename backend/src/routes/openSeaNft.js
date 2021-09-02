const express = require('express')
const router = express.Router()
const axios = require('axios')


async function getAssets(req, res) {
    try {
       const nfts = await axios.get('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50')
       const nft = nfts.data.assets; 
      

       let dataAssets = []

       for (let data of nft) {
           
           const assets = {
           name: data.name && data.name,
           image: data.image_url && data.imagen_url,
           id: data.id,
           token_id: data.token_id,
           description: data.description,
           asset_contract_Address: data.asset_contract.address,
           asset_contract_Date: data.asset_contract.created_date,
           external_url: data.external_url,
           featured_image_url: data.featured_image_url,
           twitter_username: data.twitter_username,
           instagram_username: data.instagram_username,
        //    owner: data.owner.user.username,
           addressOwner: data.owner.address,
        //    creator: data.creator.user.username,
        //    addressCreator: data.creator.address,
          }
          dataAssets.push(assets)
        }

             res.json(dataAssets)
    }
    catch(err){
        console.log(err)
    }
}

module.exports={getAssets};
    
    