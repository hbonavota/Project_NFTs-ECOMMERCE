import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNFTs } from '../../actions/getNFTs.js';
import NavBar from '../NavBar/NavBar';
import { loading } from '../../actions/loading.js';
import style from '../Home/Home.module.css'


export default function Home() {
    const StateFilteredNFTs = useSelector(state => state.filtered)
    const stateAllNFTs = useSelector(state => state.allNFTs)
    const stateLoading = useSelector(state => state.loading)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNFTs())
        //dispatch(loading(true))
        return () => {
            dispatch(getNFTs())
        }
    }, [dispatch]);


    return (
        <div>
            <div className= /* {stateLoading ? style.back2 : style.back1} */{style.back1}>
                <div className={style.container}>
                    <h1> Welcome to NFTs-ECOMMERCE</h1>
                </div>
            </div>
        </div>
    )
}