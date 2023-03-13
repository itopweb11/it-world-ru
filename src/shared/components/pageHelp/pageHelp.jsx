import React, {useState} from 'react'
import Button from "../button";
import axios from "axios";
import MaskedInput from "react-text-mask/dist/reactTextMask";

const PageHelp = ({setOpen}) => {

    const[email, setEmail] = useState('')
    const[errorEmail, setErrorEmail] = useState('')
    const[phone, setPhone] = useState('')
    const[comment, setComment] = useState('')
    const[success, setSuccess] = useState(true)
    const[inputData, setInputData] = useState(false)
    const[validEmail, setValidEmail] = useState(false)
    console.log(phone)

    const handleSubmit = () => {
        setInputData(true)
        /*if (!email && inputData || !validEmail){
            setErrorEmail('')
        } else setErrorEmail('Обязательно для заполнения')

        if (!validEmail && inputData && !errorEmail){
            setErrorEmail('')
        } else setErrorEmail('Некоректный email')*/
        //!email && inputData ? setErrorEmail('') : setErrorEmail('Обязательно для заполнения')
        //!validEmail && inputData && !errorEmail ? setErrorEmail('') : setErrorEmail('Некоректный email')
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



    const handleChange = event => {
        setEmail(event.target.value)
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailRegex.test(String(event.target.value).toLowerCase())) {
            setValidEmail(true)
        } else setValidEmail(false)
    };

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
                                className={!email && inputData && !validEmail ? "error" : ''}
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="IT-world-russia@gmail.com"
                            />
                            {!email && inputData ? <p>Обязательно для заполнения</p>  : <p></p>}
                        </div>
                    </div>
                    <div>
                        <span>Телефон*</span>
                        <div className="pageHelp__form_input">
                            <MaskedInput
                                mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/,' ', /\d/, /\d/]}
                                placeholder="+7 (___) ___-__-__"
                                guide={true}
                                className={!phone && inputData ? "error" : ''}
                                name="phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
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