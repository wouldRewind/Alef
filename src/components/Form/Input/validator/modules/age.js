// Общие валидаторы
import { required } from "./common"


// Кастомные валидаторы
const isNumeric = value => Number.isInteger(+value) || 'Введите число!'


import { produceInputTemplate } from "../producer"



const inputSetup = {
	label: 'Возраст',
	validators: [required, isNumeric],
	maxLength: 3,
	type: 'number',
}

export default produceInputTemplate(inputSetup)