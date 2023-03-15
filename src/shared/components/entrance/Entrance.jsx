import React from 'react';
import Button from "../button";
import {BaseLayout} from "../baseLayout";

const Entrance = () => {
    return(
        <BaseLayout>
            <div className=" container registration">
                <h1 className="registration__title">Вход</h1>
                <div className="registration__block">
                    <h5 className="registration__block_title">Вход</h5>
                    <div className="registration__block_content">
                        <div>
                            <p>E-mail</p>
                            <input type="text" placeholder="E-mail"/>
                        </div>
                        <div>
                            <p>Пароль</p>
                            <input type="text" placeholder="Password"/>
                        </div>
                        <div className="registration__block_buttons">
                            <Button button={"Вход"}/>
                            <Button button={"Зарегистрироваться"}/>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default Entrance;