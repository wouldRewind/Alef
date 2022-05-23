<template>
	<p :class="['card', {
		children: !isParent,
		parent: isParent,
	}]">
		{{ name }}, {{ age }} {{ rightAgeEnd(age) }}
		</p>
		<br/>
</template>

<script>
export default {
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
	data: () => ({

	}),
	methods: {
		rightAgeEnd(age) {
			let end;
			let count = age % 100;
			if (count >= 5 && count <= 20) {
				end = 'лет';
			}
			else {
				count = count % 10;
				if (count == 1) {
					end = 'год';
				}
				else if (count >= 2 && count <=4) {
					end = 'года';
				}
				else {
					end = 'лет'
				}
			}
			return end;
		}
	},
}
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
	.parent {

	}
	.children {
		padding: 10px 20px;
		background: #F1F1F1;
		&:not(:last-child) {
			margin-bottom: 20px;
		}
	}
</style>