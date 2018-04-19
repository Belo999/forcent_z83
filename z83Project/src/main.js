import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import VueClip from 'vue-clip'
import VeeValidate from 'vee-validate'
 


// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueClip)
Vue.use(VeeValidate)
new Vue({
  router,
  Vuetify,
  render: h => h(App)
}).$mount('#app')
