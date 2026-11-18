<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { experiences } from '@/data/portfolio'

const typeLabel = (type) => (type === 'project' ? 'Projet' : 'Expérience pro')
</script>

<template>
  <section id="experience" class="section" aria-labelledby="experience-title">
    <div class="container-page">
      <SectionHeading
        id="experience-title"
        index="04"
        eyebrow="Parcours"
        title="Expérience"
        description="Projets d'équipe, projet de soutenance et missions en freelance."
      />

      <ol class="timeline tw-relative tw-mt-10 tw-space-y-5 sm:tw-mt-12 md:tw-space-y-6">
        <li
          v-for="(exp, index) in experiences"
          :key="exp.id"
          v-reveal="index * 80"
          class="timeline-item tw-relative"
        >
          <span class="timeline-dot" aria-hidden="true"></span>

          <!-- Date (colonne de gauche sur tablette et ordinateur) -->
          <div class="tw-hidden md:tw-block md:tw-pt-6 md:tw-text-right">
            <p class="tw-font-display tw-text-sm tw-font-semibold tw-text-emerald-300">{{ exp.date }}</p>
            <span
              class="tw-mt-2 tw-inline-block tw-rounded-full tw-px-2.5 tw-py-0.5 tw-text-[0.6875rem] tw-font-semibold tw-uppercase tw-tracking-wider"
              :class="exp.type === 'project' ? 'tw-bg-emerald-400/10 tw-text-emerald-200' : 'tw-bg-sky-400/10 tw-text-sky-200'"
            >
              {{ typeLabel(exp.type) }}
            </span>
          </div>

          <article class="card card-interactive tw-p-5 sm:tw-p-6">
            <div class="tw-mb-3 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-2 md:tw-hidden">
              <p class="tw-font-display tw-text-sm tw-font-semibold tw-text-emerald-300">{{ exp.date }}</p>
              <span
                class="tw-rounded-full tw-px-2.5 tw-py-0.5 tw-text-[0.6875rem] tw-font-semibold tw-uppercase tw-tracking-wider"
                :class="exp.type === 'project' ? 'tw-bg-emerald-400/10 tw-text-emerald-200' : 'tw-bg-sky-400/10 tw-text-sky-200'"
              >
                {{ typeLabel(exp.type) }}
              </span>
            </div>

            <h3 class="tw-text-xl tw-font-semibold">{{ exp.title }}</h3>
            <p class="tw-mt-1 tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-slate-300">
              <i class="bi bi-building tw-text-cyan-300" aria-hidden="true"></i>
              {{ exp.company }}
            </p>

            <p v-if="typeof exp.content === 'string'" class="tw-mt-4 tw-text-[0.9375rem] tw-leading-relaxed tw-text-slate-400">
              {{ exp.content }}
            </p>
            <ul v-else class="tw-mt-4 tw-space-y-2">
              <li
                v-for="item in exp.content"
                :key="item"
                class="tw-flex tw-gap-2.5 tw-text-[0.9375rem] tw-leading-relaxed tw-text-slate-400"
              >
                <i class="bi bi-chevron-right tw-mt-0.5 tw-text-xs tw-text-emerald-300" aria-hidden="true"></i>
                <span>{{ item }}</span>
              </li>
            </ul>

            <ul v-if="exp.technologies?.length" class="tw-mt-5 tw-flex tw-flex-wrap tw-gap-2" aria-label="Outils utilisés">
              <li v-for="tech in exp.technologies" :key="tech" class="chip">{{ tech }}</li>
            </ul>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
/* Frise : ligne verticale + pastilles. Sur mobile, la ligne longe les cartes à gauche ;
   à partir de 768px, la date passe dans une colonne dédiée. */
.timeline::before {
  content: '';
  position: absolute;
  top: 0.75rem;
  bottom: 0.75rem;
  left: 7px;
  width: 2px;
  border-radius: 9999px;
  background: linear-gradient(to bottom, rgba(52, 211, 153, 0.7), rgba(34, 211, 238, 0.25) 70%, transparent);
}

.timeline-item {
  padding-left: 2rem;
}

.timeline-dot {
  position: absolute;
  top: 1.6rem;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius: 9999px;
  border: 2px solid #34d399;
  background: #020617;
  box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.12);
}

@media (min-width: 768px) {
  .timeline::before {
    left: calc(10rem + 1.5rem - 1px);
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 10rem minmax(0, 1fr);
    column-gap: 3rem;
    padding-left: 0;
  }

  .timeline-dot {
    left: calc(10rem + 1.5rem - 8px);
  }
}
</style>
