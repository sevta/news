<template>
  <div class="article-wrapper">
    <div class="header">
      <img :src="articleView.urlToImage" class="img" alt>
    </div>
    <div class="news-view-container container max-w-md mx-auto">
      <div class="title" :class="classDark">{{ articleView.title }}</div>
      <div class="content" :class="classDark">{{ articleView.content }}</div>
      <a class="link-article" target="_blank" :href="articleView.url">baca selengkapnya</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "newsView",

  computed: {
    ...mapState(["articleView", "darkTheme"]),

    classDark() {
      return {
        dark: this.darkTheme == true
      };
    }
  },

  mounted() {
    console.log(this.articleView);
  }
};
</script>

<style lang="postcss" scoped>
.article-wrapper {
  padding-top: 54px;
}

.news-view-container {
  @apply mt-1 p-3;
}

.header {
  width: 100%;
  height: 30vh;
  background: tomato;
}

@media (min-width: 768px) {
  .header {
    height: 60vh;
  }
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.title {
  @apply font-sans text-xl mt-3 leading-tight font-semibold text-left;
}

.title.dark {
  color: white;
}

.link-article {
  @apply bg-yellow capitalize text-grey-darkest font-bold w-full flex py-3 mb-5 justify-center no-underline;
}

.content {
  @apply my-4 leading-normal font-sans text-base text-left text-grey-darker;
}

.content.dark {
  color: white;
}
</style>

