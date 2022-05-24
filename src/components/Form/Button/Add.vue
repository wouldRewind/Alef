<template>
	<div class="wrapper">
		<button
		@click="onAdd"
		:class="['button', {'button_disabled': disabled}]"
		type="button">
			<span class="button__icon"/>
			<span class="button__text">Добавить ребенка</span>
		</button>
	</div>
</template>

<script>
export default {
	name: 'AddButton',
	props: {
		onAdd: {
			type: Function,
			required: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		}
	},
}
</script>

<style lang="scss" scoped>
@import '@/scss/_const';
	.button__text {
		font-family: "Montserrat", serif;
		font-size: 14px;
		color: $blueColor;
		transition: $transition;
	}
	.button__icon {
		transition: $transition;
		position: relative;
		display: inline-block;
		height: 16px;
		width: 16px;
		margin-right: 8px;
		&::after, &::before {
			content: '';
			transition: inherit;
			position: absolute;
			background: $blueColor;
			border-radius: 138.148px;
		}
		&::after {
			width: 100%;
			height: 2px;
			top: calc(50% - 1px);
			left: 0;
		}
		&::before {
			height: 100%;
			width: 2px;
			left: calc(50% - 1px);
		}
	}
	.button {
		border: 2px solid $blueColor;
		border-radius: 100px;
		cursor: pointer;
		transition: $transition;
		padding: 12px 20px 12px 22px;
		background: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		&:hover:not(&_disabled) {
			background: $blueColor;
			&  .button__text {
				color: white;
			}
			&  .button__icon {
				&::after, &::before {
					background: white;
				}
			}
		}
		&_disabled {
			border: 2px solid $disableColor;
			cursor: default;
			& .button__text {
				color: $disableColor;
			}
			& .button__icon {
				&::after, &::before {
					background: $disableColor;
				}
			}
		}
		
	}
</style>