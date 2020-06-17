<template>
  <div class="column-3">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .column-3 {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 342px 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "sidebar middleSection infoSection"
        ;
    }

    .header{
        grid-area: header;
    }
    .sidebar {
        grid-area: sidebar;
    }
    .middleSection {
        grid-area: middleSection;
    }
    .infoSection {
        grid-area: infoSection;
    }

    
    @media (max-width: 1058px) {
    .column-3 {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "middleSection infoSection"
        ;
    }

    .header {
        display: header
    }
    .sidebar {
        display: none;
    }
    .middleSection {
        display: middleSection;
    }
    .infoSection {
        grid-area: infoSection;
    }
    }

    /* MEDIA QUERY */
    @media (max-width: 750px) {
    .column-3 {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 
            "infoSection"
            "infoSection"
        ;
    }

    .header {
        display: none
    }
    .sidebar {
        display: none;
    }
    .middleSection {
        display: none
    }
    .infoSection {
        grid-area: infoSection;
    }

    }
</style>