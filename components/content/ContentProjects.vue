<template>
  <article class="container" id="work">
    <h2>Recent Projects and Work</h2>
    <div class="projects">
      <ContentProject
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :link="project.link"
        :source-link="project.sourceLink"
        :image-url="project.imageUrl"
        :alt-text="project.altText"
        :tags="project.tags"
      />
    </div>
  </article>
</template>

<style scoped lang="scss">
@use "../assets/styles/var/size";

.container {
  display: grid;
  grid-auto-rows: fit-content;
  row-gap: var(--sz-sm);
  max-width: var(--sz-screen-xl);
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40ch, 1fr));
  gap: var(--sz-md);
  @media (max-width: size.breakpoint("lg")) {
    grid-template-columns: auto;
  }
}
</style>

<script setup lang="ts">
type Project = {
  title?: string;
  description?: string;
  link?: string;
  sourceLink?: string;
  imageUrl?: string;
  altText?: string;
  tags?: string[];
};

type Data = {
  projects: Project[];
};

const data: Data = {
  projects: [
    {
      title: "Adapt Physiotherapy",
      description: "A virtual-first inclusive physiotherapy clinic.",
      imageUrl: "assets/img/projects/adapt-physio-crop.webp",
      tags: ["Closed Source 🔒", "Commercial 📊", "In Development 🔧"],
    },
    {
      title: "EBM Webstore",
      description: "A custom ecommerce store built with Stripe for a Manchester-based artist.",
      imageUrl: "assets/img/projects/ebm-crop.webp",
      tags: ["Closed Source 🔒", "Commercial 📊", "In Development 🔧"],
    },
    {
      title: "Task Hub",
      description: "A full-stack application intended to act as a personal landing page.",
      sourceLink: "https://github.com/kier-mc/task-hub",
      imageUrl: "assets/img/projects/taskhub-crop.webp",
      tags: ["Open Source 🔓", "Personal 🧑", "In Development 🔧"],
    },
    {
      title: "Wordle Tool",
      description: "A WCAG AA compliant tool built to solve the online game 'Wordle'.",
      link: "https://wordle-tool.vercel.app",
      sourceLink: "https://github.com/kier-mc/wordle-tool",
      imageUrl: "assets/img/projects/wordle-tool-crop.webp",
      tags: ["Open Source 🔓", "Personal 🧑", "In Production 🚀"],
    },
    {
      title: "2024 Personal Portfolio",
      description: "Built to serve as a showcase for 2024.",
      sourceLink: "https://github.com/kier-mc/portfolio-2024",
      imageUrl: "assets/img/projects/portfolio-crop.webp",
      tags: ["Open Source 🔓", "Personal 🧑", "In Production 🚀"],
    },
  ],
};
const { projects } = data;
</script>
