import { GET_NTFs, SET_LOADING, IS_AUTORIZATED } from "../actions/constants";

const initialState = {
  allNFTs: [], // state of all NFTS from API openSea
  filtered: [], // contains array for make the filters
  loading: true, //  boolean for show a image when is loading. Set first : true
  userIsAuthenticated: [],
  page: 1,
  nftDetail: [],
  Nfts: [],
  filters: [],
};

function getFilters(nfts) {
  let f = [];

  nfts.map((g) => {
    if (!f.includes(g.dappSlug)) {
      f.push(g.dappSlug);
    }
  });

  return f;
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NTFs:
      return {
        ...state,
        page: 1,
        allNFTs: action.payload,
        filtered: action.payload,
        loading: false,
        Nfts: action.payload,
        filters: getFilters(action.payload),
      };
    case IS_AUTORIZATED:
      return {
        ...state,
        userIsAuthenticated: action.payload,
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
      return {
        ...state,
        allNFTs: action.payload,
      };
    case "GET_NFT_BY_ID":
      return {
        ...state,
        nftDetail: action.payload,
      };
    case "FILTER_BY_DES_ASC":
      const ascDescFilter =
        action.payload === "za"
          ? state.allNFTs.sort((a, b) => {
              // cat.name.charAt(0).toUpperCase()
              if (a.name !== null && a.name > b.name !== null) {
                if (
                  a.name?.charAt(0).toLowerCase() <
                  b.name?.charAt(0).toLowerCase()
                ) {
                  return 1;
                } else {
                  return -1;
                }
              }
            })
          : state.allNFTs.sort((a, b) => {
              if (a.name !== null && b.name !== null) {
                if (
                  a.name?.charAt(0).toLowerCase() >
                  b.name?.charAt(0).toLowerCase()
                ) {
                  return 1;
                } else {
                  return -1;
                }
              }
            });

      console.log(ascDescFilter, "asi queda");
      return {
        ...state,
        allNFTs: [...ascDescFilter],
      };
    case "SORT_PRICE":
      const priceFilter =
        action.payload === "max"
          ? [...state.Nfts].sort(
              (b, a) => parseInt(a.price) - parseInt(b.price)
            )
          : [...state.Nfts].sort(
              (b, a) => parseInt(b.price) - parseInt(a.price)
            );
      console.log(priceFilter, priceFilter.length);
      return {
        ...state,
        allNFTs: priceFilter,
      };
    case "FILTER_CATEGORIE":
      const Nfts = state.Nfts;
      const filterCat =
        action.payload === "All"
          ? Nfts
          : Nfts.filter((i) => i.dappSlug === action.payload);
      return {
        ...state,
        allNFTs: filterCat,
      };

    default:
      return state;
  }
}

export default rootReducer;
