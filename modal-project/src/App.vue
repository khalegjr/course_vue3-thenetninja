<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>

  <teleport to="#modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <!-- Um slot nomeado pode ser chamado em qualquer lugar -->
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Header of the Modal</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
    <!-- @close fica escutando o evento em Modal e ativa o toggleModal -->
  </teleport>

  <div v-if="showModal2">
    <Modal theme="challenge" @close="toggleModalChallenge">
      <h2>Esse é um outro Model</h2>
      <p>Com um outro tema, pedido para o challenge.</p>
      <template v-slot:links>
        <a href="https://github.com/khalegjr" target="_blank">GitHub </a>
      </template>
    </Modal>
  </div>

  <button @click.alt="toggleModal">show modal (alt)</button>
  <button @click="toggleModalChallenge">show modal 2</button>
</template>

<script>
  import Modal from "./components/Modal.vue";
  export default {
    name: "App",
    components: {
      Modal,
    },
    data() {
      return {
        title: "My First Vue App :)",
        showModal: false,
        showModal2: false,
      };
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal;
      },
      toggleModalChallenge() {
        this.showModal2 = !this.showModal2;
      },
    },
  };
</script>

<style>
  #app,
  #modals {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1 {
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
  }
</style>
