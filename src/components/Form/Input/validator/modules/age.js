// Общие валидаторы
import { required } from "./common"


// Кастомные валидаторы
const isNumeric = value => Number.isInteger(value) || 'Возвраст - это число!'
const rangeIsCorrect = value => value >= 0 && value <= 100 || 'Недопустимый диапазон!'


import { produceFormTemplate } from "../producer"

export default produceFormTemplate('Возраст', [isNumeric, rangeIsCorrect, required])