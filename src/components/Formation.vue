<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { formations } from '@/data/portfolio'
</script>

<template>
  <section id="formation" class="section" aria-labelledby="formation-title">
    <div class="container-page">
      <SectionHeading
        id="formation-title"
        index="05"
        eyebrow="Diplômes"
        title="Formation"
        description="Un parcours en informatique entre la Côte d'Ivoire et la France."
      />

      <ol class="tw-mt-10 tw-grid tw-gap-4 sm:tw-mt-12 md:tw-grid-cols-2 lg:tw-gap-5">
        <li
          v-for="(formation, index) in formations"
          :key="formation.id"
          v-reveal="(index % 2) * 100"
          class="card card-interactive tw-flex tw-gap-4 tw-p-5 sm:tw-gap-5 sm:tw-p-6"
        >
          <span class="icon-tile tw-h-11 tw-w-11 tw-text-xl sm:tw-h-12 sm:tw-w-12">
            <i :class="formation.icon" aria-hidden="true"></i>
          </span>
          <div class="tw-min-w-0">
            <p class="tw-font-display tw-text-sm tw-font-semibold tw-text-emerald-300">{{ formation.date }}</p>
            <h3 class="tw-mt-1 tw-text-lg tw-font-semibold tw-leading-snug">{{ formation.title }}</h3>
            <p class="tw-mt-1.5 tw-flex tw-items-start tw-gap-2 tw-text-sm tw-text-slate-300">
              <i class="bi bi-building tw-mt-0.5 tw-text-cyan-300" aria-hidden="true"></i>
              {{ formation.school }}
            </p>
            <p v-if="formation.content" class="tw-mt-2 tw-text-sm tw-leading-relaxed tw-text-slate-400">
              {{ formation.content }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
