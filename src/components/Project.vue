<script setup>
import DesignGallery from '@/components/DesignGallery.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { projectsWeb } from '@/data/portfolio'

const hostname = (url) => new URL(url).hostname
</script>

<template>
  <section id="project" class="section" aria-labelledby="project-title">
    <div class="container-page">
      <SectionHeading
        id="project-title"
        index="03"
        eyebrow="Projets"
        title="Projets web"
        description="Des applications conçues de A à Z, de l'interface à la mise en ligne."
      />

      <div class="tw-mt-10 tw-grid tw-gap-5 md:tw-grid-cols-2 lg:tw-gap-6">
        <article
          v-for="(project, index) in projectsWeb"
          :key="project.id"
          v-reveal="index * 120"
          class="card card-interactive tw-group tw-flex tw-flex-col tw-overflow-hidden"
          :style="{ '--c': project.color }"
        >
          <!-- Aperçu : fenêtre de navigateur stylisée (ou capture si `image` est fournie) -->
          <div class="project-cover tw-relative tw-border-b tw-border-white/[0.06]">
            <div class="tw-flex tw-items-center tw-gap-3 tw-border-b tw-border-white/[0.06] tw-bg-slate-950/40 tw-px-4 tw-py-2.5">
              <span class="tw-flex tw-gap-1.5" aria-hidden="true">
                <span class="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-rose-400/70"></span>
                <span class="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-amber-300/70"></span>
                <span class="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-emerald-400/70"></span>
              </span>
              <span class="tw-flex tw-min-w-0 tw-flex-1 tw-items-center tw-justify-center tw-gap-1.5 tw-truncate tw-rounded-md tw-bg-white/[0.04] tw-px-3 tw-py-1 tw-text-[0.6875rem] tw-text-slate-400">
                <i class="bi bi-lock-fill tw-text-[0.625rem]" aria-hidden="true"></i>
                {{ hostname(project.url) }}
              </span>
            </div>

            <div class="tw-relative tw-aspect-[2/1] tw-overflow-hidden md:tw-aspect-[16/7]">
              <img
                v-if="project.image"
                :src="project.image"
                :alt="`Aperçu de ${project.title}`"
                loading="lazy"
                decoding="async"
                class="tw-h-full tw-w-full tw-object-cover tw-object-top tw-transition tw-duration-500 group-hover:tw-scale-[1.03]"
              >
              <div v-else class="tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-center tw-gap-4" aria-hidden="true">
                <span class="project-icon tw-inline-flex tw-h-16 tw-w-16 tw-items-center tw-justify-center tw-rounded-2xl tw-text-3xl tw-transition tw-duration-500 group-hover:tw-scale-110 group-hover:tw-rotate-[-4deg] sm:tw-h-20 sm:tw-w-20 sm:tw-text-4xl">
                  <i :class="project.icon"></i>
                </span>
                <span class="tw-flex tw-w-2/5 tw-flex-col tw-items-center tw-gap-1.5">
                  <span class="tw-h-1.5 tw-w-full tw-rounded-full tw-bg-white/10"></span>
                  <span class="tw-h-1.5 tw-w-2/3 tw-rounded-full tw-bg-white/[0.06]"></span>
                </span>
              </div>
            </div>
          </div>

          <div class="tw-flex tw-flex-1 tw-flex-col tw-p-5 sm:tw-p-6">
            <h3 class="tw-text-2xl tw-font-semibold">{{ project.title }}</h3>
            <p class="tw-mt-2 tw-text-[0.9375rem] tw-leading-relaxed tw-text-slate-400">{{ project.description }}</p>

            <ul class="tw-mt-5 tw-space-y-2">
              <li v-for="feature in project.features" :key="feature" class="tw-flex tw-items-center tw-gap-2.5 tw-text-sm tw-text-slate-300">
                <i class="bi bi-check2-circle project-accent" aria-hidden="true"></i>
                {{ feature }}
              </li>
            </ul>

            <ul class="tw-mt-5 tw-flex tw-flex-wrap tw-gap-2" aria-label="Technologies utilisées">
              <li v-for="tech in project.technologies" :key="tech" class="chip">{{ tech }}</li>
            </ul>

            <div class="tw-mt-auto tw-pt-6">
              <a
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost project-link tw-w-full sm:tw-w-auto"
              >
                Voir le projet
                <i class="bi bi-arrow-up-right tw-transition group-hover:tw-translate-x-0.5 group-hover:tw--translate-y-0.5" aria-hidden="true"></i>
                <span class="tw-sr-only">{{ project.title }} (nouvel onglet)</span>
              </a>
            </div>
          </div>
        </article>
      </div>

      <DesignGallery />
    </div>
  </section>
</template>

<style scoped>
.project-cover {
  background:
    radial-gradient(70% 90% at 50% 100%, color-mix(in srgb, var(--c) 22%, transparent), transparent 70%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.4), rgba(2, 6, 23, 0.6));
}

.project-icon {
  color: var(--c);
  background: color-mix(in srgb, var(--c) 14%, #0f172a);
  box-shadow:
    inset 0 0 0 1px color-mix(in srgb, var(--c) 35%, transparent),
    0 18px 40px -12px color-mix(in srgb, var(--c) 45%, transparent);
}

.project-accent {
  color: var(--c);
}

@media (hover: hover) {
  .project-link:hover {
    border-color: color-mix(in srgb, var(--c) 60%, transparent);
    background-color: color-mix(in srgb, var(--c) 12%, transparent);
    color: #fff;
  }
}
</style>
