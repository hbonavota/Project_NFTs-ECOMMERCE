import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNFTs, pageUno } from "../../actions/getNFTs.js";
import NavBar from "../NavBar/NavBar";
import { loading } from "../../actions/loading.js";
import style from "../Home/Home.module.css";
import Paginated from "../Paginado/Paginated";
import Search from "../Search/Search";
import { Link } from 'react-router-dom';
import Cards from "../card/card.jsx"
import Grid from '@material-ui/core/Grid';
// import sortByAbc from '../../actions/sortByAbc'



export default function Home() {
  const StateFilteredNFTs = useSelector((state) => state.filtered);
  const stateAllNFTs = useSelector((state) => state.allNFTs);
  const stateLoading = useSelector((state) => state.loading);
  // const pages = useSelector((state) => state.page);
  // const [PerPage, setNftPerPage] = useState(9);
  // const lastNft = pages * PerPage;
  // const firstNft = lastNft - PerPage;
  // const currentNft = stateAllNFTs.slice(firstNft, lastNft);

const [currentPage,setCurrentPage]=useState(1);//empieza por pagina 1
const [PerPage, setNftPerPage]=useState([9]);// cuantos perros por pagina
const lastNft=currentPage*PerPage;//ultimo perro primer caso 1*9
const firstNft=lastNft-PerPage;//primer perro 9-9=0
const currentNft=stateAllNFTs.slice(firstNft,lastNft);//aca hago el corte de mi arreglo de dogs
const paginate=(pageNumber)=> setCurrentPage(pageNumber)


// const paginate=(pageNumber)=> setCurrentPage(pageNumber)
//   const paged = (pageNumber) => {
//     dispatch(pageUno(pageNumber));
//   };

//   console.log(stateAllNFTs, "nftssssss");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNFTs());
    //dispatch(loading(true))
    return () => {
      dispatch(getNFTs());
    };
  }, [dispatch]);

  const filterAscDesc=(e)=>{
    e.preventDefault()
  //  dispatch(sortByAbc(e.target.value))
  }

  return (
    <div>
      <div
        className=/* {stateLoading ? style.back2 : style.back1} */ {style.back1}
      >
        <div className={style.container}>
          <h1> Welcome to NFTs-ECOMMERCE</h1>
          <Search/>
          <label htmlFor="">Filters/ Orders</label>

          //FILTRAR POR CATEGORIAS 
    
                  
          {/* <select  name="categories" onChange={e=>filterByCategories(e)}>
           <option value="">Temperaments</option>
           <option value="all">All</option>      
           {categories.map((cat)=>{
          return <option key={cat.id} value={cat.name && cat.name.charAt(0).toUpperCase()+
            cat.name.slice(1)}>{cat.name && cat.name.charAt(0).toUpperCase()+cat.name.slice(1)}</option>
          })}      
           </select> */}

           //ORDENAR POR ABC
        <select onChange={e=> filterAscDesc(e)}>
          <option value="">Asc-Desc</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>

        {/* <select className="selects" onChange={e=>filterByCreated(e)}>
        <option value="">By created</option>
         <option value="all">All</option>
          <option value="created">Created Dogs</option>
          <option value="apiDogs">Api Dogs</option>
        </select> */}

        {/* <select className="selects" onChange={e=>filterByWeight(e)}>
        <option value="">By weight</option>
         <option value="all">All</option>
          <option value="max">Max</option>
          <option value="min">Min</option>
        </select>
     */}
       {/* <Link to="/dogs/add"><button class="buttonDog">Create Dog</button></Link>
       <button class="buttonDog" onClick={(e)=>allDogs(e)}>All Dogs</button>
       </div> */} 




      <Grid container spacing={6}>
          {currentNft && currentNft.length >0 ? (
            currentNft.map((ele) => (
                <div>
                  <Link  to={`nft/${ele._id}`}>
                    <Cards ele={ele} />
                    </Link> 
                </div>
        
              // <div key={n._id}>
              //   <Link  to={`nft/${n._id}`}> <h4 ><h2>{n.name}</h2></h4></Link>                
              //   <img src={n.image || n.iconUrl} />
              //   <p>{n.description}</p>
                
              // </div>
            ))
          ) : (
            <p>loading...</p>
          )}
        </Grid>
</div>
     
    </div>
          <div>
            <Paginated
            
              PerPage={PerPage}
              stateAllNFTs={stateAllNFTs.length}
              paged={paginate}
            />
            {/* {currentNft.length?.map((e, index) => {
              // le pregunto si hay AllGames, (tiene el estado global con todos los juegos) y desp por cada juego le paso un card con cada prop que quiero renderizar
              return <p key={index} nft={e} />;
            })} */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
