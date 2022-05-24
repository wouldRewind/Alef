<template>
	<div class="wrapper">
		<button
		@click="onDelete"
		class="delete"
		type="button">
			Удалить
		</button>
	</div>
</template>

<script>
export default {
	name: 'DeleteButton',
	props: {
		onDelete: {
			type: Function,
			required: false,
		},
	},
}
</script>

<style lang="scss" scoped>
@import '@/scss/_const';
	.wrapper {
		display: inline-block;
	}
	.delete {
		border: none;
		background: transparent;
		cursor: pointer;
		transition: $transition;
		color: $blueColor;
		font-size: 14px;
		&:hover {
			color: darken($blueColor, 10);
		}
	}
</style>

