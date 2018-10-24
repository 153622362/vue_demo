// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App'
import Layout from './components/layout'; //自定义页面
import IndexPage from './pages/index'; //自定义页面
import DetailPage from './pages/detail'; //自定义页面
import DetailAnaPage from './pages/detail/analysis'; //自定义页面
import DetailCouPage from './pages/detail/count'; //自定义页面
import DetailForPage from './pages/detail/forecast'; //自定义页面
import DetailPubPage from './pages/detail/publish'; //自定义页面
import VueRouter from 'vue-router';  //cnpm install vue-router --save 路由
import VueResource from 'vue-resource'; //发送$get $post请求
import ElementUI from 'element-ui'; //第三方UI
import 'element-ui/lib/theme-chalk/index.css'; //第三方css

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

let router = new VueRouter(
{
        mode: 'history',
        routes: [
            {
                path: '/',
                component: IndexPage
            },
            {
                path : '/detail',
                component : DetailPage,
                redirect : '/detail/analysis',
                children : [
                    {
                        path: 'analysis',
                        component: DetailAnaPage
                    },
                    {
                        path: 'count',
                        component: DetailCouPage
                    },
                    {
                        path: 'forecast',
                        component: DetailForPage
                    },
                    {
                        path: 'publish',
                        component: DetailPubPage
                    }
                ]
            }

                 ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //router:router 对应变量名
  components: { Layout },
  template: '<Layout/>'
})
