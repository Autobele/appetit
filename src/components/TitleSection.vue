<template>
  <div class="titleSection">
      <a href="/home"><img src="@/assets/arrow-left.svg" class="btnArrow" :class="{hidden: hideArrow}" alt=""></a>
      <h3>{{currentMessage ? currentMessage : 'Olá Vanussa' }}</h3>
      <div class="separator"></div>
  </div>
</template>

<script>
export default {
    props: ['hideArrow', 'currentMessage'],
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
        -moz-user-select: none;
    }

</style>