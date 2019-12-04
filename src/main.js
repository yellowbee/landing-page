import "./polyfill";
import Vue from 'vue';
import { BCarousel } from 'bootstrap-vue';
import { BCarouselSlide } from 'bootstrap-vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/main.css';
import VueScrollReveal from 'vue-scroll-reveal';
import { BForm } from 'bootstrap-vue';
import { BFormGroup } from 'bootstrap-vue';
import { BFormInput } from 'bootstrap-vue';
import { BButton } from 'bootstrap-vue';
import { BFormTextarea } from 'bootstrap-vue';

Vue.config.productionTip = false;
Vue.component('b-carousel', BCarousel);
Vue.component('b-carousel-slide', BCarouselSlide);

Vue.component('b-form', BForm);
Vue.component('b-form-group', BFormGroup);
Vue.component('b-form-input', BFormInput);
Vue.component('b-button', BButton);
Vue.component('b-form-textarea', BFormTextarea);

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  distance: '100px',
});

// Enable hover effect on touchable device
document.addEventListener("touchstart", function () { });

new Vue({
  render: h => h(App),
}).$mount('#app');
