import React from "react";
import {useState} from "react";
import {useDispatch} from 'react-redux'
import { getNFTByName } from "../../actions/getNFTByName";



export default function Search(){
    const dispatch = useDispatch()
    
    const [inputName,setInputName]=useState("")

    function handleInput(e){
        e.preventDefault()
        setInputName(e.target.value)
        
    }

    function onSubmit(e){
        e.preventDefault()
        dispatch(getNFTByName(inputName))
        setInputName("")

    }

    return(
        <div>
            <input type="text"  placeholder="Search NFT" onChange={(e)=>handleInput(e)}/>
            <button type="submit"  onClick={(e)=>onSubmit(e)}>Search</button>

        </div>
    )


}
