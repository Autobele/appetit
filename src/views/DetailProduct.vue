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
          <p class="option-info">Escolha dentre as opções de massas abaixo</p>
          <div class="choice" v-for="(option, index) in product.options" :key="index">
            <label>
              <input type="radio" name="ingrediente" @change="onChange($event)" :value="option.id" />
              <img :src="checkedRadio == option.id ? image.checked : image.unchecked" />
            </label>
            <p>{{option.name}}</p>
          </div>
        </div>
        <div class="observations">
          <h6>Observações</h6>
          <input
            type="text"
            name="observations"
            v-model="observations"
            id="input-observations"
            placeholder="Observações"
          />
        </div>
      </div>
      <div class="amount-product_Container" v-show="this.checkedRadio">
        <div class="amount-buttons">
          <img src="@/assets/minus.svg" alt="minus" @click="choiceAmount('minus')" />
          <p>{{amount}}</p>
          <img src="@/assets/add.svg" alt="add" @click="choiceAmount('plus')" />
        </div>
        <a class="btn-add-order">
          <p>Adicionar</p>
          <p>{{valueFormatPtBR(totalValue)}}</p>
        </a>
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
      amount: 1,
      totalValue: 0,
      observations: "",
      checkedRadio: null,
      image: {
        unchecked: require("@/assets/radio-path.svg"),
        checked: require("@/assets/check-path.svg")
      }
    };
  },
  created() {
    this.categoryId = this.$route.params.categoryId;
    this.productId = this.$route.params.productId;
    this.product = apiProducts[this.categoryId].items[this.productId];
    this.totalValue = this.product.price;
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
    choiceAmount(params) {
      if (params == "minus") {
        if (this.amount == 1) return;
        this.amount--;
      } else {
        this.amount++;
      }
      this.totalValue = this.product.price * this.amount;
    }
  }
};
</script>

<style>
.middleSection {
  width: 100%;
  height: 100vh;
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.header {
  position: fixed;
}

.infoSectionContent .info {
  height: 48px;
  margin: 24px 40px;
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
  margin: 24px 40px;
}

.product-detail {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  height: 48px;
  margin-left: 40px;
  margin-right: 40px;
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

.options {
  border-bottom: 8px solid rgba(0, 0, 0, 0.08);
}

.options h6 {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
}

.options .option-info {
  margin: 0 40px;
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
  margin: 16px 40px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
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
.choice:last-child {
  margin-bottom: 24px;
}

.observations {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.observations h6 {
  margin: 24px 0;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
  margin-left: 40px;
}

.observations #input-observations {
  width: 432px;
  height: 56px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.56);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 16px;
  margin-left: 40px;
}

.observations #input-observations::placeholder {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.88);
}

.amount-product_Container {
  width: 100%;
  height: 68px;
  background: #fafafa;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.amount-buttons {
  width: 104px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 22px 22px 22px 40px;
}

.amount-buttons img {
  cursor: pointer;
}

.btn-add-order {
  width: 203px;
  height: 48px;
  background: #ff8822;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
}

.btn-add-order p {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
}

[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

[type="radio"] + img {
  cursor: pointer;
}
</style>