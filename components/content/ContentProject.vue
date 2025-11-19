<template>
  <article class="project">
    <h3>{{ title }}</h3>
    <div ref="wrapperElement" class="project__wrapper">
      <img class="project__image" :alt="altText" :src="imageUrl" width="640" height="360" loading="lazy" />
      <div v-if="link || sourceLink" :class="setLinkBarClass">
        <a v-if="link" class="project__link" :href="link" target="_blank" tabindex="0">View Site</a>
        <a v-if="sourceLink" class="project__link" :href="sourceLink" target="_blank" tabindex="0">
          View Source
        </a>
      </div>
    </div>
    <div class="project__description">{{ description }}</div>
    <div class="project__tags">
      <div v-for="(tag, index) in tags" :key="index" class="tag">{{ tag }}</div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use "../../assets/styles/var/colour";
@use "../../assets/styles/var/mixin";
@use "sass:color";
.project {
  display: grid;
  grid-auto-rows: auto auto 1fr auto;
  row-gap: var(--sz-xs);
  padding: var(--sz-sm);
  border: var(--sz-border-sm) solid var(--cl-dark-accent-2);
  background-color: var(--cl-dark-accent);
  @include mixin.background-glow(colour.base("primary"), -0.95);

  &__wrapper {
    isolation: isolate;
    position: relative;
    display: flex;
    max-width: 900px;
    max-height: 675px;
    border: var(--sz-border-sm) solid var(--cl-dark-accent-2);
  }

  &__image {
    z-index: -10;
    max-inline-size: 100%;
    block-size: auto;
    object-fit: contain;
    object-position: top;
  }

  &__links {
    display: flex;
    column-gap: var(--sz-sm);
    position: absolute;
    inset-inline: 0;
    bottom: var(--sz-lg);
    z-index: 0;
    padding: var(--sz-sm);
    border-block: var(--sz-border-sm) solid var(--cl-dark-accent-2);
    opacity: 0;
    transition: opacity 500ms var(--ef-out-quart);

    &--visible {
      opacity: 1;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -5;
      background-color: var(--cl-dark);
      opacity: 0.85;
    }
  }

  &__link {
    all: unset;
    cursor: pointer;
    position: relative;
    padding-inline: var(--sz-2xs);
    padding-bottom: var(--sz-2xs);
    font-size: var(--sz-text-sm);

    &::before {
      content: "";
      position: absolute;
      inset-inline: 0;
      bottom: 0;
      height: var(--sz-border-sm);
      background-color: var(--cl-primary);
      opacity: 1;
      transition: opacity 500ms var(--ef-out-quart);
    }

    &::after {
      @include mixin.link-focus;
    }

    &:focus-visible::after {
      opacity: 1;
    }

    &:focus-visible::before {
      opacity: 0;
    }
  }

  &__description {
    font-size: var(--sz-text-sm);
  }

  &__tags {
    display: flex;
    gap: var(--sz-sm);
  }
}

.tag {
  user-select: none;
  display: flex;
  height: fit-content;
  padding: var(--sz-2xs) var(--sz-sm);
  border-radius: var(--sz-sm);
  background-color: var(--cl-dark-accent-2);
  font-size: var(--sz-text-xs);
}
</style>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: "",
  },
  description: {
    type: String as PropType<string>,
    default: "",
  },
  link: {
    type: String as PropType<string>,
    default: "",
  },
  sourceLink: {
    type: String as PropType<string>,
    default: "",
  },
  imageUrl: {
    type: String as PropType<string>,
    default: "https://placehold.co/900x675/181e2a/60e1dc?text=No+Image+Available",
  },
  altText: {
    type: String as PropType<string>,
    default: "",
  },
  tags: {
    type: Array as PropType<string[]>,
    default: <string[]>[],
  },
});
const { title, description, link, sourceLink, imageUrl, altText, tags } = props;

const wrapperElement = ref<HTMLDivElement | null>(null);

const { isOutside } = useMouseInElement(wrapperElement);
const { focused } = useFocusWithin(wrapperElement);

const setLinkBarClass = computed(() => {
  const mouseIsOutside = isOutside.value;
  const subElementFocused = !focused.value;
  return mouseIsOutside && subElementFocused ? "project__links" : "project__links project__links--visible";
});
</script>
