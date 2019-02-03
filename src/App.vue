<template>
  <div id="app">
    <header-app title="ma news"></header-app>
    <side-menu v-if="toggleMenu"></side-menu>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { config } from "./config/";
import headerApp from "@/components/headerApp";
import sideMenu from "@/components/sideMenu";

export default {
  name: "app",

  computed: {
    ...mapState(["toggleMenu", "darkTheme"])
  },

  mounted() {
    this.fetchNews();
  },

  watch: {
    darkTheme(newVal) {
      if (newVal) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  },

  components: { headerApp, sideMenu },

  methods: {
    fetchNews() {
      fetch(config().url)
        .then(res => res.json())
        .then(data => {
          if (data.status == "ok") {
            this.$store.commit("setArticles", data.articles);
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>


<style lang="postcss">
body {
  background: white;
}

body.dark {
  @apply bg-blue-darker;
  color: white !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* #nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}  */
</style>
