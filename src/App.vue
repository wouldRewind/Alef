<template>
  <Header />
  <router-view />
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
#app {
	height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>
