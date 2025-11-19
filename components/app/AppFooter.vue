<template>
  <div>
    <footer class="footer">
      <div class="content">
        <a
          class="footer__link"
          href="https://www.github.com/kier-mc"
          target="_blank"
          aria-label="Visit Github (opens in new tab)"
        >
          <AppIcon class="footer__icon" icon="github" />
        </a>
        <p class="footer__text">© 2024</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@use "../../assets/styles/var/mixin";
@use "../../assets/styles/var/size";

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--sz-screen-xl);
  padding: var(--sz-md);
  margin-inline: auto;

  &__link {
    all: unset;
    cursor: pointer;
    position: relative;
    margin-inline: auto;

    &::before {
      @include mixin.link-focus(size.border("lg"), 50%);
    }

    &:focus-visible::before {
      opacity: 1;
    }
  }

  &__icon {
    display: flex;
    width: var(--sz-icon-md);
  }

  &__text {
    font-size: var(--sz-text-xs);
  }
}

.content {
  display: grid;
  row-gap: var(--sz-2xs);
  justify-content: center;
  margin-inline: auto;
  text-align: center;
}
</style>

<script setup lang="ts"></script>
