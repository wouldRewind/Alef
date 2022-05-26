const defaultMaxLength = 30


export const produceInputTemplate = ({ label, validators, maxLength, type }) => ({
	validators,
	label,
	type,
	value: '',
	touched: false,
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
	setTouch(val) {
		this.touched = val
	}
})
