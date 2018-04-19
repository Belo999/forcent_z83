import Vue from 'vue'
import Router from 'vue-router'

//components routes
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import SignIn from './components/user/SignIn.vue'
import SignUp from './components/user/SignUp.vue'



Vue.use(Router)

export default new Router({
    routes:
    [ {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signIn',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/signUp',
        name: 'SignUp',
        component: SignUp
    }
],
mode: 'history'
})