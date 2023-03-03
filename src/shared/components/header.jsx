import React from "react";
import logo from "../../img/logo.png"
import search from "../../img/Search.svg"
import {Link} from "react-router-dom";
import BasicModal from "./pageHelp/pageHelpModal";

const Header = ({setRegistration}) => {

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="logo"/>
            </Link>
            <p className="header__p">Я работодатель</p>
            <Link to="/registration">
                <p onClick={() => setRegistration(true)}>Регистрация</p>
            </Link>
            <Link to="/registration">
                <p onClick={() => setRegistration(false)}>Вход</p>
            </Link>
            <BasicModal />
            <div className="header__search">
                <input type="search" placeholder="Search"/>
                <img src={search} alt="search"/>
            </div>
        </div>
    )
}

export default Header;

