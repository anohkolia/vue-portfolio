<script setup>
import { profile, socials } from '@/data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer tw-border-t tw-border-white/[0.06]">
    <div class="container-page tw-flex tw-flex-col tw-items-center tw-gap-5 tw-py-8 tw-text-center sm:tw-flex-row sm:tw-justify-between sm:tw-text-left">
      <div>
        <p class="tw-font-display tw-text-sm tw-font-semibold tw-text-white">
          {{ profile.firstName }} {{ profile.lastName }}
        </p>
        <p class="tw-mt-1 tw-text-xs tw-text-slate-500">
          © {{ year }} · Conçu et développé avec Vue.js &amp; Tailwind CSS
        </p>
      </div>

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
        <li>
          <a :href="`mailto:${profile.email}`" class="icon-btn tw-h-10 tw-w-10" aria-label="Envoyer un e-mail">
            <i class="bi bi-envelope" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding-bottom: env(safe-area-inset-bottom, 0px);
}
</style>
