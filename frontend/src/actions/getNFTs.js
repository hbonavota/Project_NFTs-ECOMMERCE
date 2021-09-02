import axios from 'axios';
import { GET_NTFs } from './constants'

export const getNFTs= () =>{
    return async function(dispatch){
        try {
            let response = await axios.get('http://localhost:8001/nft');
            return dispatch({
                type: GET_NTFs,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}