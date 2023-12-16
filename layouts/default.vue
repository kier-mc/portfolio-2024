<template>
  <div class="layout" id="home">
    <Transition name="header">
      <AppHeader
        v-if="headerIsFixed"
        ref="header"
        class="layout__header layout__header--fixed"
      />
      <AppHeader v-else ref="header" class="layout__header" />
    </Transition>
    <main class="layout__content">
      <slot />
    </main>
    <AppFooter class="layout__footer" />
  </div>
</template>

<style scoped lang="scss">
@use "../assets/styles/var/colour";
@use "../assets/styles/var/easing";
@use "../assets/styles/var/size";
.layout {
  $header-size: size.$header-logo + (size.$header-padding * 2); // logo + 2x padding
  position: relative;
  display: grid;
  grid-template-rows: $header-size 1fr auto;
  min-height: 100svh;
  max-width: size.$breakpoint-xl;
  margin-inline: auto;
  &__header {
    grid-row: 1;
    padding: size.$md;
    &--fixed {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      max-width: size.$breakpoint-xl;
      z-index: 10;
      margin-inline: auto;
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -5;
        @include colour.fade(colour.$dark, 180deg, 12.5%);
      }
    }
  }
  &__content {
    grid-row: 2;
    display: grid;
    grid-auto-rows: max-content;
    row-gap: size.$md;
    padding-inline: size.$md;
  }
  &__footer {
    grid-row: 3;
  }
}
.header-enter-active,
.header-leave-active {
  transition: opacity 500ms easing.$out-quart;
}
.header-enter-from,
.header-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
const windowY = useWindowScroll().y;
const header: Ref<HTMLElement | null> = ref(null);

const headerIsFixed = computed(() => {
  return windowY.value > 128;
});
</script>
