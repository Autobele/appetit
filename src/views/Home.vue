<template>
    <ContainerGridTwoColumns>
        <Sidebar class="sidebar"/>
        <Header class="header"/>
        <section class="openOrder">
            <TitleSection hide-arrow="false" class="title"/>
            <OpenOrder>
            <router-link class="newRequest__Content" to="/select-product">
                <div class="newRequest">
                    <div href=""><img src="@/assets/add.png" alt="Add Logo">
                    <span>fazer novo pedido</span></div>
                </div>
            </router-link>
            <Search/>
            <div class="separator"></div>
            <OrderDay v-for="(order, index) in orders" :key="order[index]">
                    <h6>{{order.dateSale}},<span> Você vendeu </span>{{valueFormatPtBR(order.valueSale)}}</h6>
                        <router-link :to="{ name: 'selected-sale', params: { orderId: order.id, saleId: card.id }}" v-for="(card, index) in order.sale" :key="index">
                            <Card
                            :avatar-url="card.avatar_url"
                            :client-name="card.name"
                            :description="card.description"
                            :value="valueFormatPtBR(card.value)"
                            />
                        </router-link>
                </OrderDay>
            </OpenOrder>
        </section>
        
    </ContainerGridTwoColumns>
</template>

<script>

import ContainerGridTwoColumns from '@/layout/ContainerGridTwoColumns.vue';
import Search from '@/components/Search.vue';
import TitleSection from '@/components/TitleSection.vue';
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import OpenOrder from '@/components/OpenOrder.vue';
import OrderDay from '@/components/OrderDay.vue';
import Card from '@/components/Card.vue';
import apiOrders from '@/api/orders/orders.json';

export default {
    name: 'Home',
    components: {
        Sidebar,
        Header,
        TitleSection,
        Search,
        OpenOrder,
        OrderDay,
        Card,
        ContainerGridTwoColumns
    },
    data() {
        return {
            orders: []
        }
    },
    created(){
        this.orders = apiOrders;
    },
    methods: {
        valueFormatPtBR(value){
            return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
        }
    }
}
</script>

<style>
    .container {
        height: 100%;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 342px auto;
        grid-template-rows: 72px auto;
        grid-template-areas: 
            "sidebar header"
            "sidebar openOrder"
        ;
    }

    .header{
        grid-area: header;
    }
    .sidebar {
        grid-area: sidebar;
    }
    .openOrder {
        grid-area: openOrder;
    }


    .newRequest__Content{
        height: 56px;
        width: 100%;
        margin: 24px 0;
        background: #FFFFFF;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 20px;
    }
    .newRequest__Content .newRequest {
        display: flex;
        align-items: center;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        /* identical to box height, or 157% */

        text-transform: uppercase;

        /* Black 0.56% */

        color: rgba(0, 0, 0, 0.56);
    }
    .newRequest {
        display: flex;
        align-items: center;
    }

    .newRequest div {
        height: 22px;
        display: flex;
        align-items: center;
    }

    .newRequest span{
        margin: 17px 20px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        height: 22px;
        /* identical to box height, or 157% */

        text-transform: uppercase;

        /* Black 0.56% */

        color: rgba(0, 0, 0, 0.56);
    }


    /* MEDIA QUERY */
    @media (max-width: 723px) {
    .container {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 72px auto;
        grid-template-areas: 
            "header header"
            "openOrder openOrder"
        ;
    }

    .header{
        grid-area: header;
    }
    .sidebar {
        display: none;
    }
    .openOrder {
        grid-area: openOrder;
    }
    }
</style>