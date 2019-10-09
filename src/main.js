// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入样式重置
import '../static/css/reset.css'

//引入echarts
import echarts from 'echarts';

Vue.prototype.$echarts = echarts;

// 引入及使用 ElementUI
import {
  Row,
  Col,
  Button
} from 'element-ui';

import htmlToPdf from './common/htmlPdf';

Vue.use(Row).use(Col).use(Button).use(htmlToPdf);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
