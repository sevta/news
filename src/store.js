import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    articleView: {},
    toggleMenu: false,
    location: {
      longtitude: null,
      latitude: null
    },
    zomatoLocation: {
      cityID: null,
      cityName: null,
      countryID: null,
      countryName: null
    },
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
    },

    setLocation(state, { latitude, longtitude }) {
      state.location.latitude = latitude;
      state.location.longtitude = longtitude;
    },

    setZomatoLocation(state, { cityID, countryID, cityName, countryName }) {
      state.zomatoLocation.cityID = cityID;
      state.zomatoLocation.cityName = cityName;
      state.zomatoLocation.countryID = countryID;
      state.zomatoLocation.countryName = countryName;
    }
  },
  actions: {}
});
