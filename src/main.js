import Vue from 'vue'
import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'
// import App from './App.vue'
// import Desktop1 from './Desktop1.vue'
// import AnimSidebar from './AnimSidebar.vue'
// import DaySpan from './DaySpan.vue'
import Desktop5 from './Desktop5.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vuetify/dist/vuetify.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

import './style/style.css'

Vue.use(Vuetify)
Vue.use(BootstrapVue)

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(Desktop5),
}).$mount('#app')
