import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

function ElevationScroll(props) {
    const { children} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
      toolbarMargin: {
          ...theme.mixins.toolbar
      },
      tabContainer: {
          marginLeft: "auto"
      },
      tab: {
          ...theme.typography.tab,
            minWidth: 10,
            marginLeft: "25px"
      },
      button: {
          borderRadius: "50px",
          marginLeft: "25px",
          marginRight: "20px",
          fontFamily: "Raleway",
          fontSize: "1rem",
          textTransform: "none",
          height: "35px",
          color: "white"
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "secondary",
        marginLeft: "auto",
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
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
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
  }))

  

export default function NavBar(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value)
    }
    return (
        <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed">
            <ToolBar >
                <Typography variant="h5">NFT MARKET</Typography>
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
                 <Tabs 
                 value={value} 
                 className={classes.tabContainer} 
                 onChange={handleChange}
                 indicatorColor="secondary">
                 <Tab className={classes.tab} component={Link} to="/" label="Home"/>
                <Tab className={classes.tab} label="Categories"/>
                <Tab className={classes.tab} label="Create"/>
                <Tab className={classes.tab} label="My Profile"/>
                <Tab className={classes.tab} label="Contact"/>
                <Tab className={classes.tab} label="About Us"/>
             </Tabs>
             <Button component={Link} to="/login" variant="contained" color="secondary" className={classes.button}>Login</Button>
            </ToolBar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </React.Fragment>

        // <header className={style.navBar}>
        //     <nav>
        //         <ul className={style.list}>
        //             <li className={style.list_item}>
        //                 <NavLink exact to="/" >HOME</NavLink>
        //                 <NavLink exact to="/Login" >Login</NavLink>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>
    )
}