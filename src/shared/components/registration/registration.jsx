import React from "react";
import Button from "../button";
import {BaseLayout} from "../baseLayout";

const Registration = () => {
    return (
        <BaseLayout>
            <div className=" container registration">
                <h1 className="registration__title">Регистрация</h1>
                <div className="registration__block">
                    <h5 className="registration__block_title">Регистрация</h5>
                    <div className="registration__block_content">
                        <div>
                            <p>E-mail</p>
                            <input type="text" placeholder="E-mail"/>
                        </div>
                        <div>
                            <p>Пароль</p>
                            <input type="text" placeholder="Password"/>
                        </div>
                        <div>
                            <p>Повторить пароль</p>
                            <input type="text" placeholder="Repeat password"/>
                        </div>
                        <div className="registration__block_button">
                            <Button button={"Зарегистрироваться"}/>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default Registration;