<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProfileAvatar from '@/components/ProfileAvatar.vue'
import SiteNavPanel from '@/components/SiteNavPanel.vue'
import { navItems, profile } from '@/data/portfolio'
import { useModalLayer } from '@/composables/useModalLayer'
import { useScrollState } from '@/composables/useScrollState'

const route = useRoute()
const router = useRouter()
const { y, progress } = useScrollState()

const isHome = computed(() => route.name === 'home')
const isMenuOpen = ref(false)
const activeSection = ref(navItems[0].id)
const currentSection = computed(() => (isHome.value ? activeSection.value : null))
const drawer = ref(null)

const closeMenu = () => {
  isMenuOpen.value = false
}

useModalLayer(isMenuOpen, { onEscape: closeMenu })

watch(isMenuOpen, async (open) => {
  if (!open) return
  await nextTick()
  drawer.value?.querySelector('nav a')?.focus({ preventScroll: true })
})

// Hors de la page d'accueil (404…), les ancres renvoient vers l'accueil
const hrefFor = (id) => (isHome.value ? `#${id}` : `/#${id}`)

const onNavigate = (event, id) => {
  closeMenu()
  if (!isHome.value) {
    event.preventDefault()
    router.push({ name: 'home', hash: `#${id}` })
  }
}

// Section active : la dernière dont le haut a franchi ~40 % de la hauteur d'écran
const updateActiveSection = () => {
  if (!isHome.value) return
  const threshold = window.innerHeight * 0.4
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
  let current = navItems[0].id

  for (const item of navItems) {
    const section = document.getElementById(item.id)
    if (section && section.getBoundingClientRect().top <= threshold) current = item.id
  }

  activeSection.value = atBottom ? navItems[navItems.length - 1].id : current
}

// Barre supérieure (mobile) : s'efface quand on descend, réapparaît dès qu'on remonte
const topbarHidden = ref(false)

watch(y, (now, before) => {
  updateActiveSection()
  if (isMenuOpen.value || now < 80) {
    topbarHidden.value = false
    return
  }
  if (Math.abs(now - before) > 6) topbarHidden.value = now > before
})

// En passant au format bureau, le tiroir mobile n'a plus lieu d'être
let desktopQuery = null
const onDesktopChange = (event) => {
  if (event.matches) closeMenu()
}

onMounted(() => {
  desktopQuery = window.matchMedia('(min-width: 1024px)')
  desktopQuery.addEventListener('change', onDesktopChange)
  updateActiveSection()
})

onUnmounted(() => {
  desktopQuery?.removeEventListener('change', onDesktopChange)
})
</script>

