import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router.js'
import store from './store.js'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  data:{
    state: store.state,
  },
  render: h => h(App),
  router,
}).$mount('#app')
