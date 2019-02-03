<template>
  <div class="burgermenu-container flex-1 text-left">
    <div class="burgermenu" @click="openMenu" :class="{dark: darkTheme}">
      <div class="line bg-teal"></div>
      <div class="line bg-teal"></div>
      <div class="line bg-teal"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "burgerMenu",

  computed: {
    ...mapState(["toggleMenu", "darkTheme"])
  },

  methods: {
    openMenu() {
      this.$store.commit("openMenu", !this.toggleMenu);
    }
  }
};
</script>

<style lang="scss" scoped>
.burgermenu {
  width: 20px;
  height: 14px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &.dark {
    .line {
      background: white;
    }
  }
  .line {
    width: 100%;
    height: 2.5px;
    border-radius: 3px;
    /* background-color: #fff; */
  }
}
</style>

