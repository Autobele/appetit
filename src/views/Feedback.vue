<template>
  <div class="feedback_Container">
    <Sidebar class="sidebar" />
    <Header class="header" />
    <section class="feedback_content">
      <img src="@/assets/feedback.svg" alt />
      <div class="btn_container">
        <router-link to="/home">
          <a href class="btn-ofusc">voltar para lista de pedidos</a>
        </router-link>
        <router-link to="/select-product">
          <a href class="btn-primary">fazer novo pedido</a>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";

export default {
  name: "feedback",
  components: {
    Sidebar,
    Header
  }
};
</script>

<style scoped>
.feedback_Container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 342px auto;
  grid-template-rows: 72px calc(100vh - 72px);
  grid-template-areas:
    "sidebar header"
    "sidebar feedback_content";
}

.sidebar {
  grid-area: sidebar;
}

.header {
  grid-area: header;
}

.feedback_content {
  grid-area: feedback_content;
  width: 100%;
  height: 100vh - 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.feedback_content .btn_container {
  margin: 40px 0;
}

.btn-ofusc {
  width: 328px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 100px;
  padding: 13px 70px;
  text-transform: uppercase;
  margin-right: 16px;
  border: 2px solid rgba(0, 0, 0, 0.88);
}

.btn-primary {
  background-color: #ff8822;
  width: 500px;
  height: 48px;
  background: #ff8822;
  border-radius: 100px;
  box-sizing: border-box;
  padding: 13px 100px;
  text-transform: uppercase;
  color: white;
}

@media (max-width: 1000px) {
    .feedback_Container {
        margin: 0;
        padding: 0;
        display: grid;
        width: 100%;
        height: 100vh;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 
            "feedback_content"
        ;
    }

    .header {
        display: none
    }
    .sidebar {
        display: none;
    }
    .feedback_content {
        grid-area: feedback_content;
    }
    }

</style>