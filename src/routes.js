import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import SelectedSale from '@/views/SelectedSale.vue';
import SelectProduct from '@/views/SelectProduct.vue';
import SelectClient from '@/views/SelectClient.vue';
import DetailProduct from '@/views/DetailProduct.vue';
import Payment from '@/views/Payment.vue';

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
    },
    {
        name: "select-product/sale",
        path: '/select-product/:orderSale',
        component: SelectProduct
    },
    {
        name: "select-client",
        path: '/select-client',
        component: SelectClient
    },
    {
        name: "detail-product",
        path: '/detail-product/:categoryId/:productId',
        component: DetailProduct
    },
    {
        name: "payment",
        path: '/payment',
        component: Payment
    },
]

const router = new Router({ routes, mode: 'history'});

export default router;