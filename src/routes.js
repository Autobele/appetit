import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import SelectedSale from '@/views/SelectedSale.vue';
import SelectProduct from '@/views/SelectProduct.vue';

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
    },
    {
        name: "selected-sale",
        path: '/selected-sale/:orderId/:saleId',
        component: SelectedSale
    },
    {
        name: "select-product",
        path: '/select-product',
        component: SelectProduct
    }
]

const router = new Router({ routes, mode: 'history'});

export default router;