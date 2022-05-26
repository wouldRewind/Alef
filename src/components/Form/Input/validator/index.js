/* Шаблон инпута - объект, импортируемый из файла. При создании формы я должен передавать в конструктор новые шаблоны(т.е объекты с разными ссылками), чтобы каждый инпут не зависил от другого. produceNewForm принимает такие шаблоны и возвращает новый список шаблонов(описаний инпута), который идет на вход конструктора класса PersonForm */
export const produceNewForm = (...fieldsArray) => fieldsArray.map(field => ({
	...field,
}))


export class PersonForm {
	constructor(fields /* Массив полей формы инпута */) {
		this.fields = fields
		this.valid = false
		this.touched = false
	}
}
