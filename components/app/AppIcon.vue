<template>
  <component :is="setIcon" />
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
export type ValidIcon = keyof typeof ValidIcons;

const props = defineProps({
  icon: { type: String as PropType<ValidIcon>, required: true },
});

const setIcon = computed(() => {
  const icon = ValidIcons[props.icon];
  return defineAsyncComponent(() => import(`~/components/icons/Icon${icon}.vue`));
});
</script>
