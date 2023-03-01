import React from "react";
import Title from "../../../../img/Title.png"
import SearchMap from "../../../../img/search-map.png"
import MainContent from "./mainContent";
import MainContentSlider from "./mainContentSlider";

const MainPage = ({}) => {
    return (
        <div className="mainPage">
            <img className="mainPage__title" src={Title} alt="title"/>
            <div className="mainPage__content">
                <img src={SearchMap} alt="SearchMap"/>
                <div className="mainPage__content_list">
                    <ul>
                        <li>Санкт-Петербург</li>
                        <li>Москва</li>
                        <li>Нижний Новгород</li>
                        <li>Казань</li>
                        <li>Екатеринбург</li>
                        <li>Владивосток</li>
                    </ul>
                </div>
            </div>
            <MainContent />
            <MainContentSlider />
        </div>
    )
}

export default MainPage;