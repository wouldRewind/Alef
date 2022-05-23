<template>
  <header class="header">
    <div class="header__wrapper">
      <nav class="header-nav">
        <router-link active-class="header-nav__link_active" class="header-nav__link" to="/form">Форма</router-link>
        <router-link active-class="header-nav__link_active" class="header-nav__link" to="/preview">
          Превью
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import '@/scss/_const';
	.header {
		padding-bottom: 24px;
		padding-top: 28px;
		border-bottom: 1px solid rgba(17, 17, 17, 0.1);;
	}
	.header__wrapper {
		display: flex;
		justify-content: center;
	}
	.header-nav {
		display: inline-block;
	}
	.header-nav__link {
		text-decoration: none;
		color: $textColor;
		font-size: 14px;
		&:first-child {
			margin-right: 24px;
		}
		&_active {
			color: $blueColor;
		}
	}

</style>