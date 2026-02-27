<script setup>
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26', desc: 'Structure web sémantique' },
      { name: 'CSS3', icon: 'fab fa-css3', color: '#1572B6', desc: 'Styling et animations' },
      { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E', desc: 'Programmation interactive' },
      { name: 'Tailwind CSS', icon: 'bi bi-wind', color: '#38BDF8', desc: 'Utilities CSS modernes' },
      { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D', desc: 'Framework JavaScript moderne' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', icon: 'fab fa-php', color: '#777BB4', desc: 'Programmation serveur' },
      { name: 'Laravel', icon: 'fab fa-laravel', color: '#FF2D20', desc: 'Framework PHP robuste' },
      { name: 'Java', icon: 'fab fa-java', color: '#ED8B00', desc: 'Applications robustes' },
      { name: 'Python', icon: 'fab fa-python', color: '#3776AB', desc: 'Scripting et data' },
      { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1', desc: 'Gestion de données' },
    ],
  },
  {
    title: 'Outils & Méthodes',
    skills: [
      { name: 'Git', icon: 'bi bi-git', color: '#F05032', desc: 'Contrôle de version' },
      { name: 'GitHub', icon: 'bi bi-github', color: '#ffffff', desc: 'Collaboration' },
      { name: 'GitLab', icon: 'bi bi-gitlab', color: '#FC6D26', desc: 'CI/CD' },
      { name: 'Trello', icon: 'bi bi-trello', color: '#0079BF', desc: 'Gestion de projet' },
    ],
  },
]

const softSkills = [
  { name: "Esprit d'équipe", icon: 'bi bi-people-fill' },
  { name: 'Motivation', icon: 'bi bi-lightning-fill' },
  { name: 'Écoute active', icon: 'bi bi-ear-fill' },
  { name: 'Respect', icon: 'bi bi-heart-fill' },
  { name: 'Sérieux', icon: 'bi bi-check-circle-fill' },
]
</script>

<template>
  <section id="skill" class="content-section tw-scroll-mt-24 lg:tw-scroll-mt-8">
    <div class="portfolio-card tw-p-6 sm:tw-p-8">
      <h2 class="section-title">
        <i class="bi bi-stars"></i>
        Compétences techniques
      </h2>

      <div class="tw-mt-6 tw-space-y-6">
        <section v-for="category in skillCategories" :key="category.title">
          <h3 class="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-[0.16em] tw-text-slate-400">{{ category.title }}</h3>

          <div class="tw-mt-3 tw-grid tw-gap-3 sm:tw-grid-cols-2 lg:tw-grid-cols-3">
            <article
              v-for="skill in category.skills"
              :key="skill.name"
              class="tw-flex tw-items-start tw-gap-3 tw-rounded-xl tw-border tw-bg-slate-800/70 tw-p-4 tw-transition hover:tw--translate-y-1"
              :style="{ borderColor: `${skill.color}66` }"
            >
              <span
                class="tw-inline-flex tw-h-11 tw-w-11 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-lg tw-bg-slate-900"
                :style="{ color: skill.color }"
              >
                <i :class="skill.icon" class="tw-text-xl"></i>
              </span>
              <span class="tw-flex tw-flex-col">
                <span class="tw-text-sm tw-font-semibold tw-text-white">{{ skill.name }}</span>
                <span class="tw-text-xs tw-text-slate-400">{{ skill.desc }}</span>
              </span>
            </article>
          </div>
        </section>
      </div>

      <section class="tw-mt-8 tw-border-t tw-border-emerald-500/20 tw-pt-6">
        <h3 class="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-[0.16em] tw-text-slate-400">Qualités personnelles</h3>
        <div class="tw-mt-3 tw-flex tw-flex-wrap tw-gap-2">
          <span
            v-for="skill in softSkills"
            :key="skill.name"
            class="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-cyan-300/20 tw-bg-cyan-400/10 tw-px-3 tw-py-1.5 tw-text-xs tw-font-medium tw-text-cyan-100"
          >
            <i :class="skill.icon"></i>
            {{ skill.name }}
          </span>
        </div>
      </section>
    </div>
  </section>
</template>
