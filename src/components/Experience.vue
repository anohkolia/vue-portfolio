<script setup>
const experiences = [
  {
    id: 1,
    titre: 'Projet agile (en équipe)',
    entreprise: 'Université de Rennes',
    contenu:
      "Conception et développement d'une application permettant d'analyser et de présenter des statistiques sur les stations-service françaises.",
    technologies: ['Java', 'Swing', 'GitLab', 'Trello'],
    date: 'Février 2024 à mai 2024',
    type: 'project',
  },
  {
    id: 2,
    titre: 'Projet de soutenance licence',
    entreprise: "Université Virtuelle de Côte d'Ivoire",
    contenu: "Conception et développement de Portail de gestion d'une communauté.",
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL', 'GitHub'],
    date: 'Juin 2023 à septembre 2023',
    type: 'project',
  },
  {
    id: 3,
    titre: 'Freelance',
    entreprise: 'Indépendant',
    contenu: [
      "Installation de systèmes d'exploitation, maintenance informatique",
      'Formation sur logiciels bureautique (Word-Excel-PowerPoint)',
      'Rédaction et traitement de documents, numérisation, impression',
      'Community manager (Création et gestion de page Facebook)',
      'Conception de charte graphique (Logo, Badge, flyers)',
    ],
    date: '2022',
    type: 'work',
  },
]
</script>

<template>
  <section id="experience" class="content-section tw-scroll-mt-24 lg:tw-scroll-mt-8">
    <div class="portfolio-card tw-p-6 sm:tw-p-8">
      <h2 class="section-title">
        <i class="bi bi-patch-check"></i>
        Expérience
      </h2>

      <div class="tw-relative tw-mt-6 tw-space-y-5 tw-pl-6 before:tw-absolute before:tw-left-[7px] before:tw-top-1 before:tw-h-[calc(100%-0.5rem)] before:tw-w-px before:tw-bg-gradient-to-b before:tw-from-emerald-400/80 before:tw-via-emerald-300/20 before:tw-to-emerald-400/80">
        <article
          v-for="exp in experiences"
          :key="exp.id"
          class="tw-relative tw-rounded-xl tw-border tw-border-emerald-500/20 tw-bg-slate-800/65 tw-p-5 tw-transition hover:tw-border-emerald-400/40 hover:tw-bg-slate-800"
        >
          <span class="tw-absolute tw--left-[25px] tw-top-5 tw-inline-flex tw-h-4 tw-w-4 tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-emerald-400 tw-bg-slate-900"></span>

          <div class="tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-2">
            <span class="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-widest tw-text-emerald-300">{{ exp.date }}</span>
            <span
              class="tw-rounded-full tw-px-3 tw-py-1 tw-text-[11px] tw-font-semibold tw-uppercase tw-tracking-wide"
              :class="exp.type === 'project' ? 'tw-bg-emerald-500/20 tw-text-emerald-200' : 'tw-bg-blue-500/20 tw-text-blue-200'"
            >
              {{ exp.type === 'project' ? 'Projet' : 'Expérience' }}
            </span>
          </div>

          <h3 class="tw-mt-3 tw-text-lg tw-font-bold tw-text-white">{{ exp.titre }}</h3>
          <p class="tw-mt-1 tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-slate-300">
            <i class="bi bi-building tw-text-cyan-300"></i>
            {{ exp.entreprise }}
          </p>

          <p v-if="typeof exp.contenu === 'string'" class="tw-mt-3 tw-text-sm tw-leading-relaxed tw-text-slate-200/90">
            {{ exp.contenu }}
          </p>
          <ul v-else class="tw-mt-3 tw-list-disc tw-space-y-1 tw-pl-5 tw-text-sm tw-leading-relaxed tw-text-slate-200/90">
            <li v-for="item in exp.contenu" :key="item">{{ item }}</li>
          </ul>

          <div v-if="exp.technologies" class="tw-mt-4 tw-flex tw-flex-wrap tw-gap-2">
            <span
              v-for="tech in exp.technologies"
              :key="tech"
              class="tw-rounded-full tw-border tw-border-emerald-500/30 tw-bg-slate-900/70 tw-px-3 tw-py-1 tw-text-xs tw-font-medium tw-text-slate-100"
            >
              {{ tech }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
