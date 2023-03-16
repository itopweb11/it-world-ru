import React from 'react';
import {BaseLayout} from "../baseLayout";
import {Link} from "react-router-dom";

const PageError = () => {
    return (
        <BaseLayout>
            <div className="pageError">
                <h1 className="pageError__title">Ошибка 404</h1>
                <div className="pageError__desc">
                    <p>Кажется, что-то пошло не так!</p>
                    <p>
                        Страница, которую Вы запрашиваете, не существует. Возможно она устарела, была удалена,
                        или был введен неверный адрес в адресной строке.
                    </p>
                </div>
                <Link to="/">
                    <button className="pageError__btn">НА ГЛАВНУЮ</button>
                </Link>
            </div>
        </BaseLayout>
    )
}

export default PageError;