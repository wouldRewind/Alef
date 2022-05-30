type ErrorText = string


type NoError = true


export type Error = NoError | ErrorText


export type Validator = (value: string) => Error


export interface Producer extends InputTemplate {
	getErrors: () => Array<Error>,
	setTouch: (val: boolean) => void
}

export interface InputTemplate {
	validators: Array<Validator>,
	label: string,
	type: string,
	value: string,
	touched: boolean,
	maxLength: number,
	errors: Array<Error>,
	id: string | number,
}