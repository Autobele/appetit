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
      <div class="client_Content">
        <div class="client-info">
          <div class="info">
            <h4>Clientes</h4>
            <div class="clients-selecteds">
              <div class="client-card" v-for="(client, index) in selectedClients" :key="index">
                <img :src="client.avatar" alt="">
                <h6>{{client.name}}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="order__Content">
        <div class="valueTotal-info">
          <div class="valueTotal-content">
            <h4>Total</h4>
            <p class="totalValue">{{valueFormatPtBR(orderSale.totalValue)}}</p>
          </div>
          <div class="order-observation">{{orderSale.observations}}</div>
        </div>
      </div>
    </section>
    <section class="infoSection">
      <Header class="header" />
      <TitleSection currentMessage="Informações para o pedido" hideArrow="true" class="title" />
      <div class="infoSectionContent">
        <p class="info">Preencha as informações abaixo para concluir esta venda.</p>
        <div class="progress-content">
          <p>Passo 3 de 3</p>
          <ProgressBar progress="100" class="progress-component" />
        </div>
      </div>
      <div class="payment__Content">
        <h6 class="info">Qual status do pagamento?</h6>
        <div class="options">
          <div class="choice" v-for="(payment, index) in paymentMethod" :key="index">
            <label>
              <input type="radio" :name="payment" @change="onChange($event)" :value="payment.id" />
              <img :src="checkedRadio == payment.id ? image.checked : image.unchecked" />
            </label>
            <p>{{payment.method}}</p>
          </div>
        </div>
      </div>
      <div class="purchase-date__Content">
        <h6 class="date_content">Em qual data foi realizada?</h6>
        <div class="date-input">
          <input type="date" v-model="dateOrder"/>
        </div>
      </div>
      <button type="button" class="btn-finish" :disabled="!(checkedRadio && dateOrder)">
        <span>finalizar</span>
      </button>
    </section>
  </GridTreeColumns>
</template>

<script>
import GridTreeColumns from "@/layout/ContainerGridTreeColumns";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TitleSection from "@/components/TitleSection";
import ProgressBar from "@/components/ProgressBar";
import apiClients from "@/api/clients/clients.json";

export default {
  name: "payment",
  components: {
    GridTreeColumns,
    Sidebar,
    Header,
    TitleSection,
    ProgressBar
  },
  data() {
    return {
      orders: {},
      orderSale: null,
      paymentMethod: [
        { id: 0, method: "Não está pago" },
        { id: 1, method: "Já está pago" }
      ],
      clients: null,
      selectedClients: [],
      selectedProduct: { categoryId: null, productId: null },
      checkedProductImage: require("@/assets/checked-product.svg"),
      checkedRadio: null,
      dateOrder: null,
      image: {
        unchecked: require("@/assets/radio-path.svg"),
        checked: require("@/assets/check-path.svg")
      },
      btnActive: true,
    };
  },
  created() {
    this.clients = apiClients;
    this.orderSale = this.$route.params.orderSale;
    this.selectedClients = this.$route.params.selectedClients;

    if (
      this.$route.params.categoryId != undefined &&
      this.$route.params.productId !== undefined
    ) {
      this.selectedProduct.categoryId = this.$route.params.categoryId;
      this.selectedProduct.productId = this.$route.params.productId;
    }
    if (
      this.$route.params.orderSale == undefined &&
      this.$route.params.selectedClients == undefined
    ) {
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
    onChange(event) {
      let optionText = event.target.value;
      this.checkedRadio = optionText;
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
    },
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

.payment__Content > .info {
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

.payment__Content h6,
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
  top: 90%;
  width: 100%;
  padding: 0 40px;
}

.date-input {
  padding: 0 40px;
  width: 100%;
}

.date-input input {
  height: 56px;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0 18px;
  font-size: 16px;
  position: relative;
}

.date-input input::placeholder {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.88);
}

.purchase-date__Content {
  margin-bottom: 40px;
}

.btn-finish {
  width: 208px;
  height: 48px;
  color: white;
  background: #ff8822;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 40px;
  outline: none;
  border: none;
  cursor: pointer;
}

.btn-finish:disabled {
  background-color: #FCD3B1;
  cursor: initial;
}

.btn-finish span {
  text-transform: uppercase;
}

.client_Content {
  padding: 0 40px;
  position: absolute;
  top: 450px;
  width: 100%;
}

.client-card {
  display: flex;
  align-items: center;
  padding: 18px;
}

.client-info .info h4 {
  margin-left: 40px;
}

.client-card h6{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
  margin-left: 16px;
}

</style>