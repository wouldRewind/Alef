import { PersonForm, produceNewForm } from "@/components/Form/Input/validator"


import age from "@/components/Form/Input/validator/modules/age"
import name from "@/components/Form/Input/validator/modules/name"


import debounce from "debounce"

export default () => ({
	state: () => ({
		parent: new PersonForm(produceNewForm(name, age)),
	}),
	getters: {
	},
	mutations: {
		writeParentInputErrors: debounce(function(state, payload) {
			if (state.parent !== null) {
				state.parent.fields[payload].errors = state.parent.fields[payload].getErrors() 
			}
		}, 400),
	},
	actions: {
	},
})