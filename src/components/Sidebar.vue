<template>
  <div class="container">
      <div class="logo">
          <img src="@/assets/logo-white.png" alt="Appetit Logo White">
      </div>
      <nav>
          <ul class="menu-list">
              <ul class="menu-list-item">
                  <router-link to="/home"><li class="topic-item"><a href=""><img src="@/assets/list-ico.svg" alt="list-ico"><span>Pedidos</span></a></li></router-link>
                  <router-link to="/home"><li class="topic-subitem"><a href="/home"><img src="@/assets/indicator-ico.png" alt="list-ico"><span>Em aberto</span></a></li></router-link>
                  <router-link to="/home"><li class="topic-subitem disabled"><a href="/home"><img src="@/assets/indicator-ico.png" alt="list-ico"><span>Encerrados</span></a></li></router-link>
                  <router-link to="/home"><li class="topic-item disabled"><a><img src="@/assets/person-ico.svg" alt="list-ico"><span>Clientes</span></a></li></router-link>
              </ul>
          </ul>
      </nav>
      <div class="copyright"><p>Infoway Gestão em Saúde ©, 2019.</p></div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    :root {
        --primary: #FF8822;
    }

    .container {
        width: 342px;
        height: 100%;
        position: fixed;
        background-color: #FF8822;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
    }

    .logo {
        width: 100%;
        text-align: center;
        position: absolute;
        top: 7.29%;
    }

    .menu-list{
        width: 100%;
        position: absolute;
        top: 216px;
    }

    .menu-list-item {
        width: 100%;
        list-style-type: none;
    }

    .topic-item{
        width: 100%;
        padding: 17px 44px;
        background-color: white;
        margin-bottom: 23px;
    }

    .topic-item a {
        display: flex;
        align-items: center;
    }

    .topic-item img{
        background-color: var(--primary);
        margin-right: 28px;
    }

    .topic-item span {
        text-transform: uppercase;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        color: var(--primary);
    }

    .topic-subitem {
        padding-left: 62px;
        display: flex;
        align-items: center;
        margin-bottom: 22px;
    }

    .topic-item a{
        color: #FF8822;
    }

    .topic-subitem img{ 
        margin-right: 16px;
        height: 20px;
    }

    .topic-subitem a {
        display: flex;
        align-items: center;
    }

    .topic-subitem span {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        /* identical to box height, or 157% */

        text-transform: uppercase;

        color: #FFFFFF;
    }

    .topic-subitem.disabled a > img{
        opacity: 0;
    }

    .topic-subitem.disabled a > span {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.54);
    }

    .topic-item.disabled {
        background-color: #FF8822;
    }

    .topic-item.disabled img {
        color: rgba(255, 255, 255, 0.54);
        opacity: 0.5;
    }

    .topic-item.disabled span{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        /* identical to box height, or 157% */

        text-transform: uppercase;

        /* White */

        color: rgba(255, 255, 255, 0.54);
    }

    .copyright {
        position: absolute;
        text-align: center;
        width: 342px;
        color: white;
        bottom: 40px;
    }

</style>