<template>
  <div class="container">
      
      <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .container{
        padding: 0 40px;
        display: flex;
        flex-direction: column;
    }

    .separator {
        width: 100%;
        height: 1px;
        margin-top: 8px;
        margin-bottom: 24px;
        background: rgba(0, 0, 0, 0.34);
    }

</style>