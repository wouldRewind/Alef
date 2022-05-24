<template>
	<div class="wrapper">
		<button
		@click="$emit('onSave')" 
		type="button" 
		class="button">
			Сохранить
		</button>
	</div>
</template>

<style lang="scss" scoped>
@import '@/scss/_const';
	.wrapper {
		display: inline-block;
	}
	.button {
		font-family: "Montserrat", serif;
		border: none;
		cursor: pointer;
		transition: all .3s ease;
		background: $blueColor;
		color: white;
		padding: 10px 20px;
		font-size: 14px;
		border-radius: 100px;
		&:hover {
			background: lighten($blueColor, 5);
		}
	}
</style>