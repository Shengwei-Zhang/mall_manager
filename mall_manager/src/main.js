/*
 * @Author: your name
 * @Date: 2022-01-04 13:00:00
 * @LastEditTime: 2022-01-05 13:17:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/mall_manager/mall_manager/src/main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/base.css'
import MyHttpServer from '@/plugin/http.js'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(MyHttpServer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  render: h => h(App)
})
