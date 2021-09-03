import axios from 'axios';

export function getNFTByName(name){
    try{
        return function(dispatch){
            return axios.get('http://localhost:8001/nft/'+name)
            .then ((NFTByName)=>{
                dispatch({
                    type:"GET_NFT_BY_NAME",
                    payload:NFTByName.data
                })
            })
            }
    }
    catch(err){
        return("NFT not available")
    }
   
    
}