<template>
  <a
    href="#contenu"
    class="tw-sr-only focus:tw-not-sr-only focus:tw-fixed focus:tw-left-4 focus:tw-top-4 focus:tw-z-[80] focus:tw-rounded-lg focus:tw-bg-emerald-300 focus:tw-px-4 focus:tw-py-2 focus:tw-font-semibold focus:tw-text-slate-950"
  >
    Aller au contenu
  </a>

  <!-- Mobile & tablette : barre supérieure -->
  <header
    class="topbar tw-fixed tw-inset-x-0 tw-top-0 tw-z-50 lg:tw-hidden"
    :class="{ 'is-hidden': topbarHidden, 'is-solid': y > 8 || isMenuOpen }"
  >
    <div class="tw-flex tw-h-16 tw-items-center tw-justify-between tw-gap-3 tw-px-4 sm:tw-px-6">
      <a :href="hrefFor('about')" class="tw-flex tw-min-w-0 tw-items-center tw-gap-3 tw-rounded-xl" @click="onNavigate($event, 'about')">
        <ProfileAvatar class="tw-h-10 tw-w-10" />
        <span class="tw-flex tw-min-w-0 tw-flex-col tw-leading-tight">
          <span class="tw-truncate tw-font-display tw-text-sm tw-font-semibold tw-text-white">
            {{ profile.firstName }} {{ profile.lastName }}
          </span>
          <span class="tw-truncate tw-text-xs tw-text-slate-400">{{ profile.role }}</span>
        </span>
      </a>

      <button
        type="button"
        class="icon-btn"
        aria-controls="mobile-menu"
        :aria-expanded="isMenuOpen"
        aria-label="Ouvrir le menu"
        @click="isMenuOpen = true"
      >
        <i class="bi bi-list tw-text-2xl" aria-hidden="true"></i>
      </button>
    </div>

    <!-- Progression de lecture -->
    <div class="tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-0.5" aria-hidden="true">
      <div
        class="tw-h-full tw-origin-left tw-bg-gradient-to-r tw-from-emerald-400 tw-to-cyan-400"
        :style="{ transform: `scaleX(${progress})` }"
      ></div>
    </div>
  </header>

  <!-- Bureau : barre latérale (rail compact jusqu'à 1280px, puis barre complète) -->
  <header class="sidebar tw-fixed tw-inset-y-0 tw-left-0 tw-z-50 tw-hidden lg:tw-block">
    <SiteNavPanel :active-section="currentSection" :href-for="hrefFor" @navigate="onNavigate" />

    <!-- Progression de lecture le long du bord droit -->
    <div class="tw-absolute tw-inset-y-0 tw-right-0 tw-w-px tw-bg-white/[0.07]" aria-hidden="true">
      <div
        class="tw-h-full tw-w-full tw-origin-top tw-bg-gradient-to-b tw-from-emerald-400 tw-to-cyan-400"
        :style="{ transform: `scaleY(${progress})` }"
      ></div>
    </div>
  </header>

  <!-- Mobile & tablette : tiroir latéral -->
  <Teleport to="body">
    <Transition name="drawer">
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="tw-fixed tw-inset-0 tw-z-[70] lg:tw-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <div class="tw-absolute tw-inset-0 tw-bg-slate-950/70 tw-backdrop-blur-sm" @click="closeMenu"></div>

        <div
          ref="drawer"
          class="drawer-panel tw-absolute tw-inset-y-0 tw-left-0 tw-w-[min(20rem,86vw)] tw-border-r tw-border-white/10 tw-bg-slate-950 tw-shadow-2xl tw-shadow-black/60"
        >
          <SiteNavPanel :active-section="currentSection" :href-for="hrefFor" @navigate="onNavigate">
            <template #action>
              <button type="button" class="icon-btn" aria-label="Fermer le menu" @click="closeMenu">
                <i class="bi bi-x-lg" aria-hidden="true"></i>
              </button>
            </template>
          </SiteNavPanel>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.topbar {
  padding-top: env(safe-area-inset-top, 0px);
  border-bottom: 1px solid transparent;
  transition:
    transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
    background-color 300ms ease,
    border-color 300ms ease;
}

.topbar.is-solid {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(2, 6, 23, 0.8);
  backdrop-filter: blur(16px);
}

.topbar.is-hidden {
  transform: translateY(-100%);
}

/* Navigation au clavier : la barre reste visible tant qu'elle contient le focus */
.topbar:focus-within {
  transform: none;
}

.sidebar {
  width: var(--sidebar-w);
  padding-left: env(safe-area-inset-left, 0px);
  background: rgba(2, 6, 23, 0.72);
  backdrop-filter: blur(16px);
}

.drawer-panel {
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: env(safe-area-inset-bottom, 0px);
  padding-left: env(safe-area-inset-left, 0px);
}

/* Même durée que le panneau : Vue se cale sur la transition de l'élément racine */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 380ms ease;
}

.drawer-enter-active .drawer-panel,
.drawer-leave-active .drawer-panel {
  transition: transform 380ms cubic-bezier(0.22, 1, 0.36, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .drawer-panel,
.drawer-leave-to .drawer-panel {
  transform: translateX(-100%);
}

.drawer-enter-active :deep(.nav-item) {
  animation: drawer-item-in 450ms cubic-bezier(0.22, 1, 0.36, 1) backwards;
  animation-delay: calc(120ms + var(--i) * 40ms);
}

@keyframes drawer-item-in {
  from {
    opacity: 0;
    transform: translateX(-24px);
  }
}
</style>
