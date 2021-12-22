<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>seach term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
  import { ref, reactive, computed } from "vue";
  // @ is an alias to /src

  export default {
    name: "Home",

    setup() {
      const search = ref("");
      const names = ref(["mario", "luigi", "toad", "bowser", "koopa", "peach"]);

      const matchingNames = computed(() => {
        return names.value.filter((name) => name.includes(search.value));
      });

      return { names, search, matchingNames };
    },
  };
</script>
