import React, {useState, useEffect} from 'react';
import {Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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
            marginLeft: "25px",
            opacity: 0.7,
            "&:hover": {
            opacity: 1
            }
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
      menu: {
        backgroundColor: theme.palette.common.green,
        color: "white"
      },
      menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
          opacity: 1
        }
      }
  }))

  

export default function NavBar(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl, setanchorEl] = useState(null);
    const [open, setopen] = useState(false)

    const handleChange = (e, value) => {
        setValue(value)
    }

    const handleclick = (e) => {
      setanchorEl(e.currentTarget);
      setopen(true);
    }

    const handleClose = (e) => {
      setanchorEl(null);
      setopen(false);
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
                <Tab 
                aria-owns={anchorEl ? "categoriesMenu" : undefined}
                aria-haspopup={anchorEl? true : undefined}
                className={classes.tab} 
                onMouseOver={e => handleclick(e)}
                component={Link} to="/categories/all" 
                label="Categories"/>
                <Tab className={classes.tab} component={Link} to="/create" label="Create"/>
                <Tab className={classes.tab} component={Link} to="/profile" label="My Profile"/>
                <Tab className={classes.tab} component={Link} to="/contact" label="Contact"/>
                <Tab className={classes.tab} component={Link} to="/about" label="About Us"/>
             </Tabs>
             <Button component={Link} to="/login" variant="contained" color="secondary" className={classes.button}>Login</Button>
             <Menu
              id="categoriesMenu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{onMouseLeave: handleClose}}
              classes={{paper: classes.menu}}
              elevation={3}>
                <MenuItem
                onClick={()=> {handleClose(); setValue(1)}} 
                component={Link} to="/categories/all"
                classes={{root: classes.menuItem}}>Categories</MenuItem>
                <MenuItem
                onClick={()=> {handleClose(); setValue(1)}} 
                component={Link} to="/categories/all"
                classes={{root: classes.menuItem}}>All NFTS</MenuItem>
                <MenuItem
                onClick={handleClose}
                classes={{root: classes.menuItem}}>Images</MenuItem>
                <MenuItem
                onClick={handleClose}
                classes={{root: classes.menuItem}}>GIF</MenuItem>
              </Menu>
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