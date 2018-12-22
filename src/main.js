// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//require public css
import './assets/css/indexPage.css'
import './assets/css/OverviewIndex.css';
import './assets/css/news.css'
//require public js
// import './assets/js/OverviewInders.js'
//require jquery
import $ from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h){
    return h(App)
  }
})
