<template>
  <header class="header">
    <AppLogo class="logo" background-opacity="0.85" />
    <nav class="nav">
      <ul class="links">
        <li v-for="(link, key) in data.links" :key="key" class="link">
          <a :href="`#${link.to}`">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@use "../assets/styles/var/colour";
@use "../assets/styles/var/easing";
@use "../assets/styles/var/size";
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(var(--sz-xs));
}
.logo {
  max-width: var(--sz-logo);
}
.links {
  all: unset;
  display: inline-flex;
  gap: var(--sz-md);
}
.link {
  all: unset;
}
.link > a {
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
  &:hover {
    &::before {
      transform: translateY(100%) scale(1, 1);
    }
  }
}
</style>

<script setup lang="ts">
const data = {
  links: [
    { label: "Home", to: "home" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ],
};
</script>
