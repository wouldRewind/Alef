<template>
	<label :class="['input-label', { error : hasError }]" for="input">
		<Caption
		:label="label"
		:focused="focused"/>
		<Error
		class="input-error"
		:hasError="hasError"
		:error="priorityError"
		/>
		<br>
		<input
		autocomplete="off"
		@focus="handleFocus"
		@blur="handleBlur"
		@input="handleInput"
		:maxlength="maxLength"
		id="input"
		:type="type"
		class="input"
		:value="modelValue">
	</label>
</template>

<script>
import Error from './Error.vue';
import Caption from './Caption.vue'


export default {
	name: 'Input',
	components: { Error, Caption },
	props: {
		label: {
			required: true,
			type: String,
		},
		modelValue: {
			required: true,
			type: String,
		},
		errors: {
			type: Array,
			required: true,
		},
		maxLength: {
			type: Number,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		focused: false,
	}),
	methods: {
		handleInput(event) {
			this.$emit('update:modelValue', event.target.value);
			this.$emit('setTouched')
		},
		handleFocus() {
			this.focused = true
		},
		handleBlur() {
			this.focused = false
		},
		handleTouch(event) {
			this.$emit('onTouch', event)
		}
	},
	computed: {
		hasError() {
			return Boolean(this.errors.length)
		},
		priorityError() {
			return String(this.errors[0])
		}
	},
}
</script>

<style lang="scss" scoped>
@import '@/scss/_const';

.input {
	border: none;
	outline: none;
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
}
.input-label {
	position: relative;
	display: inline-block;
	transition: $transition;
	border: 1px solid #F1F1F1;
	border-radius: 4px;
	padding: 9px 0 6px 16px;
	width: 100%;
	&.error {
		border: 1px solid $errorColor;
	}
}
.input-caption {
	color: $greyColor;
	font-size: 13px;
	transition: $transition;
	&.focused {
		font-size: 11px;
		font-weight: 600;
	}
}
.input-error {
	position: absolute;
	top: -8px;
	left: 8px;
	padding: 0 8px 0 8px;
	background: white;
	z-index: 10;
}
.input {
	width: 100%;
	color: $textColor;
	font-size: 14px;
	font-family: "Montserrat", serif;
	font-weight: 400;
}
.error-appear-enter, .error-appear-leave-to {
	opacity: 0;
}
.error-appear-enter-to {
	opacity: 1;
}
.error-appear-enter-active, .error-appear-leave-active {
	transition: $transition;
}

</style>