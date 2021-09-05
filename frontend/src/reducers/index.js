
import { GET_NTFs, SET_LOADING,  IS_AUTORIZATED } from "../actions/constants";

const initialState = {
  allNFTs: [], // state of all NFTS from API openSea
  filtered: [], // contains array for make the filters
  loading: true, //  boolean for show a image when is loading. Set first : true
  userIsAuthenticated:[],
  page: 1,
  nftDetail:[],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NTFs:
      return {
        ...state,
        page: 1,
        allNFTs: action.payload,
        filtered: action.payload,
        loading: false,
      };
     case IS_AUTORIZATED :
       return {
        ...state,
        userIsAuthenticated: action.payload
            };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case "PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "GET_NFT_BY_NAME":
      return{
        ...state,
        allNFTs:action.payload
      }
    case "GET_NFT_BY_ID":
      return{
        ...state,
        nftDetail:action.payload
      }
    
    default:
      return state;
  }

}

export default rootReducer;
