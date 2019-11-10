<template>
  <div id="app">
    <Banner />
    <br />
    <br />
    <Advocate />
    <br />
    <br />
    <Services />
    <br />
    <br />
    <DemoProjects />
    <br />
    <br />
    <Customers />
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
import Customers from "./components/Customers";
import Advocate from "./components/Advocate";

export default {
  name: "app",
  components: {
    Banner,
    Services,
    Contact,
    DemoProjects,
    Customers,
    Advocate
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
