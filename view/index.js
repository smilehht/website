import Vue from 'vue'
import App from './App.vue'
window.Vue = Vue;
import Router from 'vue-router';
import routes from './routes/index.js';

Vue.use(Router);

// 解决再次跳转相同路径报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

require('./less/app.less');

const router = new Router({ routes });
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
