import { createStore } from 'vuex'


import children from './modules/children'
import parent from './modules/parent'

export default createStore({
	modules: {
		children: children(),
		parent: parent(),
	},
	state: () => ({
	}),
	getters: {
	},
	mutations: {
	},
	actions: {
	},
})
