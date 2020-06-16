<template>
  <GridTreeColumns>
      <Sidebar class="sidebar"/>
      <section class="middleSection">
          <div class="newOrder__Content">
            <TitleSection currentMessage="Novo Pedido" class="title"/>
            <img src="@/assets/newOrder.svg" class="undraw-chef" alt="">
          </div>
      </section>
      <section class="infoSection">
          <Header class="header"/>
            <TitleSection currentMessage="Detalhes do pedido" hideArrow="true" class="title"/>
          <div class="infoSectionContent">
              <p class="info">Aproveite para adicionar alguma observação para este pedido, caso queira.</p>
              <div class="product-detail">
                  <img src="@/assets/cuscuzcompleto.svg" alt="">
                  <div class="product-heading">
                      <h6 class="product-title">Cuscuz Completo</h6>
                      <span class="product-price">R$ 3,25</span>
                  </div>
              </div>
          </div>
      </section>
  </GridTreeColumns>
</template>

<script>

import GridTreeColumns from '@/layout/ContainerGridTreeColumns';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import TitleSection from '@/components/TitleSection';
import apiProducts from '@/api/products/products.json';

export default {
    name: 'detail-product',
    components: {
        GridTreeColumns,
        Sidebar,
        Header,
        TitleSection,
    },
    data() {
        return {
            products: []
        }
    },
    created() {
        this.products = apiProducts;
        console.log(this.products[1]);
    },
    methods: {
        valueFormatPtBR(value){
            return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
        }
    }
}
</script>

<style>
    .middleSection  {
        width: 100%;
        height: 100vh;
        position: relative;
    }

    .middleSection .title {
        top: 74.6px;
        left: 46px;
    }

    .middleSection .undraw-chef {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .infoSection {
        width: 100%;
        height: 100%;
    }

    .header {
        position: fixed;
    }

    .infoSectionContent {
        padding: 0 40px;
        width: 100%;
        display: flex;
        position: sticky;
        flex-direction: column;
    }
    .infoSectionContent .info {
        height: 48px;
        top: 174px;
        margin: 24px 0;
        /* Body */

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */

        /* Black 0.56% */

        color: rgba(0, 0, 0, 0.56);;
    }

    .infoSection h6 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.88);
        margin: 24px 0;
    }

    .product-detail {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        height: 48px;
    }

    .product-detail img {
        margin-right: 16px;
    }

   .product-detail h6 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        /* identical to box height, or 150% */
        margin: 0px;
        color: rgba(0, 0, 0, 0.87);
   }

   .product-detail p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;

        color: rgba(0, 0, 0, 0.54);
   }


</style>