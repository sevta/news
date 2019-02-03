<template>
  <div class="home-container container max-w-md mx-auto">
    <div class="articles-container">
      <div v-if="articles.length == 0">loading...</div>
      <articles :articles="articles" :on-link-click="onLinkClick"></articles>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { users } from "../__mockup/user";
import { config } from "../config/";
import articles from "@/components/articles";

export default {
  name: "home",

  computed: {
    ...mapState(["articles"])
  },

  components: {
    articles
  },

  mounted() {
    this.$store.commit("openMenu", false);
  },

  watch: {
    articles(newVal) {
      console.log("articles home", this.articles);
    }
  },

  methods: {
    onLinkClick(article) {
      this.$store.commit("setArticleView", article);
      this.$router.push("/article");
    }
  }
};
</script>

<style lang="postcss" scoped>
.home-container {
  @apply pt-5;
}
</style>

