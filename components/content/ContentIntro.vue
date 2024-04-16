<template>
  <article class="introduction">
    <h2>Introduction</h2>
    <div class="introduction__content">
      <p>
        I'm Kieran, a web developer from the UK with strong front end skills but a good knowledge of how
        things work across the stack, from design to database. I specialise in clean, responsive and
        maintainable code, where the quality speaks for itself.
      </p>
      <p>
        I love to build and will work on anything, as long as it contributes toward making the world a better
        place.
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.introduction {
  display: grid;
  grid-auto-rows: fit-content;
  row-gap: var(--sz-2xs);
  &__content {
    display: grid;
    row-gap: var(--sz-md);
  }
}
</style>

<script setup lang="ts"></script>
