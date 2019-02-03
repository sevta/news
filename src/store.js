import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    articleView: {},
    toggleMenu: false,
    darkTheme: false,
    news: []
  },
  mutations: {
    openMenu(state, payload) {
      state.toggleMenu = payload;
    },

    setArticleView(state, payload) {
      state.articleView = payload;
    },

    setArticles(state, payload) {
      state.articles = payload;
    },

    setDarkTheme(state, payload) {
      state.darkTheme = payload;
    }
  },
  actions: {}
});
