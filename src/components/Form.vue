<template>
  <div class="container">
      <form action="">
        <div>
            <label class="pure-material-textfield-outlined">
                <input type="email" placeholder="Email" v-model="email">
                <span>Email</span>
            </label>
        </div>
        <div>
            <label class="pure-material-textfield-outlined">
                <input type="password" placeholder="Senha" v-model="senha">
                <span>Senha</span>
            </label>
        </div>
        <router-link to="/home" tag="button" :disabled="!clickable" >entrar</router-link>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            senha: '',
        }
    },
    computed: {
        // eslint-disable-next-line vue/return-in-computed-property
        clickable() {
            if(this.email.length >= 4 && this.senha.length >= 4){
                return true;
            }   
        }
    },
}
</script>

<style scoped>
    :root {
        --pure-material-onsurface-rgb: #FF8822;
        --pure-material-primary-rgb: #FF8822;
    }
    .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: auto;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 56%;
        justify-content: space-between;
    }

    form .pure-material-textfield-outlined {
        width: 100%;
    }

    form > div{
        margin-bottom: 24px;
    }

    form button {
        width: 328px;
        height: 48px;
        padding: 15px;
        background: var(--primary-color);
        color: white;
        border-radius: 100px;
        outline: none;
        border: none;
        text-transform: uppercase;
        align-self: center;
        cursor: pointer;
    }

    form button:disabled {
        background: #FCD3B1;
        cursor: auto;
    }

    .pure-material-textfield-outlined {
    --pure-material-safari-helper1: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    position: relative;
    display: inline-block;
    padding-top: 6px;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    overflow: hidden;
    }

    /* Input, Textarea */
    .pure-material-textfield-outlined > input,
    .pure-material-textfield-outlined > textarea {
        box-sizing: border-box;
        margin: 0;
        border: solid 1px; /* Safari */
        border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
        border-top-color: transparent;
        border-radius: 4px;
        padding: 15px 13px 15px;
        width: 100%;
        height: inherit;
        color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
        background-color: transparent;
        box-shadow: none; /* Firefox */
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        caret-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
        transition: border 0.2s, box-shadow 0.2s;
    }

    /* Span */
    .pure-material-textfield-outlined > input + span,
    .pure-material-textfield-outlined > textarea + span {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
        width: 100%;
        max-height: 100%;
        color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
        font-size: 75%;
        line-height: 15px;
        cursor: text;
        transition: color 0.2s, font-size 0.2s, line-height 0.2s;
    }

    /* Corners */
    .pure-material-textfield-outlined > input + span::before,
    .pure-material-textfield-outlined > input + span::after,
    .pure-material-textfield-outlined > textarea + span::before,
    .pure-material-textfield-outlined > textarea + span::after {
        content: "";
        display: block;
        box-sizing: border-box;
        margin-top: 6px;
        border-top: solid 1px;
        border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
        min-width: 10px;
        height: 8px;
        pointer-events: none;
        box-shadow: inset 0 1px transparent;
        transition: border-color 0.2s, box-shadow 0.2s;
    }

    .pure-material-textfield-outlined > input + span::before,
    .pure-material-textfield-outlined > textarea + span::before {
        margin-right: 4px;
        border-left: solid 1px transparent;
        border-radius: 4px 0;
    }

    .pure-material-textfield-outlined > input + span::after,
    .pure-material-textfield-outlined > textarea + span::after {
        flex-grow: 1;
        margin-left: 4px;
        border-right: solid 1px transparent;
        border-radius: 0 4px;
    }

    /* Hover */
    .pure-material-textfield-outlined:hover > input,
    .pure-material-textfield-outlined:hover > textarea {
        border-color: #FF8822;
        border-top-color: transparent;
    }

    .pure-material-textfield-outlined:hover > input + span::before,
    .pure-material-textfield-outlined:hover > textarea + span::before,
    .pure-material-textfield-outlined:hover > input + span::after,
    .pure-material-textfield-outlined:hover > textarea + span::after {
        border-top-color: #FF8822;
    }

    .pure-material-textfield-outlined:hover > input:not(:focus):placeholder-shown,
    .pure-material-textfield-outlined:hover > textarea:not(:focus):placeholder-shown {
        border-color: #FF8822;
    }

    /* Placeholder-shown */
    .pure-material-textfield-outlined > input:not(:focus):placeholder-shown,
    .pure-material-textfield-outlined > textarea:not(:focus):placeholder-shown {
        border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    }

    .pure-material-textfield-outlined > input:not(:focus):placeholder-shown + span,
    .pure-material-textfield-outlined > textarea:not(:focus):placeholder-shown + span {
        font-size: inherit;
        line-height: 68px;
    }

    .pure-material-textfield-outlined > input:not(:focus):placeholder-shown + span::before,
    .pure-material-textfield-outlined > textarea:not(:focus):placeholder-shown + span::before,
    .pure-material-textfield-outlined > input:not(:focus):placeholder-shown + span::after,
    .pure-material-textfield-outlined > textarea:not(:focus):placeholder-shown + span::after {
        border-top-color: transparent;
    }

    /* Focus */
    .pure-material-textfield-outlined > input:focus,
    .pure-material-textfield-outlined > textarea:focus {
        border-color: #FF8822;;
        border-top-color: transparent;
        outline: none;
    }

    .pure-material-textfield-outlined > input:focus + span,
    .pure-material-textfield-outlined > textarea:focus + span {
        color: #FF8822;
    }

    .pure-material-textfield-outlined > input:focus + span::before,
    .pure-material-textfield-outlined > input:focus + span::after,
    .pure-material-textfield-outlined > textarea:focus + span::before,
    .pure-material-textfield-outlined > textarea:focus + span::after {
        border-top-color: #FF8822;
    }


    /* Faster transition in Safari for less noticable fractional font-size issue */
    @media not all and (min-resolution:.001dpcm) {
        @supports (-webkit-appearance:none) {
            .pure-material-textfield-outlined > input,
            .pure-material-textfield-outlined > input + span,
            .pure-material-textfield-outlined > textarea,
            .pure-material-textfield-outlined > textarea + span,
            .pure-material-textfield-outlined > input + span::before,
            .pure-material-textfield-outlined > input + span::after,
            .pure-material-textfield-outlined > textarea + span::before,
            .pure-material-textfield-outlined > textarea + span::after {
                transition-duration: 0.1s;
            }
        }
    }
</style>