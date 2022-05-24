<template>
	<div class="wrapper">
		<button
		@click="$emit('onSave')" 
		type="button" 
		:class="['button', {'button_disabled': disabled }]">
			Сохранить
		</button>
	</div>
</template>


<script>
export default {
	props: {
		disabled: {
			type: Boolean,
			default: false,
		}
	},
}
</script>

<style lang="scss" scoped>
@import '@/scss/_const';
	.wrapper {
		display: inline-block;
	}
	.button {
		font-family: "Montserrat", serif;
		border: none;
		cursor: pointer;
		transition: $transition;
		background: $blueColor;
		color: white;
		padding: 10px 20px;
		font-size: 14px;
		border-radius: 100px;
		border: 1px solid transparent;
		&:hover:not(&_disabled) {
			background: white;
			color: $blueColor;
			border: 1px solid $blueColor;
		}
		&_disabled {
			background: transparent;
			color: $disableColor;
			border: 1px solid $disableColor;
			cursor: default;
		}
	}
</style>