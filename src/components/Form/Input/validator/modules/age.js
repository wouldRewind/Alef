// Общие валидаторы
import { required } from "./common"


// Кастомные валидаторы
const isNumeric = value => Number.isInteger(+value) || 'Введите число!'
const maxLength = value => value.length <= 3 || 'Многовато!'

import { produceInputTemplate } from "../producer"



const inputSetup = {
	label: 'Возраст',
	validators: [required, isNumeric, maxLength],
	maxLength: 3,
	type: 'number',
}

export default produceInputTemplate(inputSetup)