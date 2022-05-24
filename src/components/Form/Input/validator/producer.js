const defaultMaxLength = 30


export const produceInputTemplate = (label, validators, maxLength) => ({
	validators,
	label,
	value: '',
	touched: false,
	valid: false,
	maxLength: maxLength || defaultMaxLength,
	errors: [],
	getErrors() {
		return this.validators.reduce((errors, validator) => {
			const potentialError = validator(this.value)
			if (typeof potentialError === 'string') { //
				return [...errors, potentialError]
			}
			return errors
		}, [])
	},
	setValidInput() {
		this.valid = this.validators.every(validator => typeof validator(this.value) !== 'string')
	},
	setTouchedInput(val) {
		this.touched = val
	}
})
