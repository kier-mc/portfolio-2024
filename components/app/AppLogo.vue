<template>
  <svg viewBox="0 0 135.76 135.76" xmlns="http://www.w3.org/2000/svg">
    <rect
      transform="rotate(135)"
      x="-48"
      y="-144"
      width="96"
      height="96"
      :fill="props.backgroundColour"
      :opacity="props.backgroundOpacity"
    />
    <path
      d="m38.947 96.52 57.573-57.573"
      :stroke="props.dividerColour"
      :stroke-width="dividerWidth"
    />
    <path
      aria-label="K"
      d="m42.346 62.632v-24.723h3.048v10.634h3.6576l5.4864-10.634h3.3189l-6.1299 11.921 6.4685 12.802h-3.4883l-5.7573-11.413h-3.556v11.413z"
      :fill="props.textColour"
      transform="matrix(1.024 0 0 1.024 6.2166e-7 3.0191e-6)"
    />
    <path
      aria-label="M"
      d="m74.438 94.161v-24.28h4.4236l3.0932 10.51 3.2262-10.51h4.4236v24.28h-2.8936v-11.475q0-1.6298 0.03326-3.7251 0.06652-2.1287 0.1663-4.2906 0.09978-2.1619 0.23282-3.8914l-3.9247 12.539h-2.5943l-3.7584-12.24q0.26608 2.4613 0.36586 5.3882 0.09978 2.9269 0.09978 6.2197v11.475z"
      :fill="props.textColour"
      transform="matrix(1.024 0 0 1.024 6.2166e-7 3.0191e-6)"
    />
  </svg>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
const props = defineProps({
  /**
   * Sets the colour for the background portion of the logo.
   * Accepts any valid CSS colour property (hexadecimal, HSL, named colours etc).
   * Defaults to raisin black.
   */
  backgroundColour: {
    type: String as PropType<string>,
    required: false,
    default: "#1b2330",
  },
  /**
   * Sets the opacity for the background portion of the logo.
   * Defaults to 1 (opaque).
   */
  backgroundOpacity: {
    type: String as PropType<string>,
    required: false,
    default: "1",
  },
  /**
   * Sets the colour for the text portion of the logo.
   * Accepts any valid CSS colour property (hexadecimal, HSL, named colours etc).
   * Defaults to white.
   */
  textColour: {
    type: String as PropType<string>,
    required: false,
    default: "#ffffff",
  },
  /**
   * Sets the colour for the divider portion of the logo.
   * Accepts any valid CSS colour property (hexadecimal, HSL, named colours etc).
   * Defaults to white.
   */
  dividerColour: {
    type: String as PropType<string>,
    required: false,
    default: "#ffffff",
  },
  /**
   * Sets the width of the divider portion of the logo.
   * Defaults to 0.5.
   */
  dividerWidth: {
    type: String as PropType<string>,
    required: false,
    default: "0.5",
  },
});
</script>
