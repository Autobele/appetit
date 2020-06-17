<template>
  <div class="product_card__Content">
        <img :src="imageUrl" alt="">
        <h6 class="product-title">{{name}}</h6>
        <p>{{price}}</p>
  </div>
</template>

<script>
export default {
    props: ["imageUrl", "name", "price"]
}
</script>

<style>

    .product_card__Content {
        display: flex;
        align-items: center;
        margin: 16px;
    }
    
    .product_card__Content .product-title {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.87);
        margin: 0;
    }

    .product_card__Content p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.54);
        margin-left: auto;
    }
</style>