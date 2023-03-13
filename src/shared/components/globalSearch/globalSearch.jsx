import React from "react";
import {BaseLayout} from "../baseLayout";
import Union from  "../../../img/Union.svg"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from "../button";

const GlobalSearch = () => {
    return (
        <BaseLayout>
            <div className='globalSearch'>
                <div className='globalSearch__favorites'>
                    <img src={Union} alt="Union"/>
                    <p>Избранное</p>
                </div>
                <h1 className='globalSearch__title'>Глобальный поиск</h1>
                <div className='globalSearch__forms'>
                    <FormControl className='formControl'>
                        <InputLabel htmlFor="grouped-native-select">Город</InputLabel>
                        <Select native defaultValue="" id="grouped-native-select">
                            <option aria-label="None" value="Город" />
                            <option>Москва</option>
                            <option>Санкт-Петербург</option>
                            <option>Екатеринбург</option>
                            <option>Казань</option>
                            <option>Нижний Новгород</option>
                        </Select>
                    </FormControl>
                    <FormControl className='formControl'>
                        <InputLabel htmlFor="grouped-native-select">Направление</InputLabel>
                        <Select native defaultValue="" id="grouped-native-select">
                            <option aria-label="None" value="Направление" />
                            <option>Разработчик</option>
                            <option>Дизайнер</option>
                            <option>Аналитик</option>
                            <option>Маркетолог</option>
                            <option>Менеджер</option>
                        </Select>
                    </FormControl>
                    <FormControl className='formControl'>
                        <InputLabel htmlFor="grouped-native-select">Длительность</InputLabel>
                        <Select native defaultValue="" id="grouped-native-select">
                            <option aria-label="None" value="Длительность" />
                            <option>1 месяц</option>
                            <option>3 месяц</option>
                            <option>6 месяц</option>
                            <option>1 год</option>
                            <option>больше года</option>
                        </Select>
                    </FormControl>
                    <FormControl className='formControl'>
                        <InputLabel htmlFor="grouped-native-select">Формат</InputLabel>
                        <Select native defaultValue="" id="grouped-native-select">
                            <option aria-label="None" value="Формат" />
                            <option>Онлайн</option>
                            <option>Оффлайн</option>
                            <option>Гибридный формат</option>
                        </Select>
                    </FormControl>
                </div>
                <div className='globalSearch__button'>
                    <Button button={"НАЧАТЬ ПОИСК"}/>
                </div>

            </div>
        </BaseLayout>
    )
}

export default GlobalSearch;