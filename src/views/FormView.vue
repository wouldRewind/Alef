<template>
  <div class="form">
    <div class="form__wrapper">
		<div class="parent-wrap">
			<h3 class="form__title">
				Персональные данные
			</h3>
			<ul class="form-parent">
				<li 
				v-for="(item, fieldIndex) in parent.fields"
				:key="fieldIndex"
				class="form-parent__field">
					<Input
					@input="writeParentInputErrors(fieldIndex)"
					@setTouched="item.setTouch(true)"
					v-model="item.value"
					:errors="item.errors"
					:type="item.type"
					:maxLength="item.maxLength"
					:label="item.label"/>
				</li>
			</ul>
		</div>
		<div class="form-children">
			<header class="form-children__header">
				<h3 class="form-children__title">
					Дети (макс. {{ maxChildren }})
				</h3>
				<AddButton
				:disabled="!canAddChildren"
				:onAdd="addChildren"/>
			</header>
			<TransitionGroup
			tag="ul"
			enterActiveClass="animate__animated animate__lightSpeedInLeft"
			leaveActiveClass="animate__animated animate__lightSpeedOutLeft"
			class="form-children__list"
			>
				<li 
				v-for="(item, childrenIndex) in children"
				:key="childrenIndex"
				class="form-children__item">
					<Input
					class="form-children__input"
					v-for="(input, fieldIndex) in item.fields"
					v-model="input.value"
					@input="writeChildrenInputErrors([childrenIndex, fieldIndex])"
					@setTouched="input.setTouch(true)"
					:key="fieldIndex"
					:type="input.type"
					:errors="input.errors"
					:maxLength="input.maxLength"
					:label="input.label"
					/>
					<DeleteButton
					:onDelete="handleDeleteClick(childrenIndex)"
					/>
				</li>
			</TransitionGroup>
		</div>
		<div class="form-save">
			<SaveButton
			@onSave="updatePreview"
			:disabled="!canSave"
			/>
		</div>
	</div>
  </div>
</template>

<script>
// import { TransitionGroup } from '@vue/runtime-dom'
import SaveButton from '@/components/Form/Button/Save.vue'
import AddButton from '@/components/Form/Button/Add.vue'
import DeleteButton from '@/components/Form/Button/Delete.vue'
import Input from '@/components/Form/Input/Index.vue'


import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'


export default {
	components: { Input, AddButton, DeleteButton, SaveButton, },
	computed: {
		...mapState({
			children: ({ children }) => children.children,
			parent: ({ parent }) => parent.parent,
			maxChildren: ({ children }) => children.maxChildren,
		}),
		...mapGetters(['canAddChildren','canSave']),
	},
	methods: {
		...mapMutations([
			'writeParentInputErrors',
			'writeChildrenInputErrors',
			'writeToPreview'
		]),
		...mapActions([
			'addChildren',
			'deleteChildren',
			'updatePreview'
		]),
		handleDeleteClick(index) {
			return () => this.deleteChildren(index)
		},
	},
}
</script>


<style lang="scss" scoped>
@import '@/scss/_const';
.form-parent {
	list-style-type: none;
	padding: 0;
	margin-bottom: 33px;
}
.form-parent__field {
	&:not(:last-child) {
		margin-bottom: 10px;
	}
}
.form__wrapper {
	max-width: 616px;
	margin: 0 auto;
}
.form__title {
	font-weight: 500;
	font-size: 16px;
	margin-bottom: 20px;
	color: $textColor;
}
.form {
	flex: 3;
	padding-top: 30px;
}
.form-save {
	margin-bottom: 30px;
}
.form-children {
	margin-bottom: 30px;
}
.form-children__header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}
.form-children__title {
	font-weight: 500;
	font-size: 16px;
	color: $textColor;
}
.form-children__list {
	list-style-type: none;
}
.form-children__item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	&:not(:last-child) {
		margin-bottom: 10px;
	}
}
.form-children__input {
	margin-right: 18px;
}
.list-move {
	transition: $transition;
}
.list-enter-active {
	transition: $transition;
}
.list-leave-active {
	transition: none;
}
.list-leave-to {
	opacity: 0;
}
.list-enter-from {
	opacity: 0;
	transform: translateY(-30px);
}
.list-leave-active {
	position: absolute;
}
</style>
