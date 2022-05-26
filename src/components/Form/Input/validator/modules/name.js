// Общие валидаторы
import { required } from "./common"


// Кастомные валидаторы
const correctFormat = value => /^[a-zA-Zа-яА-Я]+$/ui.test(value) || 'Только буквы!'
const minLength = value => value.length >= 2 || "Слишком короткое!"


import { produceInputTemplate } from "../producer"

const inputSetup = {
	label: 'Имя',
	validators: [required, correctFormat, minLength],
	maxLength: 25,
	type: 'text',
}

export default produceInputTemplate(inputSetup)