export const produceFormTemplate = (label, validators) => ({
	validators,
	label,
	value: null,
	getErrors() {
		return this.validators.reduce((errors, validator) => {
			const potentialError = validator(this.value)
			if (typeof potentialError === 'string') { //
				return [...errors, potentialError]
			}
			return errors
		}, [])
	},
	isValid() {
		return this.validators.every(validator => typeof validator(this.value) !== 'string')
	}
})