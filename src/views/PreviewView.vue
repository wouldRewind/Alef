<template>
	<div class="preview">
		<div class="preview__wrapper">
			<div class="preview__personal">
				<h3 class="preview__title">
					Персональные данные
				</h3>
				<Card 
				:isParent="true" 
				:name="'Василий'" 
				:age="31"/>
			</div>
			<div class="preview__children">
				<h3 class="preview__title">
					Дети
				</h3>
				<Card 
				:name="'Петр'" 
				:age="10"/>
				<Card 
				:name="'Никита'" 
				:age="20"/>
				<Card 
				:name="'Виктория'" 
				:age="9"/>
			</div>
		</div>
	</div>
</template>

<script>
import Card from '@/components/Information/Card.vue';


export default {
  name: "PreviewView",
  components: { Card, },
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
