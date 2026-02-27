<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const navItems = [
  { id: 'about', label: 'À propos', icon: 'bi bi-person' },
  { id: 'experience', label: 'Expérience', icon: 'bi bi-patch-check' },
  { id: 'formation', label: 'Formation', icon: 'bi bi-journals' },
  { id: 'skill', label: 'Compétences', icon: 'bi bi-stars' },
  { id: 'hobbie', label: 'Hobbies', icon: 'bi bi-emoji-smile' },
  { id: 'contact', label: 'Contact', icon: 'bi bi-envelope-at' },
]

const isMenuOpen = ref(false)
const activeSection = ref('about')

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const updateActiveNav = () => {
  const offset = 140
  let current = navItems[0].id

  navItems.forEach((item) => {
    const section = document.getElementById(item.id)
    if (!section) {
      return
    }

    if (window.scrollY + offset >= section.offsetTop) {
      current = item.id
    }
  })

  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveNav, { passive: true })
  updateActiveNav()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveNav)
})
</script>

<template>
  <header class="tw-fixed tw-top-0 tw-z-50 tw-w-full lg:tw-left-0 lg:tw-top-0 lg:tw-h-screen lg:tw-w-80">
    <nav class="tw-h-full tw-border-b tw-border-cyan-300/20 tw-bg-slate-950/90 tw-backdrop-blur-xl lg:tw-border-b-0 lg:tw-border-r">
      <div class="tw-flex tw-items-center tw-justify-between tw-gap-4 tw-px-4 tw-py-3 lg:tw-flex-col lg:tw-justify-start lg:tw-px-6 lg:tw-py-8">
        <a
          href="#about"
          class="tw-flex tw-items-center tw-gap-3"
          @click="closeMenu"
        >
          <img
            src="@/assets/profile.jpg"
            alt="Kolia ANOH"
            class="tw-h-12 tw-w-12 tw-rounded-full tw-border-2 tw-border-emerald-400/70 tw-object-cover lg:tw-h-36 lg:tw-w-36 lg:tw-rounded-2xl"
          >
          <span class="tw-flex tw-flex-col tw-leading-tight lg:tw-items-center">
            <span class="tw-text-sm tw-font-semibold tw-uppercase tw-tracking-[0.2em] tw-text-emerald-200 lg:tw-text-base">Kolia ANOH</span>
            <span class="tw-text-[10px] tw-font-medium tw-uppercase tw-tracking-[0.2em] tw-text-slate-400">Web Developer</span>
          </span>
        </a>

        <button
          type="button"
          class="tw-inline-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-cyan-400/40 tw-bg-slate-900/80 tw-text-white lg:tw-hidden"
          :aria-expanded="isMenuOpen"
          aria-label="Ouvrir le menu"
          @click="toggleMenu"
        >
          <i :class="isMenuOpen ? 'bi bi-x-lg' : 'bi bi-list'" class="tw-text-lg"></i>
        </button>
      </div>

      <ul
        class="tw-space-y-2 tw-px-4 tw-pb-4 lg:tw-block lg:tw-space-y-3 lg:tw-px-6"
        :class="isMenuOpen ? 'tw-block' : 'tw-hidden lg:tw-block'"
      >
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="tw-group tw-flex tw-items-center tw-gap-3 tw-rounded-xl tw-px-4 tw-py-3 tw-transition tw-duration-200"
            :class="
              activeSection === item.id
                ? 'tw-bg-cyan-500/20 tw-text-cyan-100'
                : 'tw-text-slate-300 hover:tw-bg-slate-800/80 hover:tw-text-white'
            "
            @click="closeMenu"
          >
            <span
              class="tw-inline-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-lg tw-bg-slate-800/80 tw-transition"
              :class="activeSection === item.id ? 'tw-bg-cyan-500/25 tw-text-cyan-100' : 'group-hover:tw-bg-cyan-500/20 group-hover:tw-text-cyan-100'"
            >
              <i :class="item.icon"></i>
            </span>
            <span class="tw-text-sm tw-font-medium tw-tracking-wide">{{ item.label }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
