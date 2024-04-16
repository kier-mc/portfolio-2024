<template>
  <section ref="carouselElement" class="carousel">
    <div class="carousel__test"></div>
    <ul :class="setTrackClass">
      <template v-for="_ in 2">
        <li v-for="icon in data" class="slide">
          <AppIcon class="slide__icon" :icon="icon" />
        </li>
      </template>
    </ul>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/styles/var/mixin";
@use "../assets/styles/var/size";

@keyframes scroll {
  100% {
    transform: v-bind(transformDistance);
  }
}

.carousel {
  --width: v-bind(containerWidth);

  overflow: hidden;
  position: relative;
  max-width: var(--width, 100%);
  @include mixin.carousel-mask;
}

.track {
  --gap: v-bind(gapSize);
  --icon-size: v-bind(iconSize);
  --speed: v-bind(timing);
  --width: v-bind(trackWidth);

  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  column-gap: var(--gap, var(--sz-2xl));
  width: max-content;
  height: var(--icon-size, var(--sz-icon-2xl));
  max-width: var(--width);
  animation: scroll var(--speed) linear infinite;

  &--paused {
    animation-play-state: paused;
  }
}

.slide {
  all: unset;
  display: flex;

  &__icon {
    aspect-ratio: 1/1;
    width: 100%;
    max-width: v-bind(iconSize);
  }
}
</style>

<script setup lang="ts">
import type { ValidIcon } from "~/components/app/AppIcon.vue";

type ValidIconSize = keyof typeof IconSizes;
type ValidGapSize = keyof typeof GeneralSizes;

const props = defineProps({
  data: {
    type: Array as PropType<ValidIcon[]>,
    default: [],
    required: true,
  },
  size: {
    type: String as PropType<ValidIconSize>,
    default: "xl" as ValidIconSize,
  },
  gap: {
    type: String as PropType<ValidGapSize>,
    default: "2xl" as ValidGapSize,
  },
  speed: {
    type: Number,
    default: 3,
  },
});
const { data, size, gap, speed } = toRefs(props);

const carouselElement: Ref<HTMLElement | null> = ref(null);
// @ts-ignore - https://github.com/vueuse/vueuse/issues/3240
const { isOutside } = useMouseInElement(carouselElement);

const width = computed(() => {
  const itemCount = data.value.length;
  const totalIconSize = IconSizes[props.size] * itemCount;
  const totalGapSize = GeneralSizes[props.gap] * itemCount;
  return totalIconSize + totalGapSize;
});
const iconSize = computed(() => `${IconSizes[size.value]}rem`);
const gapSize = computed(() => `${GeneralSizes[gap.value]}rem`);
const containerWidth = computed(() => `${width.value}rem`);
const trackWidth = computed(() => `${width.value * 2}rem`);
const transformDistance = computed(() => `translateX(${width.value * -1}rem)`);
const timing = computed(() => `${data.value.length * speed.value}s`);
const setTrackClass = computed(() => (isOutside.value ? "track" : "track track--paused"));
</script>
