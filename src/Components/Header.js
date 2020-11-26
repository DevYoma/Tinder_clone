import React from 'react';
import './Header.css';
import Tinder from '../assets/tinderLogo.png';
import { IconButton } from '@material-ui/core';
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

const Header = () => {
    return ( 
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large"  className="header__icon"/>
            </IconButton>
            <img src={Tinder} alt="TinderLogo" className="header__logo" />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
     );
}
 
export default Header;