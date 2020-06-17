<template>
  <GridTreeColumns>
    <Sidebar class="sidebar" />
    <section class="middleSection">
      <div class="newOrder__Content">
        <TitleSection currentMessage="Novo Pedido" class="title" url-arrow="/home" />
        <div class="ordersale-info">
          <div class="product-info">
            <h4 class="product-title">Produtos</h4>
            <div class="product-card">
              <img :src="orderSale.product.imageUrl" alt />
              <h6>{{orderSale.amount}}x {{orderSale.product.name}}</h6>
              <p>{{valueFormatPtBR(orderSale.product.price)}}</p>
            </div>
            <div class="order-observation">{{orderSale.observations}}</div>
          </div>
        </div>
      </div>
      <div class="valueTotal-info">
        <div class="valueTotal-content">
          <h4>Total</h4>
          <p class="totalValue">{{valueFormatPtBR(orderSale.totalValue)}}</p>
        </div>
        <div class="order-observation">{{orderSale.observations}}</div>
      </div>
    </section>
    <section class="infoSection">
      <Header class="header" />
      <TitleSection currentMessage="Informações para o pedido" hideArrow="true" class="title" />
      <div class="infoSectionContent">
        <p class="info">Preencha as informações abaixo para concluir esta venda.</p>
        <div class="progress-content">
          <p>Passo 2 de 3</p>
          <ProgressBar progress="66" class="progress-component" />
        </div>
      </div>
      <div class="product__Content">
        <h6 class="info">Pra quem você está vendendo?</h6>
        <div class="search-content">
          <Search
            hide-element="true"
            bgcolor="#FAFAFA"
            class="searchInput"
            plholder="Procurar o cliente aqui..."
          />
          <div class="separator-gray"></div>
        </div>
      </div>
      <div class="clientScroll">
        <div class="clients_container">
          <div
            class="client-card"
            v-for="(client, index) in clients"
            :key="index"
            @click="addClient(index)"
          >
            <img :src="selectedClients.includes(client) ? checkedProductImage : client.avatar" alt />
            <h6 class="client-name">{{client.name}}</h6>
          </div>
        </div>
      </div>
      <div class="submit-order_Content" v-if="selectedClients.length > 0">
        <h6 class="valueInfo">{{selectedClients.length}} clientes selecionados</h6>
        <router-link :to="{ name: 'payment', params: { selectedClients,  orderSale }}">
            <a class="avancar">
                <p>Avançar</p>
                <img src="@/assets/arrow-right.svg" />
            </a>
        </router-link>
      </div>
    </section>
  </GridTreeColumns>
</template>

<script>
import GridTreeColumns from "@/layout/ContainerGridTreeColumns";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TitleSection from "@/components/TitleSection";
import ProgressBar from "@/components/ProgressBar";
import Search from "@/components/Search";
import apiClients from "@/api/clients/clients.json";

export default {
  name: "select-client",
  components: {
    GridTreeColumns,
    Sidebar,
    Header,
    TitleSection,
    ProgressBar,
    Search
  },
  data() {
    return {
      orders: {},
      orderSale: null,
      clients: null,
      selectedClients: [],
      selectedProduct: { categoryId: null, productId: null },
      checkedProductImage: require("@/assets/checked-product.svg")
    };
  },
  created() {
    this.clients = apiClients;
    this.orderSale = this.$route.params.orderSale;
    if (
      this.$route.params.categoryId != undefined &&
      this.$route.params.productId !== undefined
    ) {
      this.selectedProduct.categoryId = this.$route.params.categoryId;
      this.selectedProduct.productId = this.$route.params.productId;
    }
    console.log(this.orderSale);
    if (this.$route.params.orderSale == undefined) {
      this.$router.push("/select-product");
    }
  },
  methods: {
    valueFormatPtBR(value) {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(value);
    },
    addClient(index) {
      let validate = this.selectedClients.includes(this.clients[index]);
      if (validate) {
        let i = this.selectedClients.indexOf(this.clients[index]);
        if (i > -1) {
          this.selectedClients.splice(i, 1);
        }
      } else {
        this.selectedClients.push(this.clients[index]);
      }
    }
  }
};
</script>

<style>
.middleSection {
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
  max-height: 100vh;
  background: #fafafa;
  position: relative;
  overflow-y: hidden;
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
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.56);
}
.progress-content {
  margin: 0 40px;
}

.progress-content p {
  width: 94px;
  height: 24px;
  top: 246px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.64);
  margin-bottom: 8px;
}

.clientScroll {
  overflow-y: scroll;
  height: 50vh;
}

.clientScroll::-webkit-scrollbar {
  display: none;
}

.product__Content > .info {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.88);
  margin: 24px 0;
}

.separator-gray {
  width: 100%;
  height: 1px;
  margin-top: 8px;
  background: rgba(0, 0, 0, 0.34);
}

.product__Content h6,
.search-content {
  padding: 0 40px;
}

.separator-card {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
}

.product {
  margin-top: 24px;
}

.product .card-product {
  margin-left: 56px;
  margin-right: 40px;
}

.product .category-title {
  margin: 0px;
}

.product-select:last-child > .separator-product-select {
  display: none;
}

.submit-order_Content {
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 1;
  width: 100%;
  height: 56px;
  background: #ff8822;
  box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}

.submit-order_Content .avancar {
  display: flex;
}

.avancar {
  cursor: pointer;
}

.avancar img {
  margin-left: 24px;
}

.avancar p {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}

.submit-order_Content .valueInfo {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}

.ordersale-info {
  width: 100%;
  position: relative;
  top: 174px;
  padding: 0 40px;
  padding-bottom: 16px;
  border-bottom: 8px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}

.product-card {
  margin: 16px 40px;
}

.product-title {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  margin-left: 40px;
  color: rgba(0, 0, 0, 0.88);
}

.product-info .product-card {
  display: flex;
  align-items: center;
}

.product-info .product-card img {
  margin-right: 16px;
}

.product-info .product-card h6 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
}

.product-info .product-card p {
  margin-left: auto;
}

.client-card {
  display: flex;
  margin: 16px 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
}

.client-card:last-child {
  display: flex;
  margin: 16px 40px;
  border-bottom: none;
}

.client-card .client-name {
  margin-left: 16px;
}

.order-observation {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-left: 40px;
  color: rgba(0, 0, 0, 0.56);
}

.valueTotal-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0px 40px;
}

.valueTotal-content .totalValue {
  margin-left: auto;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.56);
}

.valueTotal-info {
  position: absolute;
  top: 450px;
  width: 100%;
  padding: 0 40px;
}
</style>