import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.css';

export default function NavBar() {

    return (
        <header className={style.navBar}>
            <nav>
                <ul className={style.list}>
                    <li className={style.list_item}>
                        <NavLink exact to="/" >HOME</NavLink>
                        <NavLink exact to="/Login" >Login</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}