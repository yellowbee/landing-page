<template>
  <div id="app">
    <SingleBanner />
    <main>
      <!-- <section>
        <Advocate />
      </section>-->
      <section>
        <!-- <Services /> -->
      </section>
      <section>
        <DemoProjects />
      </section>
      <section>
        <!-- <Customers /> -->
      </section>
      <section>
        <Contact />
      </section>
    </main>
    <Footer />
  </div>

  <!-- <div
      style="position:absolute; top: 0; left: 0; width: 100vw; height: 100vh; background:red; z-index:1000;"
  ></div>-->
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
  },
  mounted: function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        document.querySelector(href).scrollIntoView({
          behavior: "smooth"
        });
        window.history.pushState(null, null, href);
      });
    });
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

main > section {
  margin-top: 4rem;
}

main {
  margin: 0rem 1rem;
}
</style>
