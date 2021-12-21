<template>
  <div class="home">
    home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
  import { ref } from "vue";
  // @ is an alias to /src

  export default {
    name: "Home",

    setup() {
      console.log(this);

      const p = ref(null);
      console.log(p);
      console.log(p.value);

      let name = "khaled";
      let age = 38;

      const handleClick = () => {
        console.log(p.value);
        p.value.classList.add("test");
        p.value.textContent = "hello, ninjas";
      };

      return { name, age, handleClick, p };
    },
  };
</script>
