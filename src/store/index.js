import { createStore } from 'vuex'


import children from './modules/children'
import parent from './modules/parent'

export default createStore({
	modules: {
		children: children(),
		parent: parent(),
	},
	state: () => ({
		previewChildren: [],
		previewParent: {},
	}),
	getters: {
		canSave: (state, { parentIsValid, childrenIsValid }) => parentIsValid && childrenIsValid,


		parentHasWritten: ({ previewParent }) => !!Object.keys(previewParent).length,
		childrenHasWritten: ({ previewChildren }) => !!Object.keys(previewChildren).length,


		previewParentName: ({ previewParent: { name } }) => name,
		previewParentAge: ({ previewParent: { age } }) => +age,
	},
	mutations: {
		writePreviewChildren(state) {
			const children = state.children.children
			state.previewChildren = children.reduce((acc, { fields }) => {
				const [name, age] = fields.reduce((acc, { value }) => [...acc, value], [])
				return [...acc, { name, age }]
			}, [])
		},
		writePreviewParent(state) {
			const parentFields = state.parent.parent.fields
			const [name, age] = parentFields.reduce((acc, { value }) => [...acc, value], [])
			state.previewParent = {
				name, age
			}
		},
	},
	actions: {
		updatePreview({ commit, getters: { canSave } }) {
			if (canSave) {
				commit('writePreviewChildren')
				commit('writePreviewParent')
			}
		},
	},
})
