<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useScrollState } from '@/composables/useScrollState'

const { y, progress } = useScrollState()

// Le bouton s'efface quand une zone marquée `data-fab-avoid` (ex. bouton d'envoi
// du formulaire) est à l'écran, pour ne jamais la recouvrir.
const obstructed = ref(false)
const onScreen = new Set()
let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => (entry.isIntersecting ? onScreen.add(entry.target) : onScreen.delete(entry.target)))
    obstructed.value = onScreen.size > 0
  })
  document.querySelectorAll('[data-fab-avoid]').forEach((el) => observer.observe(el))
})

onUnmounted(() => observer?.disconnect())

const visible = computed(() => y.value > 600 && !obstructed.value)
// Anneau de progression de lecture autour du bouton
const CIRCUMFERENCE = 2 * Math.PI * 21
const dashOffset = computed(() => CIRCUMFERENCE * (1 - progress.value))

const backToTop = () => {
  window.scrollTo({ top: 0 })
}
</script>

<template>
  <Transition
    enter-active-class="tw-transition tw-duration-300"
    leave-active-class="tw-transition tw-duration-200"
    enter-from-class="tw-translate-y-3 tw-scale-90 tw-opacity-0"
    leave-to-class="tw-translate-y-3 tw-scale-90 tw-opacity-0"
  >
    <button
      v-show="visible"
      type="button"
      class="back-to-top tw-group tw-fixed tw-right-4 tw-z-40 tw-inline-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-full tw-bg-slate-900/90 tw-text-emerald-200 tw-shadow-lg tw-shadow-black/40 tw-backdrop-blur tw-transition hover:tw-bg-slate-800 hover:tw-text-white sm:tw-right-6"
      aria-label="Retour en haut de la page"
      @click="backToTop"
    >
      <svg class="tw-absolute tw-inset-0 tw--rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" stroke-opacity="0.15" stroke-width="2" />
        <circle
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke="url(#btt-gradient)"
          stroke-width="2"
          stroke-linecap="round"
          :stroke-dasharray="CIRCUMFERENCE"
          :stroke-dashoffset="dashOffset"
        />
        <defs>
          <linearGradient id="btt-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#34d399" />
            <stop offset="1" stop-color="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
      <i class="bi bi-arrow-up tw-text-lg tw-transition group-hover:tw--translate-y-0.5" aria-hidden="true"></i>
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top {
  bottom: calc(env(safe-area-inset-bottom, 0px) + 1rem);
}

@media (min-width: 640px) {
  .back-to-top {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 1.5rem);
  }
}
</style>
