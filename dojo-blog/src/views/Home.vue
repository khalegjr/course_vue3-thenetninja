<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <button @click="handleClick">stop watching</button>
    <p>seach term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
  import { ref, computed, watch, watchEffect } from "vue";
  // @ is an alias to /src

  export default {
    name: "Home",

    setup() {
      const search = ref("");
      const names = ref(["mario", "luigi", "toad", "bowser", "koopa", "peach"]);

      const stopWatch = watch(search, () => {
        console.log("watch function run");
      });

      const stopEffect = watchEffect(() =>
        console.log("watchEffect function run", search.value)
      );

      const matchingNames = computed(() => {
        return names.value.filter((name) => name.includes(search.value));
      });

      const handleClick = () => {
        stopWatch();
        stopEffect();
      };

      return { names, search, matchingNames, handleClick };
    },
  };
</script>
