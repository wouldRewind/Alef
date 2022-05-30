<template>
	<p :class="['card', {
		children: !isParent,
	}]">
		{{ name }}, {{ age }} {{ trueAge(age) }}
		</p>
		<br/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import trueAge from './trueAge'
export default defineComponent({
	name: 'Card',
	props: {
		name: {
			required: true,
			type: String,
		},
		age: {
			required: true,
			type: Number,
		},
		isParent: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		trueAge,
	},
})
</script>

<style lang="scss" scoped>
@import '@/scss/_const';


.card {
	display: inline-block;
	border-radius: 5px;
	color: $textColor;
	font-weight: 700;
	font-size: 16px;
	margin: 0;
}
.children {
	padding: 10px 20px;
	background: #F1F1F1;
	&:not(:last-child) {
		margin-bottom: 20px;
	}
}
</style>