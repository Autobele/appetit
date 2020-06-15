import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';

Vue.use(Router);

const routes = [
    {
        name: "login",
        path: '/',
        component: Login
    },
    {
        name: "home",
        path: '/home',
        component: Home
    }
]

const router = new Router({ routes, mode: 'history'});

export default router;