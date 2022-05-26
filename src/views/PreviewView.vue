<template>
	<div class="preview">
		<div class="preview__wrapper">
			<div v-if="parentHasWritten" class="preview__personal">
				<h3 class="preview__title">
					Персональные данные
				</h3>
				<Card 
				:isParent="true" 
				:name="previewParentName" 
				:age="previewParentAge"/>
			</div>
			<div v-if="childrenHasWritten" class="preview__children">
				<h3 class="preview__title">
					Дети
				</h3>
				<Card
				v-for="child in children"
				:key="child.name"
				:name="child.name"
				:age="child.age"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Card from '@/components/Information/Card.vue';
import { mapGetters, mapState } from 'vuex';


export default {
	name: "PreviewView",
	components: { Card, },
	created() {
		console.log(this.children);
	},
	computed: {
		...mapState({
			children: ({ previewChildren }) => previewChildren,
		}),
		...mapGetters(['previewParentName', 'previewParentAge',
		'parentHasWritten', 'childrenHasWritten']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/scss/_const';

.preview {
	flex-grow: 3;
	padding-top: 30px;
}
.preview__wrapper {
	max-width: 600px;
	margin: 0 auto;
}
.preview__title {
	margin: 0 0 20px 0;
	font-weight: 500;
	font-size: 16px;
	color: $textColor;
}
.preview__personal {
	margin-bottom: 60px;
}

@media screen and (max-width: 720px) {
	.preview__wrapper {
	max-width: 300px;
}	
}
</style>
