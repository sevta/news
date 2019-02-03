<template>
  <div class="settings-container">
    <div class="container mx-auto px-4">
      <h1 class="title text-left capitalize" :class="classDark">settings</h1>
      <div class="w-full h-px bg-grey-lighter my-5"></div>
      <div class="list-setting-container">
        <div class="list-settings">
          <div class="text-lg list-settings-text" :class="classDark">dark theme</div>
          <switch-button :toggle="darkTheme" :on-switch-button-click="toggleThemeClick"></switch-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import switchButton from "@/components/button/switchButton";

export default {
  name: "settings",

  components: {
    switchButton
  },

  computed: {
    ...mapState(["darkTheme"]),

    classDark() {
      return {
        dark: this.darkTheme == true
      };
    }
  },

  data() {
    return {
      toggleTheme: false
    };
  },

  mounted() {
    this.$store.commit("openMenu", false);
  },

  methods: {
    toggleThemeClick() {
      this.$store.commit("setDarkTheme", !this.darkTheme);
    }
  }
};
</script>

<style lang="postcss" scoped>
.settings-container {
  padding-top: 80px;
}

.title.dark {
  color: white;
}

.list-settings-text.dark {
  color: white;
}

.list-settings {
  @apply px-2 cursor-pointer py-3 flex justify-between items-center;
  transition: all 0.3s ease;
}

.list-settings:hover {
  /* @apply shadow; */
}
</style>

