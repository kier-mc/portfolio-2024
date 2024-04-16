<template>
  <article id="skills" class="skills">
    <h2>Skills, Frameworks and Tools</h2>
    <div class="skills__content">
      <dl>
        <div v-for="{ key, term, details, icon } in skills" :key="key" class="skill">
          <dt class="skill__term">{{ term }}</dt>
          <dd class="skill__details">{{ details }}</dd>
          <AppIcon aria-hidden="true" class="skill__icon" :icon="icon" />
        </div>
      </dl>
      <WidgetCarousel :data="carousel" />
    </div>
  </article>
</template>

<style scoped lang="scss">
@use "../assets/styles/var/mixin";
@use "../assets/styles/var/size";
.skills {
  display: grid;
  row-gap: var(--sz-2xs);

  & dl {
    all: unset;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: var(--sz-md);

    @media (max-width: size.breakpoint("lg")) {
      grid-template-columns: auto;
    }
  }

  &__content {
    display: grid;
    row-gap: var(--sz-xl);
  }
}
.skill {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(2, auto);
  padding: var(--sz-md);

  border: var(--sz-border-sm) solid var(--cl-dark-accent-2);

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  &::before {
    z-index: -5;
    background-color: var(--cl-dark-accent);
  }

  &::after {
    z-index: -5;
    background-size: 180% 180%;
    transition: background-size 500ms var(--ef-out-quart);
  }

  &:hover {
    &::after {
      background-size: 100% 100%;
    }
  }

  // HTML icon
  &:nth-child(1) {
    &::after {
      $colour: hsl(12, 78%, 52%, 0.2);
      @include mixin.skill-glow($colour);
    }
  }

  // CSS icon
  &:nth-child(2) {
    &::after {
      $colour: hsl(205, 79%, 40%, 0.2);
      @include mixin.skill-glow($colour);
    }
  }

  // Typescript icon
  &:nth-child(3) {
    &::after {
      $colour: hsl(204, 100%, 40%, 0.2);
      @include mixin.skill-glow($colour);
    }
  }

  &__term {
    all: unset;
    grid-column: 1;
    grid-row: 1;
    font-size: var(--sz-text-lg);
    letter-spacing: 0.0625rem;
  }

  &__details {
    all: unset;
    grid-column: 1;
    grid-row: 2;
  }

  &__icon {
    grid-column: 2;
    grid-row: 1 / 3;
    align-self: center;
    aspect-ratio: 1/1;
    width: var(--sz-icon-md);
  }
}
</style>

<script setup lang="ts">
import type { ValidIcon } from "~/components/app/AppIcon.vue";

type Skill = {
  key: number;
  term: string;
  details: string;
  icon: ValidIcon;
};

const data = {
  skills: <Skill[]>[
    {
      key: 1,
      term: "HTML",
      details: "Accessible and semantic",
      icon: "html",
    },
    {
      key: 2,
      term: "CSS",
      details: "Clean and responsive",
      icon: "css",
    },
    {
      key: 3,
      term: "Typescript",
      details: "Efficient and performant",
      icon: "ts",
    },
  ],
  carousel: <ValidIcon[]>[
    "html",
    "css",
    "js",
    "ts",
    "python",
    "nodejs",
    "vue",
    "nuxt",
    "pinia",
    "vitest",
    "jest",
    "storybook",
    "sass",
    "bootstrap",
    "tailwind",
    "postgresql",
    "git",
    "figma",
  ],
};
const { skills, carousel } = data;
</script>
