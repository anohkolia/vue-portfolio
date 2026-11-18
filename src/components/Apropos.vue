<script setup>
import profilePhoto from '@/assets/profile.png?w=720&format=webp&quality=82'
import BrandIcon from '@/components/BrandIcon.vue'
import { designCount } from '@/data/designs'
import { profile, projectsWeb, skillCategories, socials } from '@/data/portfolio'

// Chiffres calculés à partir du contenu : ils restent toujours à jour.
const stats = [
  { value: projectsWeb.length, label: 'Projets web en ligne' },
  { value: designCount, label: 'Créations graphiques' },
  { value: skillCategories.reduce((total, category) => total + category.skills.length, 0), label: 'Technologies & outils' },
]
</script>

<template>
  <section id="about" class="hero tw-relative" aria-labelledby="hero-title">
    <div class="container-page tw-grid tw-items-center tw-gap-8 md:tw-grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] md:tw-gap-10 lg:tw-grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:tw-gap-16">
      <!-- Présentation -->
      <div class="tw-order-2 md:tw-order-1">
        <p
          v-reveal
          class="tw-inline-flex tw-items-center tw-gap-2.5 tw-rounded-full tw-border tw-border-emerald-300/25 tw-bg-emerald-400/10 tw-py-1.5 tw-pl-3 tw-pr-4 tw-text-sm tw-font-medium tw-text-emerald-200"
        >
          <span class="tw-relative tw-flex tw-h-2.5 tw-w-2.5" aria-hidden="true">
            <span class="tw-absolute tw-inline-flex tw-h-full tw-w-full tw-animate-ping tw-rounded-full tw-bg-emerald-400 tw-opacity-60"></span>
            <span class="tw-relative tw-inline-flex tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-emerald-400"></span>
          </span>
          {{ profile.availability }}
        </p>

        <h1
          id="hero-title"
          v-reveal="80"
          class="tw-mt-5 tw-text-[clamp(2.75rem,10vw,5.25rem)] tw-font-bold tw-leading-[0.95] tw-tracking-tight md:tw-text-[clamp(3.5rem,7vw,5.25rem)]"
        >
          {{ profile.firstName }} <span class="text-gradient">{{ profile.lastName }}</span>
        </h1>

        <p v-reveal="140" class="tw-mt-4 tw-flex tw-items-center tw-gap-2 tw-font-display tw-text-lg tw-font-medium tw-text-slate-100 sm:tw-text-xl">
          <i class="bi bi-code-slash tw-text-emerald-300" aria-hidden="true"></i>
          {{ profile.role }}
        </p>

        <p v-reveal="200" class="tw-mt-5 tw-max-w-xl tw-text-base tw-leading-relaxed tw-text-slate-400 sm:tw-text-lg">
          {{ profile.bio }}
        </p>

        <div v-reveal="260" class="tw-mt-8 tw-flex tw-flex-col tw-gap-3 xs:tw-flex-row">
          <a href="#project" class="btn btn-primary tw-px-6">
            Voir mes projets
            <i class="bi bi-arrow-down-right" aria-hidden="true"></i>
          </a>
          <a href="#contact" class="btn btn-ghost tw-px-6">
            <i class="bi bi-chat-dots" aria-hidden="true"></i>
            Me contacter
          </a>
        </div>

        <div v-reveal="320" class="tw-mt-8 tw-flex tw-flex-wrap tw-items-center tw-gap-x-5 tw-gap-y-3">
          <a
            :href="profile.locationUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="tw-inline-flex tw-items-center tw-gap-2 tw-text-sm tw-text-slate-400 tw-transition hover:tw-text-white"
          >
            <i class="bi bi-geo-alt-fill tw-text-emerald-300" aria-hidden="true"></i>
            {{ profile.location }}
          </a>
          <span class="tw-hidden tw-h-5 tw-w-px tw-bg-white/10 xs:tw-block" aria-hidden="true"></span>
          <ul class="tw-flex tw-items-center tw-gap-2" aria-label="Réseaux sociaux">
            <li v-for="social in socials" :key="social.name">
              <a
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="icon-btn tw-h-10 tw-w-10"
                :aria-label="`${social.name} (nouvel onglet)`"
              >
                <i :class="social.icon" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Portrait -->
      <div v-reveal="120" class="tw-order-1 tw-flex md:tw-order-2 md:tw-justify-end">
        <div class="tw-relative tw-w-32 xs:tw-w-36 sm:tw-w-44 md:tw-w-full md:tw-max-w-[15rem] lg:tw-max-w-[20rem]">
          <div
            class="tw-absolute tw--inset-4 tw-rounded-[2.5rem] tw-bg-gradient-to-br tw-from-emerald-400/30 tw-via-teal-400/5 tw-to-cyan-400/30 tw-blur-2xl lg:tw--inset-8"
            aria-hidden="true"
          ></div>
          <div class="tw-relative tw-rounded-[1.75rem] tw-bg-gradient-to-br tw-from-emerald-300/80 tw-via-white/10 tw-to-cyan-300/80 tw-p-[2px] lg:tw-rounded-[2rem]">
            <img
              :src="profilePhoto"
              alt="Portrait de Kolia ANOH"
              width="387"
              height="426"
              fetchpriority="high"
              decoding="async"
              class="tw-aspect-[4/5] tw-w-full tw-rounded-[calc(1.75rem-2px)] tw-bg-slate-900 tw-object-cover tw-object-top lg:tw-rounded-[calc(2rem-2px)]"
            >
          </div>

          <div class="floating-chip tw-left-0 tw-top-8 tw--translate-x-1/3">
            <BrandIcon brand="vuedotjs" class="tw-text-[#4FC08D]" />
            Vue.js
          </div>
          <div class="floating-chip floating-chip--late tw-bottom-10 tw-right-0 tw-translate-x-3">
            <i class="bi bi-geo-alt-fill tw-text-cyan-300" aria-hidden="true"></i>
            Basé à Rennes
          </div>
        </div>
      </div>
    </div>

    <!-- Chiffres clés -->
    <div class="container-page tw-mt-12 sm:tw-mt-16 lg:tw-mt-20">
      <dl class="tw-grid tw-grid-cols-3 tw-gap-2.5 sm:tw-gap-4">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          v-reveal="index * 80"
          class="card tw-flex tw-flex-col-reverse tw-justify-end tw-gap-1 tw-px-3.5 tw-py-4 sm:tw-px-6 sm:tw-py-5"
        >
          <dt class="tw-text-xs tw-leading-snug tw-text-slate-400 sm:tw-text-sm">{{ stat.label }}</dt>
          <dd class="tw-font-display tw-text-3xl tw-font-semibold tw-text-white sm:tw-text-4xl">
            {{ stat.value }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: calc(env(safe-area-inset-top, 0px) + 6.5rem);
  padding-bottom: 2rem;
}

@media (min-width: 640px) {
  .hero {
    padding-top: calc(env(safe-area-inset-top, 0px) + 7.5rem);
  }
}

/* À partir de 1024px, plus de barre en haut : la navigation est sur le côté */
@media (min-width: 1024px) {
  .hero {
    padding-top: 5.5rem;
    padding-bottom: 3rem;
  }
}

/* Badges flottants autour du portrait (masqués sur petits écrans) */
.floating-chip {
  position: absolute;
  display: none;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(15, 23, 42, 0.85);
  padding: 0.5rem 0.875rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
  box-shadow: 0 20px 40px -16px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  animation: float 5s ease-in-out infinite;
}

.floating-chip--late {
  animation-delay: -2.5s;
}

@media (min-width: 1024px) {
  .floating-chip {
    display: inline-flex;
  }
}

@keyframes float {
  50% {
    translate: 0 -8px;
  }
}
</style>
