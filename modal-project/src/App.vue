<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal" />
    <!-- @close fica escutando o evento em Modal e ativa o toggleModal -->
  </div>
  <button @click="toggleModal">show modal</button>
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
        header: "Header of the Modal",
        text: "Grab your ninja swag for half price!",
        showModal: false,
      };
    },
    methods: {
      handleClick() {
        console.log(this.$refs.name);
        this.$refs.name.focus();
      },

      toggleModal() {
        this.showModal = !this.showModal;
      },
    },
  };
</script>

<style>
  #app {
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
