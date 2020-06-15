<template>
    <div class="container">
        <Sidebar class="sidebar"/>
        <Header class="header"/>
        <OpenOrder class="openOrder"/>
    </div>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import OpenOrder from '@/components/OpenOrder.vue';

export default {
    name: 'Home',
    components: {
        Sidebar,
        Header,
        OpenOrder
    }
}
</script>

<style>
    .container {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 342px auto;
        grid-template-rows: 72px auto;
        grid-template-areas: 
            "sidebar header"
            "sidebar openOrder"
        ;
    }

    .header{
        grid-area: header;
    }
    .sidebar {
        grid-area: sidebar;
    }
    .openOrder {
        grid-area: openOrder;
    }


    /* MEDIA QUERY */
    @media (max-width: 723px) {
    .container {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 72px auto;
        grid-template-areas: 
            "header header"
            "openOrder openOrder"
        ;
    }

    .header{
        grid-area: header;
    }
    .sidebar {
        display: none;
    }
    .openOrder {
        grid-area: openOrder;
    }
    }
</style>