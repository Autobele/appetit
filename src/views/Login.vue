<template>
  <div class="wrapper">
      <div class="content">
          <img alt="Appetit Logo" src="@/assets/logo.svg" id="logo">
            <div class="heading__Wrapper">
                <h3 class="greeting-heading">Seja bem-vindo!</h3>
                <div class="subheading">
                    <p>Nós sabemos a importância de estar sempre de barriga cheia e o
                    quanto isso pode ajudar no seu dia.</p>
                </div>
            </div>
            <Form/>
      </div>
  </div>
</template>

<script>

import Form from '@/components/Form.vue';

export default {
  name: 'login',
  components: {
      Form
  }
}
</script>

<style scoped>

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background: var(--bg-color-primary);
  width: 100%;
  height: 100vh;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4%;
}

.content img {
    margin-bottom: 40px;
}

.heading__Wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 40px;
}

.greeting-heading {
    height: 36px;
    top: calc(50% - 36px / 2 - 146px);

    text-align: center;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 16px;
}

.subheading {
    display: flex;
    align-items: center;
    justify-content: center;
}

.subheading p {
    height: 48px;
    text-align: center;
    width: 59%;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    top: calc(50% - 48px / 2 - 88px);
    color: rgba(0, 0, 0, 0.54);
}

</style>
