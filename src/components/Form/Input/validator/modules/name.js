// Общие валидаторы
import { required } from "./common"


// Кастомные валидаторы
const correctFormat = value => /^[a-zA-Zа-яА-Я]+$/ui.test(value) || 'Некорректный формат имени!'


import { produceFormTemplate } from "../producer"



export default produceFormTemplate('Имя', [correctFormat, required])