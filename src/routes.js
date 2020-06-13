import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/views/Login.vue';

Vue.use(Router);

const routes = [
    {
        name: "login",
        path: '/',
        component: Login
    }
]

const router = new Router({ routes });

export default router;