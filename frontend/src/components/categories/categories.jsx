import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNFTByName } from "../../actions/getNFTByName";
import { getNFTs, pageUno } from "../../actions/getNFTs.js";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Cards from "../card/card.jsx"
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    search: {
      maxWidth: "250px",
      position: 'fixed',
      right: "15px",
      marginBottom: "15px",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
      },
      marginRight: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      color: "white",
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'white',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    gridContainer: {
      marginTop: "30px"
    }
  }));

export default function Categories() {

  const stateAllNFTs = useSelector((state) => state.allNFTs);
  console.log(stateAllNFTs)
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNFTs());
    //dispatch(loading(true))
    // return () => {
    //   dispatch(getNFTs());
    // };
  }, [dispatch]);

  const [inputName,setInputName]=useState("")


  
  function handleInput(e){

        e.preventDefault()
        setInputName(e.target.value);
        
  }
    function handleSubmit(e){
        console.log(e)
        if(e.key === "Enter") {
          dispatch(getNFTByName(inputName));
          setInputName("")
        }
    }

    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              value={inputName}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>handleInput(e)}
              onKeyPress={(e)=>handleSubmit(e)}
            />
          </div>
          <Grid container spacing={6}  className={classes.gridContainer}>
              {
                  stateAllNFTs  ? stateAllNFTs.map(ele => {
                    if(ele !== null) {
                      return (
                        <div>
                            <Cards ele={ele} />
                        </div>
                    )
                    }
                     
                  }) : <h1>Loading</h1>
              }
          </Grid>
        </React.Fragment>
    )
}