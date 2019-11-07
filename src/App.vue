<template>
  <div id="app">
    <Banner />
    <br />
    <br />
    <Services />
    <br />
    <br />
    <DemoProjects />
    <br />
    <br />
    <Contact />
    <div style="padding: 3rem 0;">footer</div>
  </div>
</template>

<script>
import Services from "./components/Services";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import DemoProjects from "./components/DemoProjects";

export default {
  name: "app",
  components: {
    Banner,
    Services,
    Contact,
    DemoProjects
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
