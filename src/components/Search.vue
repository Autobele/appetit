<template>
  <div class="search__Wrapper">
          <a href=""><img src="@/assets/search.svg" alt="Search"></a>
          <div class="search_Content">
              <input type="search" :class="{bgcolor: bgcolor}" id="inputSearch" :placeholder="plholder ? plholder : 'Procurar o pedido aqui...'">
          </div>
          <a href="" :class="{hidden: hideElement}"><img src="@/assets/config.svg" alt="Config"></a>
      </div>
</template>

<script>
export default {
    props: ['hideElement', 'bgcolor', 'plholder'],
    name: 'search'
}
</script>

<style>
.search__Wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .search__Wrapper .search_Content {
        align-self: flex-start;
        width: 100%;
    }

    .search_Content input{
        width: 100%;
        height: 24px;
        margin-left: 11px;

        /* Body */
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        outline: none;
        border: none;

        color: rgba(0, 0, 0, 0.54);
    }

    .hidden {
        visibility: hidden;
        -moz-user-select: none;
    }

    .bgcolor{
        background-color: #FAFAFA;
    }
    input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
    input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }

    /* clears the 'X' from Chrome */
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { display: none; }

</style>