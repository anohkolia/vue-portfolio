<script setup>
const hobbies = [
  {
    id: 1,
    titre: 'Informatique',
    contenu: "Manipulation d'outils informatiques et veille régulière sur les technologies.",
    icon: 'bi bi-pc-display-horizontal',
  },
  {
    id: 2,
    titre: 'Jeux vidéo',
    contenu: 'Je joue principalement à des jeux FPS, aventure, arcade et stratégie.',
    icon: 'bi bi-controller',
  },
  {
    id: 3,
    titre: 'Trading',
    contenu: "Suivi de contenus éducatifs pour apprendre à lire les courbes et analyser le marché.",
    icon: 'bi bi-graph-up-arrow',
  },
]
</script>

<template>
  <section id="hobbie" class="content-section tw-scroll-mt-24 lg:tw-scroll-mt-8">
    <div class="portfolio-card tw-p-6 sm:tw-p-8">
      <h2 class="section-title">
        <i class="bi bi-emoji-smile"></i>
        Hobbies
      </h2>

      <div class="tw-mt-6 tw-grid tw-gap-4 md:tw-grid-cols-3">
        <article
          v-for="hobbie in hobbies"
          :key="hobbie.id"
          class="tw-h-full tw-rounded-xl tw-border tw-border-emerald-500/20 tw-bg-slate-800/60 tw-p-5 tw-transition hover:tw--translate-y-1 hover:tw-border-emerald-400/50 hover:tw-bg-slate-800"
        >
          <span class="tw-inline-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-lg tw-bg-emerald-500/20 tw-text-emerald-200">
            <i :class="hobbie.icon"></i>
          </span>
          <h3 class="tw-mt-3 tw-text-lg tw-font-bold tw-uppercase tw-text-white">{{ hobbie.titre }}</h3>
          <p class="tw-mt-2 tw-text-sm tw-leading-relaxed tw-text-slate-200/90">{{ hobbie.contenu }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
