<template>
  <div class="container">
      <TitleSection hide-arrow="false"/>
      <a class="newRequest__Content" href="/home">
         <div class="newRequest">
             <div href=""><img src="@/assets/add.png" alt="Add Logo">
             <span>fazer novo pedido</span></div>
         </div>
      </a>
      <Search/>
      <div class="separator"></div>
      <OrderDay :dateSale="order.dateSale" :valueSale="valueFormatptBR(order.valueSale)" v-for="(order, index) in orders" :key="index">
        <Card v-for="(card, index) in order.sale" :key="card+index"
        :avatar-url="card.avatar_url"
        :client-name="card.name"
        :description="card.description"
        :value="valueFormatptBR(card.value)"
        />
      </OrderDay>
  </div>
</template>

<script>
import TitleSection from '@/components/TitleSection.vue';
import OrderDay from '@/components/OrderDay.vue';
import Search from '@/components/Search.vue';
import Card from '@/components/Card.vue';
import apiOrders from '@/api/orders/orders.json';

export default {
    components: {
        TitleSection,
        OrderDay,
        Card,
        Search
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
        valueFormatptBR(value){
            return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
        }
    }
}
</script>

<style scoped>
    .container{
        padding: 0 40px;
        display: flex;
        flex-direction: column;
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

    

    .separator {
        width: 100%;
        height: 1px;
        margin-top: 8px;
        margin-bottom: 24px;
        background: rgba(0, 0, 0, 0.34);
    }

</style>