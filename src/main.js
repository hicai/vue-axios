import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Button, Icon, Toast, ContactList, ContactEdit,Popup} from 'vant';
Vue.use(Button);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(ContactList);
Vue.use(ContactEdit);
Vue.use(Popup);

Vue.config.productionTip = false
const axiosIns = axios.create({
   baseURL:'http://localhost:9000/api',
   timeout:1000
})

Vue.prototype.$axios = axiosIns
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
