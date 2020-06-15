import React from 'react';
import {ReactComponent as Logo} from "../../assets/original.svg";
import {Link} from "react-router-dom";

const Header = () => (
    <div className='header'>
        <Link class='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/shop'>
            CONTACT
        </Link>
    </div>
);

export default Header;