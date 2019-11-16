<template>
  <div id="app">
    <SingleBanner />
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
    <Footer />
  </div>
</template>

<script>
import Services from "./components/Services";
import SingleBanner from "./components/SingleBanner";
import Contact from "./components/Contact";
import DemoProjects from "./components/DemoProjects";
import Customers from "./components/Customers";
import Advocate from "./components/Advocate";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    SingleBanner,
    Services,
    Contact,
    DemoProjects,
    Customers,
    Advocate,
    Footer
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
