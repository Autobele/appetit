<template>
  <div class="orderDay">
      <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style>
    .orderDay {
        margin: 10px 0;
    }

    .orderDay h6{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */
        color: #000;
        margin-bottom: 16px;
    }

    .orderDay h6 span {
        font-weight: normal;
    }
</style>