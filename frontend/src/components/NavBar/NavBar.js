import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
        //   fontFamily: "Raleway",
          textTransform: "none"
      }
  }))

export default function NavBar(props) {
    const classes = useStyles()
    return (
        <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed">
            <ToolBar >
                <Typography variant="h5">NFT MARKET</Typography>
                 <Tabs className={classes.tabContainer}>
                 <Tab className={classes.tab} label="Home"/>
                <Tab className={classes.tab} label="Categories"/>
                <Tab className={classes.tab} label="Create"/>
                <Tab className={classes.tab} label="My Profile"/>
                <Tab className={classes.tab} label="Contact"/>
                <Tab className={classes.tab} label="About Us"/>
             </Tabs>
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