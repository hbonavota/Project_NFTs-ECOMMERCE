import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNFTs, pageUno } from "../../actions/getNFTs.js";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Cards from "../card/card.jsx"
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: {
        ...theme.palette.common.gray
    },
      '&:hover': {
        backgroundColor: {...theme.palette.common.gray},
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
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
  }));

export default function Categories() {

  const stateAllNFTs = useSelector((state) => state.allNFTs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNFTs());
    //dispatch(loading(true))
    return () => {
      dispatch(getNFTs());
    };
  }, [dispatch]);

    const classes = useStyles();
    return(
        <React.Fragment>

          <Grid container spacing={6}>
              {
                  stateAllNFTs.map(ele => {
                      return (
                          <div>
                              <Cards ele={ele} />
                          </div>
                      )
                  })
              }
          </Grid>
           <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </React.Fragment>
    )
}