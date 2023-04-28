import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';
import logo from "../../Media/birraencasa_white.png";

function NavBar (){

    return(
        <div className="navContainer">
            <div className="nav">
            <Link to={"/"}>
                <img src= {logo} className='logo' alt="logo"/>
            </Link>
                <ul className="navList">
                    <li><Link to={'/category/IPA'}>IPA</Link></li>
                    <li><Link to={'/category/Roja'}>Roja</Link></li>
                    <li><Link to={'/category/Rubia'}>Rubia</Link></li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    )

}

export default NavBar;