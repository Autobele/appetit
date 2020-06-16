<template>
  <div class="progress-bar-wrapper">
      <div class="progress" :style="{ width: progress + '%'}"></div>
  </div>
</template>

<script>
export default {
    props: ['progress']
}
</script>

<style>
    .progress-bar-wrapper {
        width: 100%;
        height: 12px;
        /* Black 0.8% */

        background: rgba(0, 0, 0, 0.08);
        border-radius: 5px;
    }
    .progress {
        background-color: #FF8822;
        height: 12px;
        border-radius: 5px;
    }
    
</style>