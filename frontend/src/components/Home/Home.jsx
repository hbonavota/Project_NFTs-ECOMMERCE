import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNFTs, pageUno } from "../../actions/getNFTs.js";
import NavBar from "../NavBar/NavBar";
import { loading } from "../../actions/loading.js";
import style from "../Home/Home.module.css";
import Paginated from "../Paginado/Paginated";
import Search from "../Search/Search";

export default function Home() {
  const StateFilteredNFTs = useSelector((state) => state.filtered);
  const stateAllNFTs = useSelector((state) => state.allNFTs);
  const stateLoading = useSelector((state) => state.loading);
  const pages = useSelector((state) => state.page);
  const [PerPage, setGamePerPage] = useState(9);
  const lastNft = pages * PerPage;
  const firstNft = lastNft - PerPage;
  const currentNft = stateAllNFTs.slice(firstNft, lastNft);

  const paged = (pageNumber) => {
    dispatch(pageUno(pageNumber));
  };

  console.log(stateAllNFTs, "nftssssss");

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
          <Search/>
          {currentNft ? (
            currentNft.map((n) => (
              <div key={n.id}>
                <h2>{n.name}</h2>
                <img src={n.image || n.iconUrl} />
                <p>{n.description}</p>
                {/* <div>
                        <p>{n.owner}</p>
                        </div> */}
              </div>
            ))
          ) : (
            <p>loading...</p>
          )}
          <div>
            <Paginated
              PerPage={PerPage}
              stateAllNFTs={stateAllNFTs.length}
              paged={paged}
            />
            {currentNft?.map((e, index) => {
              // le pregunto si hay AllGames, (tiene el estado global con todos los juegos) y desp por cada juego le paso un card con cada prop que quiero renderizar
              return <p key={index} nft={e} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
