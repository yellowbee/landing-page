<template>
  <div id="app">
    <Banner />
    <br />
    <br />
    <Services />
    <br />
    <br />
    <Contact />
    <div style="padding: 3rem 0;">footer</div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Contact from "./components/Contact";

export default {
  name: "app",
  components: {
    Banner,
    Services,
    Contact
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
