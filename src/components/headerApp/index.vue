<template>
  <div class="header z-10" :class="{dark: darkTheme}">
    <burger-menu></burger-menu>
    <div class="text-xl flex-1 header-title" :class="{dark: darkTheme}">{{title}}</div>
    <div class="slot flex-1 text-xl text-right"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import burgerMenu from "@/components/burgerMenu";
export default {
  name: "headerApp",

  props: {
    title: {
      type: String,
      required: false,
      default: "Header"
    }
  },

  computed: {
    ...mapState(["darkTheme"])
  },

  components: {
    burgerMenu
  }
};
</script>

<style lang="postcss" scoped>
.header {
  @apply bg-white fixed pin-t w-full shadow text-white py-4 flex justify-between items-center px-4 flex-wrap;
  transition: all 0.3s ease;
}

.header.dark {
  @apply bg-blue-darkest;
}

.header-title {
  @apply font-bold font-sans text-teal;
  text-transform: uppercase;
}

.header-title.dark {
  color: white;
}
</style>


