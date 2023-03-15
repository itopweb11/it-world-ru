import React, {useRef} from "react";
import {BaseLayout} from "../baseLayout";
import summary from  "../../../img/summary.png"
import summaryDesc1 from  "../../../img/summaryDesc1.png"
import summaryDesc2 from  "../../../img/summaryDesc2.png"
import summary1 from  "../../../img/summary1.png"
import summary2 from  "../../../img/summary2.png"
import Component from  "../../../img/Component 5.png"
import Slider from "react-slick";
import {dataSummarySlider} from "../summary/dataSummarySlider";
import arrow_dropLeft from "../../../img/arrow_dropLeft.png";
import arrow_dropRight from "../../../img/arrow_dropRight.png";

const Summary = () => {
    const sliderRef = useRef(null)
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        /*appendDots: dots => {
            console.log("dots", dots);
            return (
                <div className="slider__dots_container">
                    <div className="slider__dots_container_block">
                        <button onClick={() => (sliderRef.current.slickPrev())}>В начало</button>
                        <ul className="slider__dots"> {dots} </ul>
                        <button onClick={() => (sliderRef.current.slickNext())}>Дальше</button>
                    </div>
                </div>
            )
        },*/
        /*customPaging: i => (
            <div className="slider__dot">
                {i + 1}
            </div>
        )*/
    }
    return (
        <BaseLayout>
            <div className="summary">
                <div className="summary__ideal">
                    <h3>Твоё идеальное резюме</h3>
                    <div className="summary__ideal__block">
                        <div className="summary__ideal__block_desc">
                            <p className="p1">Добавь фото</p>
                            <p className="p2">Расскажи о своих навыках и увлечениях</p>
                        </div>
                        <img src={summary} alt="summary"/>
                        <div className="summary__ideal__block_desc">
                            <p className="p3">Расскажи <br/>о практиках, опыте работы</p>
                            <p className="p4">Опиши своё образование</p>
                            <p className="p5">Не забудь упомянуть <br/>дополнительное <br/>образование</p>
                        </div>
                    </div>
                </div>
                <div className="summary__drafting">
                    <h3>Советы по составлению резюме</h3>
                    <div className="summary__drafting_image">
                        <div className="summary__drafting_image_block1">
                            <img src={summaryDesc1} alt="summaryDesc1"/>
                            <img src={summary2} alt="summary2"/>
                        </div>
                        <div className="summary__drafting_image_block2">
                            <img src={summary1} alt="summary1"/>
                            <img src={summaryDesc2} alt="summaryDesc2"/>
                        </div>
                    </div>
                </div>
                <div className="summary__content">
                    <h4>Совет 1: Структура и содержание</h4>
                    <div className="summary__content_block">
                        <div className="summary__content_block_list">
                            <p>
                                Кратко сформулируй всё, что делает именно тебя идеальным кандидатом для данной позиции.
                                Резюме обязательно содержит
                            </p>
                            <p>-личную информацию (ФИО, номер телефона, адрес электронной почты);</p>
                            <p> -образование;</p>
                            <p>-опыт работы;</p>
                            <p>-дополнительное образование (также включите продолжающееся обучение, добавьте онлайн-курсы, семинары);</p>
                            <p>- навыки (знание иностранных языков, специализированных компьютерных программ, даже наличие водительских прав);</p>
                            <p>-свои интересы.</p>
                        </div>
                        <p>
                            Переверни хронологический порядок. Начни с наиболее актуального места работы или обучения.
                        </p>
                    </div>
                    <h4>Совет 2: Числа</h4>
                    <div className="summary__content_block">
                        <p  className="summary__content_block_desc">
                            Цифры выделяются в море текста, что также делает резюме более удобным в чтении. Добавь цифры,
                            статистику, проценты, метрики или диапазон к любому навыку или достижению в резюме,
                            чтобы сделать его более конкретным.
                        </p>
                        <p className="summary__content_block_diagram">
                            Используй диаграммы или другие необычные решения, чтобы показать эффективность твоих достижений
                        </p>
                    </div>
                    <h4>Совет 3: Релевантный опыт</h4>
                    <div className="summary__content_block">
                        <p className="summary__content_block_desc">
                            Если ты прошёл курс по Adobe Photoshop или обучился любому другому навыку, не стесняйся
                            упомянуть об этом, если это соответствует направлению работы.
                        </p>
                    </div>
                    <h4>Совет 4: Фото</h4>
                    <div className="summary__content_block">
                        <p className="summary__content_block_desc">
                            Выбирая фото, стоит обратить внимание и на выражение лица. Приветствуется дружелюбие,
                            лёгкая улыбка. Лицо должно быть открытым, с доброжелательным выражением. Следует избегать
                            снимков в профиль и яркого фоне. Стоит отдать предпочтение нейтральному фону.
                        </p>
                    </div>
                    <h4>Совет 5: Дизайн</h4>
                    <div className="summary__content_block">
                        <div className="summary__content_block_list">
                            <p>Ориентируйся на цвета компании</p>
                            <p>
                                Использование цветовой схемы логотипа компании показывает вашу подготовленность и то,
                                что вы хотите получить работу.
                            </p>
                            <p>Используй наши образцы.</p>
                        </div>
                        <p>Обязательно дай своему файлу название. Например, ФИ_резюме_тестировщик.</p>
                    </div>
                    <span>Пусть твоя личность сияет!</span>
                </div>
                <div className="summary__sample">
                    <h3 className="summary__sample_title">Скачать образцы</h3>
                    <div className='slider summary__sample_slider'>
                        <Slider {...settings} ref={sliderRef}>
                            {dataSummarySlider.map((card, index) => (
                                <div className="slider__block summary__sample_slider_block" key={index}>
                                    <h2 className="slider__block_nameCompany summary__sample_slider_block_nameCompany">{card.name}</h2>
                                    <img className="slider__image" alt={card.name} src={card.imageSrc} />
                                    <a className="slider__block_desc summary__sample_slider_block_desc" href={card.imageSrc} download="">
                                        {card.desc}
                                    </a>
                                </div>
                            ))}
                        </Slider>
                        <div className="slider__controls">
                            <div onClick={() => (sliderRef.current.slickPrev())}>
                                <img src={arrow_dropLeft} alt="arrow_dropLeft"/>
                            </div>
                            <div onClick={() => (sliderRef.current.slickNext())}>
                                <img src={arrow_dropRight} alt="arrow_dropRight"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default Summary;