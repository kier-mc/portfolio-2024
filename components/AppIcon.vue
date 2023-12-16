<template>
  <component :is="setIcon" />
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
enum Icons {
  html = "HTML",
  css = "CSS",
  ts = "TS",
  js = "JS",
  nodejs = "NodeJS",
  vue = "Vue",
  nuxt = "Nuxt",
  pinia = "Pinia",
  vitest = "Vitest",
  jest = "Jest",
  sass = "Sass",
  bootstrap = "Bootstrap",
  tailwind = "Tailwind",
  postgresql = "PostgreSQL",
  git = "Git",
  github = "GitHub",
  vscode = "VSCode",
}

export type ValidIcon = keyof typeof Icons;

const props = defineProps({
  icon: { type: String as PropType<ValidIcon>, required: true },
});

const setIcon = computed(() => {
  const icon = Icons[props.icon];
  return defineAsyncComponent(() => import(`./icons/Icon${icon}.vue`));
});
</script>
