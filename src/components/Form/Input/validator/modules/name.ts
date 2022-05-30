// Общие валидаторы
import { required } from "./common"
import { v4 } from 'uuid'
import { Validator, InputTemplate } from "../interface/producer"


// Кастомные валидаторы
const correctFormat : Validator = value => /^[a-zA-Zа-яА-Я]+$/ui.test(value) || 'Только буквы!'
const minLength : Validator = value => value.length >= 2 || "Слишком короткое!"


import { produceInputTemplate } from "../producer"

const initialSetup : InputTemplate = {
	label: 'Имя',
	validators: [required, correctFormat, minLength],
	maxLength: 25,
	type: 'text',
	id: v4(),
	value: '',
	touched: false,
	errors: [],
}

export default produceInputTemplate(initialSetup)