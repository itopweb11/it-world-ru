import React, { useState } from "react";
import Button from "../button";
import {BaseLayout} from "../baseLayout";

const Registration = () => {
    const [registration, setRegistration] = useState(true);
    console.log(registration)

    return (
        <BaseLayout setRegistration={setRegistration}>
            <div className=" container registration">
                <h1 className="registration__title">{registration ? "Регистрация" : "Вход"}</h1>
                <div className="registration__block">
                    <h5 className="registration__block_title">{registration ? "Регистрация" : "Вход"}</h5>
                    <div className="registration__block_content">
                        <div>
                            <p>E-mail</p>
                            <input type="text" placeholder="E-mail"/>
                        </div>
                        <div>
                            <p>Пароль</p>
                            <input type="text" placeholder="Password"/>
                        </div>
                        {
                            registration ?
                                <div>
                                    <p>Повторить пароль</p>
                                    <input type="text" placeholder="Repeat password"/>
                                </div>
                                : ''
                        }
                        {
                            registration ?  <div className="registration__block_button">
                                                <Button button={"Зарегистрироваться"}/>
                                            </div>
                                : <div className="registration__block_buttons">
                                    <Button button={"Вход"}/>
                                    <Button button={"Зарегистрироваться"}/>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default Registration;