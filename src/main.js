import Vue from 'vue'
import App from './App.vue'
import {store} from './Vuex/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el: '#app',
  data: {
    name: 'me'
  },
  store: store
}).$mount('#app')


