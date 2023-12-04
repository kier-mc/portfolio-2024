<template>
  <div class="layout">
    <AppHeader class="layout__header" />
    <main class="layout__body">
      <slot />
    </main>
    <AppFooter class="layout__footer" />
  </div>
</template>

<style scoped lang="scss">
@use "../assets/styles/var/size";
.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  max-width: size.$breakpoint-xl;
  margin-inline: auto;
  &__header {
    grid-row: 1;
  }
  &__body {
    grid-row: 2;
  }
  &__footer {
    grid-row: 3;
  }
}
</style>

<script setup lang="ts"></script>
