<template>
  <div class="column-2">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .column-2 {
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

    slot {
        width: 100%;
        height: 100%;
    }

    /* MEDIA QUERY */
    @media (max-width: 723px) {
    .column-2 {
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