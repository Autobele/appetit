<template>
  <GridTreeColumns>
      <Header class="header"/>
      <Sidebar class="sidebar"/>
      <NewOrder class="middleSection">
          <div class="newOrder__Content">
            <img src="@/assets/newOrder.svg" class="undraw-chef" alt="">
          </div>
      </NewOrder>
      <div class="infoSection">
          aoiehae
      </div>
  </GridTreeColumns>
</template>

<script>

import GridTreeColumns from '@/layout/ContainerGridTreeColumns';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import NewOrder from '@/components/NewOrder';
// import TitleSection from '@/components/TitleSection';


export default {
    name: 'select-product',
    components: {
        GridTreeColumns,
        Sidebar,
        NewOrder,
        Header
    }
}
</script>

<style>
    .middleSection  {
        width: 100%;
        height: 100vh;
        position: relative;
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

    .header {
        background: #FAFAFA;
    }
</style>