import Vue from 'vue'
import VueRouter from 'vue-router';
import user from '../pages/user';
import charging from '../pages/charging';
import home from '../pages/home'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {path:'/user', component: user},
        {path:'/charging', component: charging},
        {path:'/home', component: home}
    ]
})