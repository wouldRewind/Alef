<template>
	<transition
	enter-active-class="animate__animated animate__jello"
	leave-active-class="animate__animated animate__zoomOut animate__faster">
		<span class="error" v-if="hasError">
		{{ error }}
		</span>
	</transition>
</template>


<script>
export default {
	name: 'Error',
	props: {
		hasError: {
			type: Boolean,
			required: true
		},
		error: {
			type: String,
			required: true,
		},
	}
}
</script>

<style lang="scss" scoped>
@import '@/scss/_const';


.error {
	color: $errorColor;
	font-size: 11px;
}
</style>