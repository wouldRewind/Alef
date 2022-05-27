import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'form',
		component: () => import('@/views/FormView.vue')
	},
	
	{
		path: '/preview',
		name: 'preview',
		component: () => import('@/views/PreviewView.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
