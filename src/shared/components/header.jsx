import React from "react";
import logo from "../../img/logo.png"
import search from "../../img/Search.svg"

const Header = ({setRegistration}) => {


    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="logo"/>
            <p className="header__p">Я работодатель</p>
            <p onClick={() => setRegistration(true)}>Регистрация</p>
            <p onClick={() => setRegistration(false)}>Вход</p>
            <p>Помощь</p>
            <div className="header__search">
                <input type="search" placeholder="Search"/>
                <img src={search} alt="search"/>
            </div>
        </div>
    )
}

export default Header;