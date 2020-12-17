import React from 'react';
import './Header.css';
import Tinder from '../assets/tinderLogo.png';
import { IconButton } from '@material-ui/core';
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from 'react-router-dom';

const Header = ({ backbutton }) => {
    const history = useHistory();
    return ( 
        <div className="header">
            {
                backbutton ? (
                    //react routing library
                    <IconButton onClick={() => history.replace(backbutton)}>
                        <ArrowBackIosIcon fontSize="large" className="header__icon" />
                    </IconButton>
                ): (
                <IconButton>
                    <PersonIcon fontSize="large"  className="header__icon"/>
                </IconButton>
                )
            }
            <Link to="/">
                <img src={Tinder} alt="TinderLogo" className="header__logo" />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" className="header__icon" />
                </IconButton>
            </Link>
        </div>
     );
}
 
export default Header;