<template>
	<Header />
		<transition name="slide-fade">
			
		</transition>
		<router-view/>
	<Footer/>
</template>


<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
	Footer
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap");
body {
  font-family: "Montserrat", sans-serif;
}
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
#app {
	height: 100vh;
	display: flex;
	flex-direction: column;
}
.slide-fade-enter-active {
	transition: all .3s ease;
}
.slide-fade-leave-active {
	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
	transform: translateX(10px);
	opacity: 0;
}
</style>
