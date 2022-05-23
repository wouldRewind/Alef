export class PersonForm {
	constructor(fields /* Массив полей формы инпута */) {
		this.fields = fields
		this.valid = false
		this.touched = false
	}
	setTouch(val) {
		this.touched = val
	}
	setValid() {
		this.valid = this.fields.every(field => field.isValid())
	}
}
