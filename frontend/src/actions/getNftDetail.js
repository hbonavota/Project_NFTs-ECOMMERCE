import axios from 'axios';

export default function getNftDetail(id) {
    try{
        return function(dispatch){
            return axios.get('http://localhost:8001/nft/'+id)
            .then((nftById) => {
                console.log(nftById, "estoooooooooo")
                dispatch({
                    type:"GET_NFT_BY_ID",
                    payload:nftById.data
                })
            })
        }
    }
    catch(error){
        console.log(error)
    }
}