<template>
  <div class="search__Wrapper">
          <a href=""><img src="@/assets/search.svg" alt="Search"></a>
          <div class="search_Content">
              <input type="search" name="" id="inputSearch" placeholder="Procurar o pedido aqui...">
          </div>
          <a href=""><img src="@/assets/config.svg" alt="Search"></a>
      </div>
</template>

<script>
export default {
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
        width: 220px;
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
</style>