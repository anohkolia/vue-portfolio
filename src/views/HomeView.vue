<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Apropos from '@/components/Apropos.vue'
import Competence from '@/components/Competence.vue'
import ContactForm from '@/components/ContactForm.vue'
import Experience from '@/components/Experience.vue'
import Formation from '@/components/Formation.vue'
import Hobbie from '@/components/Hobbie.vue'

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 260
}

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main
    id="page-top"
    class="tw-relative tw-min-h-screen tw-bg-transparent tw-px-4 tw-pb-12 tw-pt-24 sm:tw-px-6 lg:tw-pl-[22rem] lg:tw-pr-10 lg:tw-pt-8"
  >
    <div class="tw-pointer-events-none tw-fixed tw-inset-0 tw-z-0">
      <div class="tw-absolute tw-left-[18%] tw-top-10 tw-h-56 tw-w-56 tw-rounded-full tw-bg-emerald-400/10 tw-blur-3xl"></div>
      <div class="tw-absolute tw-bottom-20 tw-right-[8%] tw-h-72 tw-w-72 tw-rounded-full tw-bg-cyan-400/10 tw-blur-3xl"></div>
    </div>

    <div class="tw-relative tw-z-10 tw-mx-auto tw-max-w-5xl tw-space-y-8">
      <Apropos />
      <Experience />
      <Formation />
      <Competence />
      <Hobbie />
      <ContactForm />
    </div>

    <button
      v-show="showBackToTop"
      type="button"
      class="tw-fixed tw-bottom-6 tw-right-6 tw-z-50 tw-inline-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-cyan-300/50 tw-bg-slate-900/90 tw-text-cyan-100 tw-shadow-lg tw-shadow-cyan-900/30 tw-transition hover:tw--translate-y-1 hover:tw-border-emerald-300 hover:tw-bg-emerald-500 hover:tw-text-white"
      aria-label="Retour en haut"
      @click="backToTop"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </main>
</template>
