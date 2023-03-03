import React, {useState} from 'react'
import Button from "../button";
import axios from "axios";

const PageHelp = ({setOpen}) => {

    const[email, setEmail] = useState('')
    const[phone, setPhone] = useState('')
    const[comment, setComment] = useState('')
    const[success, setSuccess] = useState(true)
    const[inputData, setInputData] = useState(false)


    const handleSubmit = () => {
        setInputData(true)
        if (email && phone && comment) {
            setSuccess(false)

            let message = `<b>Заявка с сайта</b>\n`;
            message += `<b>E-mail: </b> ${email}\n`;
            message += `<b>Телефон: </b> ${phone}\n`;
            message += `<b>Комментарий: </b> ${comment}\n`;

            axios.post('https://api.telegram.org/bot5815625295:AAGK4cFSFSmaZsLfO4XJ_pztpYWc79tljT0/sendMessage', {
                chat_id: '-1001707536610',
                text: message,
                parse_mode: 'html'
            })
                .then(() => {
                    console.log('error')
                })
        }

    }

    return (
        <>
            <div className={success ? "pageHelpNone" : "pageHelp pageHelpSuccess"}>
                <p>
                    ВАША ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА.
                    НАШ МЕНЕДЖЕР СВЯЖЕТСЯ С ВАМИ В
                    ТЕЧЕНИЕ ОДНОГО РАБОЧЕГО ДНЯ С МОМЕНТА ПОЛУЧЕНИЯ ЗАЯВКИ.
                </p>
                <button onClick={() => setOpen(false)} className="pageHelp__form_button_btn">Закрыть</button>
            </div>
            <div className={success ? "pageHelp" : "pageHelpNone"}>
                <h1>Онлайн форма</h1>
                <p>Заполните форму сейчас и наш специалист свяжется с вами для консультации</p>
                <div className="pageHelp__form">
                    <div>
                        <span>E-mail*</span>
                        <div className="pageHelp__form_input">
                            <input
                                className={!email && inputData ? "error" : ''}
                                type="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="IT-world-russia@gmail.com"
                            />
                            {!email && inputData ? <p>Обязательно для заполнения</p> : ''}
                        </div>
                    </div>
                    <div>
                        <span>Телефон*</span>
                        <div className="pageHelp__form_input">
                            <input
                                className={!phone && inputData ? "error" : ''}
                                name="phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="+7 (___) ___-__-__"
                            />
                            {!phone && inputData ? <p>Обязательно для заполнения</p> : ''}
                        </div>
                    </div>
                    <div>
                        <span>Ваш комментарий</span>
                        <div className="pageHelp__form_input">
                            <textarea
                                className={!comment && inputData ? "error" : ''}
                                name="comment"
                                onChange={e => setComment(e.target.value)}
                                placeholder="Подробнее опишите свою проблему"
                            ></textarea>
                            {!comment && inputData ? <p>Обязательно для заполнения</p> : ''}
                        </div>
                    </div>
                    <div className="pageHelp__form_button">
                        <button onClick={() => setOpen(false)} className="pageHelp__form_button_btn">Закрыть</button>
                        <button className="pageHelp__form_button_btn" type="submit" onClick={handleSubmit} >
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageHelp;