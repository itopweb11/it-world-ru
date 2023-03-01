import React from "react";
import Frame from "../../../../img/Frame.png"
import Component1 from "../../../../img/Component1.png"
import Component from "../../../../img/Component.png"
import Button from "../../button";

const MainContent = () => {
    return (
        <div className="mainContent">
            <h3>3 шага к твоей стажировке </h3>
            <div className="mainContent__blocks">
                <div  className="mainContent__blocks_block">
                    <img src={Frame} alt="Frame"/>
                    <p>Найди стажировку</p>
                </div>
                <div  className="mainContent__blocks_block">
                    <img src={Component1} alt="Component1"/>
                    <p>Составь резюме</p>
                </div>
                <div  className="mainContent__blocks_block">
                    <img src={Component} alt="Component"/>
                    <p>Пройди собеседование</p>
                </div>
            </div>
            <Button button={"ОТКРЫТЬ ПОИСК"}/>
        </div>
    )
}

export default MainContent;