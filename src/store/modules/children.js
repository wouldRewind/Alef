import { PersonForm, produceNewForm } from "@/components/Form/Input/validator"


import age from "@/components/Form/Input/validator/modules/age"
import name from "@/components/Form/Input/validator/modules/name"


import { debounce } from "debounce"

export default () => ({
	state: () => ({
		children: [
		],
		maxChildren: 5,
	}),
	getters: {
		canAddChildren: ({ children, maxChildren }) => children.length < maxChildren,
		childrenIsValid: ({ children }) => children
		.every(({ fields }) => fields.every(({ errors, touched }) => !errors.length && touched)),
	},
	mutations: {
		addEmptyChildrenForm(state) {
			state.children.push(
				new PersonForm(produceNewForm(name, age))
			)
		},
		updatePreviewChildren(state, payload) {
			state.previewChildren = payload
		},
		deleteChildrenFromStore(state, payload) {
			state.children.splice(payload, 1)
		},
		writeChildrenInputErrors: debounce(function(state, payload) {
			if (state.children.length) {
				const [childrenIndex, fieldIndex] = payload
				state.children[childrenIndex].fields[fieldIndex].errors = state.children[childrenIndex].fields[fieldIndex].getErrors() 
			}
		}, 100)
	},
	actions: {
		addChildren({ commit, getters: { canAddChildren } }, payload) {
			if (canAddChildren) {
				commit('addEmptyChildrenForm', payload)
			}
		},
		deleteChildren({ commit }, payload) {
			commit('deleteChildrenFromStore', payload)
		}
	},
})