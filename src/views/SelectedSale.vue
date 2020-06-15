<template>
    <ContainerGridTwoColumns>
        <Sidebar class="sidebar"/>
        <Header class="header"/>
        <div class="openOrder">
            <TitleSection :userCurrent="`Pedidos de ${orders.name.split(' ')[0]}`"/>
            <OpenOrder>
                <OrderDay>
                    <router-link :to="{ name: 'selected-sale'}">
                    <h6>{{orders.date}}</h6>
                        <Card
                        avatar-url="https://svgshare.com/i/KnJ.svg"
                        :client-name="orders.description"
                        description="R$ 4,50"
                        />
                    </router-link>
                </OrderDay>
            </OpenOrder>
        </div>
    </ContainerGridTwoColumns>
</template>

<script>

import ContainerGridTwoColumns from '@/layout/ContainerGridTwoColumns.vue';
import Sidebar from '@/components/Sidebar.vue';
import TitleSection from '@/components/TitleSection.vue';
import Header from '@/components/Header.vue';
import OpenOrder from '@/components/OpenOrder.vue';
import OrderDay from '@/components/OrderDay.vue';
import Card from '@/components/Card.vue';
import apiOrders from '@/api/orders/orders.json';

export default {
    name: 'selected-sale',
    components: {
        Sidebar,
        TitleSection,
        ContainerGridTwoColumns,
        Header,
        OpenOrder,
        OrderDay,
        Card,
    },
    data() {
        return {
            orderId: 0,
            saleId: 0,
            orders: {}
        }
    },
    created() {
        this.orderId = this.$route.params.orderId;
        this.saleId = this.$route.params.saleId;
        this.orders = apiOrders[this.orderId].sale[this.saleId]
        console.log(this.orders)
    }
}
</script>

<style>

</style>