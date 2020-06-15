<template>
  <div class="titleSection">
      <a href="/home"><img src="@/assets/arrow-left.svg" class="btnArrow" :class="hideElement(hideArrow)" alt=""></a>
      <h3>{{userCurrent ? userCurrent : 'Olá Vanussa' }}</h3>
      <div class="separator"></div>
  </div>
</template>

<script>
export default {
    props: ['hideArrow', 'userCurrent'],
    methods: {
        hideElement(params) {
            return params ? 'hide' : ''
        }
    }
}
</script>

<style>

    .titleSection {
        padding: 0;
        margin-left: 40px;
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

    .hide {
        display: none;
    }

</style>