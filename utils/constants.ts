const general = {
  base: 1.125,
  ratio: 1.333,
} as const;

export const GeneralSizes = {
  "2xs": general.base / Math.pow(general.ratio, 3),
  "xs" : general.base / Math.pow(general.ratio, 2),
  "sm" : general.base / general.ratio,
  "md" : general.base,
  "lg" : general.base * general.ratio,
  "xl" : general.base * Math.pow(general.ratio, 2),
  "2xl": general.base * Math.pow(general.ratio, 3),
  "3xl": general.base * Math.pow(general.ratio, 4),
} as const;

export const IconSizes = {
  "xs": 1,
  "sm": 2,
  "md": 3,
  "lg": 4,
  "xl": 5,
} as const;

export const ValidIcons = {
  html:         "HTML",
  css:          "CSS",
  ts:           "TS",
  js:           "JS",
  python:       "Python",
  nodejs:       "NodeJS",
  vue:          "Vue",
  nuxt:         "Nuxt",
  pinia:        "Pinia",
  vitest:       "Vitest",
  jest:         "Jest",
  storybook:    "Storybook",
  sass:         "Sass",
  bootstrap:    "Bootstrap",
  tailwind:     "Tailwind",
  postgresql:   "PostgreSQL",
  git:          "Git",
  github:       "GitHub",
  vscode:       "VSCode",
  figma:        "Figma",
} as const;