<script setup>
const formations = [
  {
    id: 1,
    titre: 'Licence 2 en ISTN',
    ecole: 'Université de Rennes 1',
    contenu: 'Informatique, Sciences et Technologies du Numérique',
    date: '2023 - 2024',
  },
  {
    id: 2,
    titre: 'Certification',
    ecole: "Université Virtuelle de Côte d'Ivoire",
    contenu: 'Développement Web et Mobile',
    date: '2023',
  },
  {
    id: 3,
    titre: 'Licence en Informatique et Sciences du Numérique',
    ecole: "Université Virtuelle de Côte d'Ivoire",
    contenu: "Spécialité : Développement d'application et e-Services",
    date: '2020 - 2023',
  },
  {
    id: 4,
    titre: 'Baccalauréat série D',
    ecole: 'Collège Moderne CHRIST-ROI, Bonoua (CI)',
    contenu: '',
    date: '2019 - 2020',
  },
]
</script>

<template>
  <section id="formation" class="content-section tw-scroll-mt-24 lg:tw-scroll-mt-8">
    <div class="portfolio-card tw-p-6 sm:tw-p-8">
      <h2 class="section-title">
        <i class="bi bi-journals"></i>
        Formation
      </h2>

      <div class="tw-mt-6 tw-space-y-4">
        <article
          v-for="formation in formations"
          :key="formation.id"
          class="tw-rounded-xl tw-border tw-border-emerald-500/20 tw-bg-slate-800/60 tw-p-5 tw-transition hover:tw-border-emerald-400/40 hover:tw-bg-slate-800"
        >
          <p class="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-widest tw-text-emerald-300">{{ formation.date }}</p>
          <h3 class="tw-mt-2 tw-text-lg tw-font-bold tw-uppercase tw-text-white">{{ formation.titre }}</h3>
          <p class="tw-mt-1 tw-text-sm tw-font-medium tw-text-cyan-200">{{ formation.ecole }}</p>
          <p v-if="formation.contenu" class="tw-mt-2 tw-text-sm tw-leading-relaxed tw-text-slate-200/90">{{ formation.contenu }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
