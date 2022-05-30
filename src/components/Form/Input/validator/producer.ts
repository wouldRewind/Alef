import { v4 } from 'uuid'
import { Validator, Producer, Error, InputTemplate } from './interface/producer'


export const produceInputTemplate = ({ label, validators, maxLength = 30, type } : InputTemplate) : Producer  => ({
	validators,
	label,
	type,
	value: '',
	touched: false,
	maxLength,
	errors: [],
	id: v4(),
	getErrors() {
		return this.validators.reduce((errors: Array<Error>, validator: Validator) : Array<Error> => {
			const potentialError = validator(this.value)
			if (typeof potentialError === 'string') { //
				return [...errors, potentialError]
			}
			return errors
		}, [])
	},
	setTouch(val : boolean) {
		this.touched = val
	}
})
