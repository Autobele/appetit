<template>
  <a href="/home">
    <div class="card">
        <img class="avatarUrl" :src="avatarUrl" alt="">
        <h6 class="clientName">{{clientName}}</h6>
        <caption class="description">{{description}}</caption>
        <h6 class="value" :class="hideElement(hideValue)">{{value}}</h6>
    </div>
  </a>
</template>

<script>
export default {
    props: ['avatarUrl', 'clientName', 'description', 'value', 'hideValue'],
    name: 'card',
    methods: {
        hideElement(params) {
            return params ? 'hide' : ''
        }
    }
}
</script>

<style>
    .card {
        position: relative;
        width: 100%;
        height: 74px;
        background: #FFFFFF;
        box-shadow: 0px 0.5px 10px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        margin: 8px 0;
    }

    .card .avatarUrl {
        padding: 17px 16px;
        border-radius: 50%;
    }

    .card .clientName {
        position: absolute;
        top: 16px;
        left: 72px;
    }

    .card .description {
        position: absolute;
        top: 40px;
        left: 72px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.54);
    }

    .card .value {
        position: absolute;
        top: 16px;
        right: 16px;
    }

    .hide {
        display: none;
    }

</style>