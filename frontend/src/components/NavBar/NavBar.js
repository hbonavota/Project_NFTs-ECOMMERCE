import React, {useState, useEffect} from 'react';
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
  }))

  

export default function NavBar(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value)
    }

    useEffect(() => {
      if(window.location.pathname === "/" && value !== 0) {
        setValue(0);
      } else if(window.location.pathname === "/categories" && value !== 1) {
        setValue(1);
      } else if(window.location.pathname === "/create" && value !== 2) {
        setValue(2);
      } else if(window.location.pathname === "/profile" && value !== 3) {
        setValue(3);
      } else if(window.location.pathname === "/contact" && value !== 4) {
        setValue(4);
      } else if(window.location.pathname === "/about" && value !== 5) {
        setValue(5);
      }
    }, [value])

    return (
        <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed">
            <ToolBar >
                <Typography variant="h5">NFT MARKET</Typography>
                 <Tabs 
                 value={value} 
                 className={classes.tabContainer} 
                 onChange={handleChange}
                 indicatorColor="secondary">
                 <Tab className={classes.tab} component={Link} to="/" label="Home"/>
                <Tab className={classes.tab} component={Link} to="/categories" label="Categories"/>
                <Tab className={classes.tab} component={Link} to="/create" label="Create"/>
                <Tab className={classes.tab} component={Link} to="/profile" label="My Profile"/>
                <Tab className={classes.tab} component={Link} to="/contact" label="Contact"/>
                <Tab className={classes.tab} component={Link} to="/about" label="About Us"/>
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