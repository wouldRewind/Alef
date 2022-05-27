<template>
	<span :class="['caption', { focused }]">
		{{ label }}
	</span>
</template>


<script>
export default {
	name: 'Error',
	props: {
		focused: {
			type: Boolean,
			required: true
		},
		label: {
			type: String,
			required: true,
		},
	}
}
</script>

<style lang="scss" scoped>
@import '@/scss/_const';


.caption {
	color: $errorColor;
	font-size: 11px;
	color: $greyColor;
	font-size: 13px;
	transition: $transition;
	&.focused {
		font-size: 11px;
		font-weight: 600;
	}
}
</style>