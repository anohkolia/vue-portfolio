<script setup>
const projects = [
  {
    id: 1,
    titre: 'TypeKey',
    description: 'Plateforme interactive de test de vitesse de frappe. Testez votre vitesse de dactylographie en temps réel et améliorez vos performances.',
    technologies: ['Vue.JS', 'Tailwind CSS', 'JavaScript', 'Vite'],
    lien: 'https://typekey.netlify.app',
    couleur: '#FF6B6B',
    icon: 'bi bi-keyboard-fill',
    features: ['Tests de frappe chronométrés', 'Statistiques en temps réel', 'Interface réactive']
  },
  {
    id: 2,
    titre: 'AmirEvent',
    description: 'Application privée de gestion d\'événements pour association permettant de créer, acheter, partager et gérer des événements.',
    technologies: ['Vue.JS', 'TypeScript', 'TailwindCss', 'Supabase'],
    lien: 'https://amirevent.netlify.app',
    couleur: '#4FC08D',
    icon: 'bi bi-calendar-event',
    features: ['Création d\'événements', 'Gestion des participants', 'Achat de billet']
  },
]
</script>

<template>
  <section id="project" class="content-section tw-scroll-mt-24 lg:tw-scroll-mt-8">
    <div class="portfolio-card tw-p-6 sm:tw-p-8">
      <h2 class="section-title">
        <i class="bi bi-laptop"></i>
        Projets
      </h2>

      <div class="tw-mt-6 tw-grid tw-gap-6 md:tw-grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.id"
          class="tw-group tw-flex tw-flex-col tw-rounded-xl tw-border tw-border-emerald-500/20 tw-bg-slate-800/60 tw-p-6 tw-transition hover:tw--translate-y-1 hover:tw-border-emerald-400/40 hover:tw-bg-slate-800"
        >
          <!-- Header avec icône -->
          <div class="tw-flex tw-items-start tw-justify-between">
            <span
              class="tw-inline-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-lg tw-bg-slate-900 tw-transition group-hover:tw-scale-110"
              :style="{ color: project.couleur }"
            >
              <i :class="project.icon" class="tw-text-2xl"></i>
            </span>
            <a
              :href="project.lien"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-inline-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-lg tw-bg-slate-900/50 tw-text-slate-300 tw-transition hover:tw-bg-emerald-500/20 hover:tw-text-emerald-300"
              title="Visiter le projet"
            >
              <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </div>

          <!-- Titre et description -->
          <h3 class="tw-mt-4 tw-text-xl tw-font-bold tw-uppercase tw-text-white">{{ project.titre }}</h3>
          <p class="tw-mt-2 tw-text-sm tw-leading-relaxed tw-text-slate-200/80">{{ project.description }}</p>

          <!-- Features -->
          <div class="tw-mt-4 tw-space-y-2">
            <div v-for="(feature, idx) in project.features" :key="idx" class="tw-flex tw-items-center tw-gap-2">
              <span class="tw-inline-block tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-emerald-400"></span>
              <span class="tw-text-xs tw-text-slate-300">{{ feature }}</span>
            </div>
          </div>

          <!-- Technologies -->
          <div class="tw-mt-auto tw-border-t tw-border-slate-700/50 tw-pt-4">
            <p class="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-widest tw-text-slate-400">Technos</p>
            <div class="tw-mt-2 tw-flex tw-flex-wrap tw-gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tw-inline-flex tw-items-center tw-gap-1 tw-rounded-full tw-bg-slate-900/50 tw-px-3 tw-py-1 tw-text-xs tw-font-medium tw-text-slate-300 tw-transition hover:tw-bg-slate-900"
                :style="{ borderLeft: `2px solid ${project.couleur}` }"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Lien direct -->
          <a
            :href="project.lien"
            target="_blank"
            rel="noopener noreferrer"
            class="tw-mt-5 tw-inline-flex tw-items-center tw-justify-center tw-rounded-lg tw-border tw-px-4 tw-py-2 tw-text-sm tw-font-semibold tw-uppercase tw-tracking-widest tw-transition"
            :style="{
              borderColor: `${project.couleur}66`,
              color: project.couleur
            }"
            @mouseenter="e => { e.currentTarget.style.backgroundColor = `${project.couleur}20` }"
            @mouseleave="e => { e.currentTarget.style.backgroundColor = 'transparent' }"
          >
            <i class="bi bi-arrow-right-short tw-mr-1"></i>
            Découvrir
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>