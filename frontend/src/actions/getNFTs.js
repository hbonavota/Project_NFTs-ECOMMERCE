import axios from 'axios';
import { GET_NTFs } from './constants'

export const getNFTs= () =>{
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/getNfts');
            return dispatch({
                type: GET_NTFs,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}