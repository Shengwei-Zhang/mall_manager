/*
 * @Author: your name
 * @Date: 2022-01-04 13:00:00
 * @LastEditTime: 2022-01-05 14:44:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/mall_manager/mall_manager/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
// import { component } from 'vue/types/umd'
import Home from "@/components/home/Home.vue"


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: "home",
      path: "/",
      component: Home
    }
  ]
})
