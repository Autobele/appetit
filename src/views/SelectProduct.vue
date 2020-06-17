<template>
  <GridTreeColumns>
      <Sidebar class="sidebar"/>
      <section class="middleSection">
          <div class="newOrder__Content">
            <TitleSection currentMessage="Novo Pedido" class="title" url-arrow="/home"/>
            <img src="@/assets/newOrder.svg" class="undraw-chef" alt="">
          </div>
      </section>
      <section class="infoSection">
          <Header class="header"/>
            <TitleSection currentMessage="Informações para o pedido" hideArrow="true" class="title"/>
          <div class="infoSectionContent">
              <p class="info">Preencha as informações abaixo para concluir esta venda.</p>
              <div class="progress-content">
                <p>Passo 1 de 3</p>
                <ProgressBar progress="33" class="progress-component"/>
              </div>
          </div>
          <div class="product__Content">
              <h6>O que você está vendendo?</h6>
              <div class="search-content">
                <Search hide-element="true" bgcolor="#FAFAFA" class="searchInput"/>
                <div class="separator-gray"></div>
              </div>
            <div class="productScroll">
                <div class="product-select" v-for="(product, index) in products" :key="index">
                <div class="product">
                    <h6 class="category-title">{{product.title}}</h6>
                    <router-link  :to="{ name: 'detail-product', params: { categoryId: product.id, productId: card.id }}" v-for="(card, index) in product.items" :key="index">
                        <CardProduct
                            :image-url="card.imageUrl"
                            :name="card.name"
                            :price="valueFormatPtBR(card.price)"
                            class="card-product"
                        />
                    </router-link>
                </div>
                <div class="separator-product-select"></div>
                </div>
            </div>
          </div>
          <div class="submit-order_Content">
              <p>Total R$ 3,25</p>
              <a class="avancar"><p>Avançar</p><img src="@/assets/arrow-right.svg"></a>
          </div>
      </section>
  </GridTreeColumns>
</template>

<script>

import GridTreeColumns from '@/layout/ContainerGridTreeColumns';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import TitleSection from '@/components/TitleSection';
import ProgressBar from '@/components/ProgressBar';
import Search from '@/components/Search';
import CardProduct from '@/components/CardProduct';
import apiProducts from '@/api/products/products.json';

export default {
    name: 'select-product',
    components: {
        GridTreeColumns,
        Sidebar,
        Header,
        TitleSection,
        ProgressBar,
        Search,
        CardProduct,
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
        max-height: 100vh;
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
        background: #FAFAFA;
        position: relative;
        max-height: 100vh;
    }

    .header {
        position: fixed;
    }

    .infoSectionContent {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .infoSectionContent .info {
        height: 48px;
        top: 174px;
        margin: 24px 40px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.56);;
    }
    .progress-content {
        margin: 0 40px;
    }

    .progress-content p{
        width: 94px;
        height: 24px;
        top: 246px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.64);
        margin-bottom: 8px;
    }

    .productScroll {
        overflow-y: scroll;
        height: 50vh;
    }

    .productScroll::-webkit-scrollbar {
        background: transparent;
    }

    .product__Content > h6 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.88);
        margin: 24px 0;
    }

    .separator-gray{
        width: 100%;
        height: 1px;
        margin-top: 8px;
        background: rgba(0, 0, 0, 0.34);
    }

    .product__Content h6, .search-content{
        padding: 0 40px;
    }

    .separator-product-select {
        width: 100%;
        height: 8px;
        background: rgba(0, 0, 0, 0.08);
        margin-top: 8px;
    }

    .product {
        margin-top: 24px;
    }

    .product .card-product {
        margin-left: 56px;
        margin-right: 40px;
    }

    .product .category-title{
        margin: 0px;
    }

    .product-select:last-child > .separator-product-select {
        display: none;
    }

    .submit-order_Content {
        position: absolute;
        bottom: 0px;
        z-index: 1;
        width: 100%;
        height: 56px;
        background: #FF8822;
        box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px;
    }

    .submit-order_Content .avancar {
        display: flex;
    }

    .avancar img {
        margin-left: 24px;
    }

</style>