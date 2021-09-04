import { useEffect } from "react"
import {useParams } from 'react-router-dom'
import getNftDetail from "../../actions/getNftDetail"
import {useDispatch} from 'react-redux'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import getClean  from "../../actions/getClean"


export default function NftDetail() {
   
    const {id} = useParams();
    const dispatch=useDispatch();

    useEffect( () => {
        dispatch(getNftDetail(id))
        
    return () => {
        dispatch(getClean())
      
    }
    }, [id,dispatch])

  
      
    const nftDetail=useSelector(state=>state.nftDetail)
    console.log(nftDetail)
    
    
    return <div>
        <div>
         <Link to="/">
            <button>Home</button>
            </Link>   
        </div> 
               
        {              
        nftDetail !==undefined ?      
        <div>
                    
                <h2>{nftDetail.name}</h2>
                <img src={nftDetail.image} alt="img"/>
                <p>{nftDetail.description}</p>
                <p>{nftDetail.price}</p>
                
        </div>

                        
             : 
       
      <span>Loading...</span>
       

        }
        </div>
      
}