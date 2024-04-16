<template>
  <div class="layout" id="home">
    <Transition name="header">
      <AppHeader v-if="shouldFixHeader" class="layout__header layout__header--fixed" />
      <AppHeader v-else class="layout__header" />
    </Transition>
    <main class="layout__content">
      <slot />
    </main>
    <AppFooter class="layout__footer" />
  </div>
</template>

<style scoped lang="scss">
@use "../assets/styles/var/mixin";
@use "../assets/styles/var/size";

.layout {
  $header-padding: size.general("md");
  $header-size: size.specific("logo") + ($header-padding * 2);

  position: relative;
  display: grid;
  grid-template-rows: $header-size 1fr auto;
  min-height: 100svh;
  margin-inline: auto;

  &__header {
    grid-row: 1;
    padding: $header-padding;
    backdrop-filter: blur(var(--sz-xs));

    &--fixed {
      position: fixed;
      top: 0;
      inset-inline: 0;
      z-index: 10;
      border-bottom: var(--sz-border-sm) solid var(--cl-dark-accent-2);

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -5;
        @include mixin.fade(var(--cl-dark), 180deg, 12.5%);
      }
    }
  }

  &__content {
    grid-row: 2;
    display: grid;
    grid-auto-rows: max-content;
    row-gap: var(--sz-3xl);
    max-width: var(--sz-screen-xl);
    padding: var(--sz-md);
    margin-inline: auto;
  }

  &__footer {
    grid-row: 3;
  }
}

.header-enter-active,
.header-leave-active {
  transition: opacity 500ms var(--ef-out-quart);
}
.header-enter-from,
.header-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
const { y: windowY } = useWindowScroll();

const shouldFixHeader = ref<boolean>(false);

watch(windowY, () => {
  windowY.value >= 128 ? (shouldFixHeader.value = true) : (shouldFixHeader.value = false);
});

onMounted(() => {
  if (windowY.value >= 128) shouldFixHeader.value = true;
});
</script>
