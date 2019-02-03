<template>
  <div class="articles-container">
    <div class="news" v-for="(article , i) in articles" :key="i">
      <div class="news-img cursor-pointer" @click="onLinkClick(article)">
        <img :src="article.urlToImage" alt>
      </div>
      <div class="news-title cursor-pointer">
        <div
          @click="onLinkClick(article)"
          class="news-title--text"
          :class="{dark: darkTheme}"
        >{{ article.title }}</div>
      </div>
      <div class="news-content">
        <!-- <p>{{ description }}</p> -->
      </div>
      <div class="news-bottom">
        <div class="date">{{ article.publishedAt }}</div>
        <!-- <div class="text-left">view</div> -->
      </div>
      <div class="divider" :class="{dark: 'darkTheme'}"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "articles",

  props: {
    articles: {
      type: Array,
      required: true
    },
    onLinkClick: {
      type: Function,
      required: false
    }
  },

  computed: {
    ...mapState(["toggleMenu", "darkTheme"])
  }
};
</script>

<style lang="postcss" scoped>
.news {
  @apply p-2;
}

.divider {
  @apply my-5;
  border-bottom: 1px solid #ddd;
  opacity: 0.5;
}

.divider.dark {
  border-bottom: 1px solid #ddd;
  opacity: 0.1;
}

.news-title--text {
  @apply text-xl font-sans capitalize font-semibold text-left;
}
.news-title--text.dark {
  color: white;
}

.news-content {
  @apply mt-3 leading-normal text-sm;
}

.news-img {
  width: 100%;
  height: 100%;
  @apply mb-3 overflow-hidden rounded;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.news-bottom {
  @apply flex items-center justify-between;
}

.date {
  @apply text-xs bg-yellow p-1 rounded text-grey-darkest font-bold;
}

.articles-container {
  @apply p-2;
  padding-top: 50px;
}
</style>


