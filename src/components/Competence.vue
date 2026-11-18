<script setup>
import BrandIcon from '@/components/BrandIcon.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { skillCategories, softSkills } from '@/data/portfolio'
</script>

<template>
  <section id="skill" class="section" aria-labelledby="skill-title">
    <div class="container-page">
      <SectionHeading
        id="skill-title"
        index="02"
        eyebrow="Compétences"
        title="Ma boîte à outils"
        description="Les langages, frameworks et outils que j'utilise pour concevoir des interfaces modernes et des applications web."
      />

      <div class="tw-mt-10 tw-grid tw-gap-4 md:tw-grid-cols-2 lg:tw-gap-5">
        <article
          v-for="(category, index) in skillCategories"
          :key="category.title"
          v-reveal="(index % 2) * 100"
          class="card tw-p-4 xs:tw-p-5 sm:tw-p-6"
        >
          <header class="tw-flex tw-items-center tw-justify-between tw-gap-3">
            <div class="tw-flex tw-items-center tw-gap-3">
              <span class="icon-tile tw-h-10 tw-w-10 tw-text-lg">
                <i :class="category.icon" aria-hidden="true"></i>
              </span>
              <h3 class="tw-text-lg tw-font-semibold">{{ category.title }}</h3>
            </div>
            <span class="tw-text-xs tw-text-slate-500">{{ category.skills.length }} outils</span>
          </header>

          <ul class="tw-mt-5 tw-grid tw-grid-cols-2 tw-gap-2 sm:tw-gap-2.5">
            <li
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill tw-flex tw-items-center tw-gap-2.5 tw-rounded-xl tw-border tw-border-white/[0.06] tw-bg-white/[0.02] tw-p-2 tw-transition tw-duration-200 sm:tw-gap-3 sm:tw-p-2.5"
              :style="{ '--c': skill.color }"
            >
              <span class="skill-icon tw-inline-flex tw-h-9 tw-w-9 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-lg tw-text-lg sm:tw-h-10 sm:tw-w-10 sm:tw-text-xl">
                <BrandIcon :brand="skill.brand" :icon="skill.icon" />
              </span>
              <span class="tw-min-w-0">
                <span class="tw-block tw-text-[0.8125rem] tw-font-semibold tw-leading-tight tw-text-white sm:tw-text-sm">{{ skill.name }}</span>
                <span class="tw-mt-0.5 tw-block tw-text-xs tw-leading-snug tw-text-slate-400">{{ skill.desc }}</span>
              </span>
            </li>
          </ul>
        </article>
      </div>

      <div
        v-reveal
        class="card tw-mt-4 tw-flex tw-flex-col tw-gap-4 tw-p-4 xs:tw-p-5 sm:tw-flex-row sm:tw-items-center sm:tw-gap-6 sm:tw-p-6 lg:tw-mt-5"
      >
        <h3 class="tw-flex tw-shrink-0 tw-items-center tw-gap-3 tw-text-lg tw-font-semibold">
          <span class="icon-tile tw-h-10 tw-w-10 tw-text-lg">
            <i class="bi bi-person-heart" aria-hidden="true"></i>
          </span>
          Savoir-être
        </h3>
        <ul class="tw-flex tw-flex-wrap tw-gap-2">
          <li v-for="skill in softSkills" :key="skill.name" class="chip tw-py-1.5 tw-text-sm">
            <i :class="skill.icon" class="tw-text-emerald-300" aria-hidden="true"></i>
            {{ skill.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-icon {
  color: var(--c);
  background-color: color-mix(in srgb, var(--c) 12%, transparent);
}

@media (hover: hover) {
  .skill:hover {
    border-color: color-mix(in srgb, var(--c) 45%, transparent);
    background-color: color-mix(in srgb, var(--c) 7%, transparent);
  }
}
</style>
