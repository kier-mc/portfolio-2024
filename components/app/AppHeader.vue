<template>
  <div>
    <header class="header">
      <AppLogo class="logo" background-opacity="0.85" />
      <nav class="nav">
        <ul class="links">
          <li v-for="{ key, label, to } in links" :key="key">
            <a class="link" :href="`#${to}`">{{ label }}</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/styles/var/mixin";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--sz-screen-xl);
  margin-inline: auto;
}

.logo {
  max-width: var(--sz-logo);
}

.links {
  all: unset;
  display: inline-flex;
  column-gap: var(--sz-md);
  & li {
    all: unset;
  }
}

.link {
  all: unset;
  cursor: pointer;
  position: relative;
  padding: var(--sz-sm) var(--sz-md);

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateY(100%) scale(0, 0);
    transform-origin: center;
    height: var(--sz-border-lg);
    border-radius: var(--sz-xs);
    background-color: var(--cl-primary);
    transition: transform 350ms var(--ef-out-quart);
  }

  &::after {
    @include mixin.link-focus;
  }

  &:hover {
    &::before {
      transform: translateY(100%) scale(1, 1);
    }
  }

  &:focus-visible::after {
    opacity: 1;
  }
}
</style>

<script setup lang="ts">
type Link = {
  key: number;
  label: string;
  to: string;
};

type Data = {
  links: Link[];
};

const data: Data = {
  links: [
    { key: 1, label: "Home", to: "home" },
    { key: 2, label: "Skills", to: "skills" },
    { key: 3, label: "Work", to: "work" },
  ],
};
const { links } = data;
</script>
