<template>
  <div class="titleSection">
      <a :href="urlArrow"><img src="@/assets/arrow-left.svg" class="btnArrow" :class="{hidden: hideArrow}" alt=""></a>
      <h3>{{currentMessage ? currentMessage : 'Olá Vanussa' }}</h3>
      <div class="separator"></div>
  </div>
</template>

<script>
export default {
    props: ['hideArrow', 'currentMessage', 'urlArrow'],
    methods: {
        hideElement(params) {
            return params ? '{visibility : hidden}' : '{visibility: visibility}'
        }
    }
}
</script>

<style>

    .titleSection {
        padding: 0;
        margin-left: 40px;
        position: relative;
    }

    .titleSection h3{ 
        margin-bottom: 8px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;

        color: rgba(0, 0, 0, 0.88);

    }

    .titleSection .btnArrow {
        align-self: flex-start;
        margin-bottom: 10.62px;
    }

    .separator {
        width: 224px;
        height: 2px;
        background-color: #FF8822;
    }

    .hidden {
        visibility: hidden;
    }

    /* @media (max-width: 723px) {
        .titleSection {
            margin-top: 72px;
        }
        .btnArrow {
            visibility: visible;
            opacity: 1;
        }
    } */
</style>