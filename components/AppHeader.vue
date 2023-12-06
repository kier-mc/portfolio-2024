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
@use "../assets/styles/var/size";
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(size.$xs);
}
.logo {
  max-width: size.$header-logo;
}
.links {
  all: unset;
  display: inline-flex;
  gap: size.$md;
}
.link {
  all: unset;
}
.link > a {
  all: unset;
  cursor: pointer;
}
</style>

<script setup lang="ts">
const data = {
  links: [
    { label: "Home", to: "anchor-home" },
    { label: "Projects", to: "anchor-skills" },
    { label: "Contact", to: "anchor-contact" },
  ],
};
</script>
