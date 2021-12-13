<template>
  <div class="backdrop" @click.self="closeModal">
    <!-- O .self diz que o click não é capturado nos children  -->
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    props: ["theme"],

    methods: {
      closeModal() {
        this.$emit("close"); // emite um custom event para o componente pai
      },
    },
  };
</script>

<style>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
  }

  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }

  .modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
  }

  .modal.sale {
    background: crimson;
    color: white;
  }

  .modal.sale h1 {
    color: white;
  }
</style>
