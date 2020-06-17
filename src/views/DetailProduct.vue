<template>
  <GridTreeColumns>
    <Sidebar class="sidebar" />
    <section class="middleSection">
      <div class="newOrder__Content">
        <TitleSection currentMessage="Novo Pedido" class="title" urlArrow="/select-product" />
        <img src="@/assets/newOrder.svg" class="undraw-chef" alt />
      </div>
    </section>
    <section class="infoSection">
      <Header class="header" />
      <TitleSection currentMessage="Detalhes do pedido" hideArrow="true" class="title" />
      <div class="infoSectionContent">
        <p class="info">Aproveite para adicionar alguma observação para este pedido, caso queira.</p>
        <div class="product-detail">
          <img :src="product.imageUrl" alt />
          <div class="product-heading">
            <h6 class="product-title">{{ product.name }}</h6>
            <span class="product-price">{{ valueFormatPtBR(product.price) }}</span>
          </div>
        </div>
        <div class="options">
          <h6>Opções</h6>
          <p>Escolha dentre as opções de massas abaixo</p>
          <div class="choice" v-for="(option, index) in product.options" :key="index">
            <label>
              <input type="radio" name="ingrediente" :value="option.name" checked />
              <img :src="require('@/assets/radio-path.svg')" />
            </label>
            <p>{{option.name}}</p>
          </div>
        </div>
        <div class="separator-sec"></div>
      </div>
    </section>
  </GridTreeColumns>
</template>

<script>
import GridTreeColumns from "@/layout/ContainerGridTreeColumns";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TitleSection from "@/components/TitleSection";
import apiProducts from "@/api/products/products.json";

export default {
  name: "detail-product",
  components: {
    GridTreeColumns,
    Sidebar,
    Header,
    TitleSection
  },
  data() {
    return {
      categoryId: 0,
      productId: 0,
      products: {},
      product: {},
      image: {
        unchecked: '@/assets/radio-path.svg',
        checked: "@/assets/check-path.svg"
      }
    };
  },
  created() {
    this.categoryId = this.$route.params.categoryId;
    this.productId = this.$route.params.productId;
    this.product = apiProducts[this.categoryId].items[this.productId];
  },
  methods: {
    valueFormatPtBR(value) {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(value);
    }
  }
};
</script>

<style>
.middleSection {
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
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.56);
}

.infoSection h6 {
  font-family: "Open Sans";
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
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin: 0px;
  color: rgba(0, 0, 0, 0.87);
}

.product-detail p {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: rgba(0, 0, 0, 0.54);
}

.options h6 {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
}

.options p {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.56);
}

.choice {
  width: 432px;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 16px 0;
  display: flex;
  align-items: center;
}

.choice label {
  margin: 19px;
}

.choice p {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.56);
}

/* HIDE RADIO */
[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type="radio"] + img {
  cursor: pointer;
}
</style>