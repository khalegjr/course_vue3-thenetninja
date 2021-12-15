<template>
  <div class="block" v-if="showBlock">click me</div>
</template>

<script>
  export default {
    props: ["delay"],

    data() {
      return {
        showBlock: false,
      };
    },

    mounted() {
      // quando o componente é montado no DOM
      console.log("component mounted");
      setTimeout(() => {
        this.showBlock = true;
        console.log(this.delay);
      }, this.delay);
    },

    updated() {
      // quando o componente é atualizado no DOM
      console.log("component updated");
    },

    unmounted() {
      // quando o componente é desmontado do DOM
      console.log("component unmounted");
    },
  };
</script>

<style scoped>
  .block {
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>
