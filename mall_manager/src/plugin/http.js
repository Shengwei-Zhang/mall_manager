/*
 * @Author: your name
 * @Date: 2022-01-05 11:20:00
 * @LastEditTime: 2022-01-05 13:30:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/mall_manager/mall_manager/src/plugin/http.js
 */
import axios from "axios"

const MyHttpServer = {}

MyHttpServer.install = Vue => {

  axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
  // 4. add an instance method
  Vue.prototype.$http = axios
  // console.log(Vue.prototype);
}

export default MyHttpServer