import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import path from "path"
import $ from "jquery"
import "./assets/liaoning"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/reset.css"
import "./assets/lib/layer_mobile/need/layer.css"
import "./assets/lib/layer_mobile/layer"
import "bootstrap/dist/js/bootstrap.min.js"
import "./assets/lib/easyui/css/easyui_view.css"
import "./assets/lib/easyui/css/icon.css"
import "foundation-datepicker/js/foundation-datepicker.min"
import "foundation-datepicker/js/locales/foundation-datepicker.zh-CN"
import "foundation-datepicker/css/foundation-datepicker.min.css"
import "font-awesome/css/font-awesome.css"
import "./assets/lib/easyui/js/jquery.easyui.min"
import "./assets/lib/easyui/js/easyuizhCN"

console.log = (function(log){
  return function(obj){
    log.call(console,JSON.parse(JSON.stringify(obj)));
  }
})(console.log);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app")
