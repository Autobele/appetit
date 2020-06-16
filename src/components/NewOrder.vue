<template>
  <div>
       <TitleSection currentMessage="Novo Pedido" class="title"/>
      <slot></slot>
  </div>
</template>

<script>
import TitleSection from '@/components/TitleSection';
export default {
    components: {
        TitleSection,
    }
}
</script>

<style>
</style>