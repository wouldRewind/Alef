// Общие валидаторы
import { required } from "./common"


// Кастомные валидаторы
const isNumeric = value => Number.isInteger(+value) || 'Введите число!'


import { produceInputTemplate } from "../producer"


const maxLength = 3 // максимальное число символов в инпуте

export default produceInputTemplate('Возраст', [required, isNumeric], maxLength)