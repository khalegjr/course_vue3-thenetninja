<template>
  <div class="home">
    <h1>Home</h1>
    <post-list :posts="posts" />
  </div>
</template>

<script>
  import { ref } from "vue";
  import PostList from "../components/PostList.vue";
  // @ is an alias to /src

  export default {
    components: { PostList },
    name: "Home",

    setup() {
      const posts = ref([
        {
          title: "welcome to the blog",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet nostrum aperiam maxime voluptatum quasi, delectus sapiente aut. Fugit maiores ullam, nisi odio blanditiis nam corrupti, assumenda qui neque similique distinctio laudantium, magni sed architecto. Eius vero laborum ad impedit. Officiis enim dolores a dolore, voluptates veniam debitis itaque accusantium. Sapiente vero maxime placeat tenetur qui laborum omnis tempore voluptates nulla rerum nobis quod minus unde, voluptatibus dicta, cumque alias pariatur incidunt esse vitae, nihil ex porro magni. Optio harum vitae, facilis, labore voluptas sequi eligendi temporibus, officia ducimus culpa rem deserunt nobis qui corrupti tempore provident dolorum ullam ipsam.",
          id: 1,
        },
        { title: "top 5 css tips", body: "lorem ipsum", id: 2 },
      ]);

      return { posts };
    },
  };
</script>
