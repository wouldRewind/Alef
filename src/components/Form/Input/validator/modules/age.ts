// Общие валидаторы
import { required } from "./common"
import { InputTemplate, Validator } from "../interface/producer"


// Кастомные валидаторы
const isNumeric : Validator = value => Number.isInteger(+value) || 'Введите число!'
const maxLength : Validator = value => value.length <= 3 || 'Многовато!'


import { produceInputTemplate } from "../producer"
import { v4 } from "uuid"


const initialSetup : InputTemplate = {
	label: 'Возраст',
	validators: [required, isNumeric, maxLength],
	maxLength: 3,
	type: 'number',
	value: '',
	touched: false,
	errors: [],
	id: v4(),
}


export default produceInputTemplate(initialSetup)