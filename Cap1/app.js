const app = Vue.createApp({
  //   template: "<h2>Esse é o template</h2>",
  data() {
    return {
      showBooks: true,
      books: [
        { title: "Livro 1", author: "Autor 1", isFav: true },
        { title: "Livro 2", author: "Autor 2", isFav: false },
        { title: "Livro 3", author: "Autor 3", isFav: true },
      ],
      title: "Um título qualquer",
      author: "Um cara ai, ou uma cara ai",
      age: "40",
      x: 0,
      y: 0,
    };
  },

  methods: {
    changeTitle() {
      this.title = "Título mudado por método";
    },

    changeTitleWithParameter(title) {
      this.title = title;
    },

    toogleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    handleEvent(event, data) {
      console.log(event, event.type, data);
    },

    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      //   console.log(this.x, this.y);
    },

    toogleFav(book) {
      book.isFav = !book.isFav;
    },
  },

  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
