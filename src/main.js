import Vue from 'vue'
import { BCarousel } from 'bootstrap-vue'
import { BCarouselSlide } from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.component('b-carousel', BCarousel)
Vue.component('b-carousel-slide', BCarouselSlide)

new Vue({
  render: h => h(App),
}).$mount('#app')
