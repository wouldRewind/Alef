import { PersonForm, produceNewForm } from "@/components/Form/Input/validator"


import age from "@/components/Form/Input/validator/modules/age"
import name from "@/components/Form/Input/validator/modules/name"


import { debounce } from "debounce"

export default () => ({
	state: () => ({
		children: [
			new PersonForm(produceNewForm(name, age)),
			new PersonForm(produceNewForm(name, age))
		],
		maxChildren: 5,
	}),
	getters: {
		canAddChildren: ({ children, maxChildren }) => children.length < maxChildren,
	},
	mutations: {
		addEmptyChildrenForm(state) {
			state.children.push(
				new PersonForm(produceNewForm(name, age))
			)
		},
		deleteChildrenFromStore(state, payload) {
			state.children.splice(payload, 1)
		},
		writeChildrenInputErrors: debounce(function(state, payload) {
			if (state.children.length) {
				const [childrenIndex, fieldIndex] = payload
				state.children[childrenIndex].fields[fieldIndex].errors = state.children[childrenIndex].fields[fieldIndex].getErrors() 
			}
		}, 400)
	},
	actions: {
		addChildren({ commit, getters: { canAddChildren } }, payload) {
			if (canAddChildren) {
				commit('addEmptyChildrenForm', payload)
			} else {
				console.log(canAddChildren)
			}
		},
		deleteChildren({ commit }, payload) {
			commit('deleteChildrenFromStore', payload)
		}
	},
})