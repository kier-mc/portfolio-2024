<template>
  <component :is="setIcon" />
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
enum Icons {
  html = "HTML",
  css = "CSS",
  ts = "TS",
}

type ValidIcon = keyof typeof Icons;

const props = defineProps({
  icon: { type: String as PropType<ValidIcon>, required: true },
});

const setIcon = computed(() => {
  const icon = Icons[props.icon];
  return defineAsyncComponent(() => import(`./icons/Icon${icon}.vue`));
});
</script>
