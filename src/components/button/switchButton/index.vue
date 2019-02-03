<template>
  <div class="button-switch" :class="{active: toggle}" @click="onSwitchButtonClick">
    <div class="bullet"></div>
  </div>
</template>

<script>
export default {
  name: "switchButton",

  props: {
    toggle: {
      type: Boolean,
      required: true
    },
    onSwitchButtonClick: {
      type: Function,
      required: false
    }
  }
};
</script>

<style lang="postcss" scoped>
.button-switch {
  width: 36px;
  height: 22px;
  border-radius: 30px;
  padding: 0px 4px;
  @apply bg-teal-darker relative flex items-center cursor-pointer;
  justify-content: flex-start;
  transition: all 0.3s ease;
}

.button-switch.active {
  @apply bg-teal-light;
  justify-content: flex-end;
  transition: all 0.3s ease;
}

.bullet {
  width: 16px;
  height: 16px;

  @apply bg-white rounded-full;
}
</style>
