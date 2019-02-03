<template>
  <div class="side-menu-cover" @click="coverMenuClick">
    <div class="side-menu" :class="classDark" @click="innerMenuClick">
      <ul class="list-menu-container">
        <li
          class="list-menu"
          :class="classDark"
          v-for="(route ,i) in routes"
          :key="i"
          @click="listMenuClick"
        >
          <router-link :to="route.path">{{route.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import router from "../../router";

export default {
  name: "sideMenu",

  computed: {
    ...mapState(["toggleMenu", "darkTheme"]),

    routes() {
      return router.options.routes;
    },

    classDark() {
      return {
        dark: this.darkTheme == true
      };
    }
  },

  methods: {
    coverMenuClick() {
      this.$store.commit("openMenu", false);
    },

    innerMenuClick(e) {
      e.stopPropagation();
    },

    listMenuClick() {
      this.$store.commit("openMenu", false);
    }
  }
};
</script>

<style lang="postcss" scoped>
.side-menu-cover {
  @apply fixed pin-y pin-x text-white z-20;
  padding: 60px 10px 0px 10px;
  background-color: rgba(0, 0, 0, 0.5);
}

.side-menu {
  @apply fixed flex pin-y pin-l bg-white shadow-lg text-grey-darker;
  width: 260px;
  padding: 50px 20px;
}

.side-menu.dark {
  @apply bg-blue-darker;
}

.list-menu-container {
  @apply list-reset;
}

.list-menu {
  @apply font-bold cursor-pointer text-left my-5;
}

.list-menu a {
  @apply text-grey-darker no-underline;
  text-transform: capitalize;
}

.list-menu.dark a {
  color: white;
}
</style>


