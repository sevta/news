<template>
  <div class="about h-screen w-full flex flex-col items-center justify-center">
    <h3 class="title" :class="classDark">news web app v.01</h3>
    <p class="content text-sm mt-5" :class="classDark">
      api powered by
      <a href="https://newsapi.org" target="_blank">https://newsapi.org</a>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "about",
  computed: {
    ...mapState(["darkTheme"]),

    classDark() {
      return {
        dark: this.darkTheme == true
      };
    }
  }
};
</script>

<style lang="postcss" scoped>
.title.dark {
  color: white;
}

.content.dark {
  color: white;
}

.content.dark a {
  color: white;
}
</style>


