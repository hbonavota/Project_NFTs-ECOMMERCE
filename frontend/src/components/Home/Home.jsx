import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNFTs, pageUno } from "../../actions/getNFTs.js";
import NavBar from "../NavBar/NavBar";
import { loading } from "../../actions/loading.js";
import style from "../Home/Home.module.css";
import Paginated from "../Paginado/Paginated";
<<<<<<< HEAD
import Search from "../Search/Search";
import { Link } from 'react-router-dom';



=======
>>>>>>> 4fb0080971bc1a1b1e3a7468f22164945bfdeb4d
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

  return (
    <div>
      <div
        className=/* {stateLoading ? style.back2 : style.back1} */ {style.back1}
      >
        <div className={style.container}>
          <h1> Welcome to NFTs-ECOMMERCE</h1>
<<<<<<< HEAD
          <Search/>
          {currentNft && currentNft.length >0 ? (
            currentNft.map((n) => (
              <div key={n._id}>
                <Link  to={`nft/${n._id}`}> <h4 ><h2>{n.name}</h2></h4></Link>                
                <img src={n.image || n.iconUrl} />
=======
          {currentNft ? (
            currentNft.map((n) => (
              <div key={n.id}>
                <h2>{n.name}</h2>
                <img src={n.image} />
>>>>>>> 4fb0080971bc1a1b1e3a7468f22164945bfdeb4d
                <p>{n.description}</p>
                
              </div>
            ))
          ) : (
            <p>loading...</p>
          )}

</div>
      {/* <div class="divPagination">
      <Pagination dogsPerPage={dogsPerPage} totalDogs={dogs.length} paginate={paginate}/>
      </div> */}
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
