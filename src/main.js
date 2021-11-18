import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
// import './plugins/vant.js'
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入全局样式
import './assets/css/global.css'

Vue.use(Vant)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
