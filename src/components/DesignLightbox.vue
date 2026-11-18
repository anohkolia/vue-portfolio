<script setup>
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'
import { useModalLayer } from '@/composables/useModalLayer'

const props = defineProps({
  images: { type: Array, default: () => [] },
  title: { type: String, default: '' },
  // Index de l'image affichée ; `null` = visionneuse fermée (utiliser v-model:index)
  index: { type: Number, default: null },
})

const emit = defineEmits(['update:index'])

const isOpen = computed(() => props.index !== null && props.images.length > 0)
const current = computed(() => props.images[props.index ?? 0])
const total = computed(() => props.images.length)
const hasMany = computed(() => total.value > 1)

const closeButton = ref(null)
const strip = ref(null)
const loaded = ref(false)

const close = () => emit('update:index', null)
const go = (i) => emit('update:index', (i + total.value) % total.value)
const previous = () => go(props.index - 1)
const next = () => go(props.index + 1)

useModalLayer(isOpen, { onEscape: close })

// Flèches du clavier
const onKeydown = (event) => {
  if (!hasMany.value) return
  if (event.key === 'ArrowLeft') previous()
  if (event.key === 'ArrowRight') next()
}

watch(isOpen, async (open) => {
  if (open) {
    window.addEventListener('keydown', onKeydown)
    await nextTick()
    closeButton.value?.focus({ preventScroll: true })
  } else {
    window.removeEventListener('keydown', onKeydown)
  }
})

onUnmounted(() => window.removeEventListener('keydown', onKeydown))

// À chaque changement d'image : état de chargement, préchargement des voisines,
// et vignette active ramenée au centre de la pellicule.
watch(
  () => (isOpen.value ? current.value?.full : null),
  async (src) => {
    if (!src) return
    loaded.value = false
    ;[props.index - 1, props.index + 1].forEach((i) => {
      const neighbour = props.images[(i + total.value) % total.value]
      if (neighbour) new Image().src = neighbour.full
    })
    await nextTick()
    strip.value
      ?.querySelector('[aria-current="true"]')
      ?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  },
)

// Balayage horizontal (mobile / tablette)
let touchStart = null

const onTouchStart = (event) => {
  const touch = event.changedTouches[0]
  touchStart = { x: touch.clientX, y: touch.clientY }
}

const onTouchEnd = (event) => {
  if (!touchStart || !hasMany.value) return
  const touch = event.changedTouches[0]
  const dx = touch.clientX - touchStart.x
  const dy = touch.clientY - touchStart.y
  touchStart = null
  if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return
  if (dx < 0) next()
  else previous()
}
</script>

<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="isOpen"
        class="lightbox tw-fixed tw-inset-0 tw-z-[80] tw-flex tw-flex-col tw-bg-slate-950/95 tw-backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        :aria-label="`Album ${title}`"
      >
        <!-- Barre supérieure -->
        <div class="tw-flex tw-items-center tw-justify-between tw-gap-4 tw-px-4 tw-py-3 sm:tw-px-6">
          <div class="tw-min-w-0">
            <p class="tw-truncate tw-font-display tw-text-base tw-font-semibold tw-text-white sm:tw-text-lg">{{ title }}</p>
            <p class="tw-truncate tw-text-xs tw-text-slate-400 sm:tw-text-sm" aria-live="polite">
              <span class="tw-font-semibold tw-text-emerald-300">{{ index + 1 }}</span> / {{ total }} · {{ current.alt }}
            </p>
          </div>
          <button ref="closeButton" type="button" class="icon-btn" aria-label="Fermer la visionneuse" @click="close">
            <i class="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </div>

        <!-- Scène -->
        <div
          class="tw-relative tw-min-h-0 tw-flex-1 tw-px-3 sm:tw-px-20"
          @touchstart.passive="onTouchStart"
          @touchend="onTouchEnd"
        >
          <div class="tw-relative tw-h-full tw-w-full" @click.self="close">
            <Transition name="lightbox-image">
              <img
                :key="current.id"
                :src="current.full"
                :alt="current.alt"
                decoding="async"
                class="tw-absolute tw-inset-0 tw-m-auto tw-max-h-full tw-max-w-full tw-rounded-xl tw-object-contain tw-shadow-2xl tw-shadow-black/60"
                @load="loaded = true"
              >
            </Transition>
            <span
              v-if="!loaded"
              class="tw-pointer-events-none tw-absolute tw-inset-0 tw-m-auto tw-h-8 tw-w-8 tw-animate-spin tw-rounded-full tw-border-2 tw-border-white/20 tw-border-t-emerald-300"
              aria-hidden="true"
            ></span>
          </div>

          <template v-if="hasMany">
            <button
              type="button"
              class="nav-button tw-left-2 sm:tw-left-5"
              aria-label="Visuel précédent"
              @click="previous"
            >
              <i class="bi bi-chevron-left" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="nav-button tw-right-2 sm:tw-right-5"
              aria-label="Visuel suivant"
              @click="next"
            >
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </button>
          </template>
        </div>

        <!-- Commandes mobiles : sous l'image, à portée de pouce -->
        <div v-if="hasMany" class="tw-flex tw-items-center tw-justify-between tw-gap-3 tw-px-4 tw-pt-3 sm:tw-hidden">
          <button type="button" class="icon-btn tw-h-12 tw-w-12 tw-rounded-full" aria-label="Visuel précédent" @click="previous">
            <i class="bi bi-chevron-left" aria-hidden="true"></i>
          </button>
          <p class="tw-flex tw-items-center tw-gap-2 tw-text-xs tw-text-slate-500">
            <i class="bi bi-arrow-left-right" aria-hidden="true"></i>
            Glissez pour naviguer
          </p>
          <button type="button" class="icon-btn tw-h-12 tw-w-12 tw-rounded-full" aria-label="Visuel suivant" @click="next">
            <i class="bi bi-chevron-right" aria-hidden="true"></i>
          </button>
        </div>

        <!-- Pellicule de vignettes -->
        <div v-if="hasMany" ref="strip" class="strip tw-overflow-x-auto tw-px-4 tw-pt-3 sm:tw-px-6">
          <ul class="tw-mx-auto tw-flex tw-w-max tw-gap-2">
            <li v-for="(image, i) in images" :key="image.id">
              <button
                type="button"
                class="tw-block tw-h-14 tw-w-14 tw-overflow-hidden tw-rounded-lg tw-border-2 tw-transition sm:tw-h-16 sm:tw-w-16"
                :class="i === index ? 'tw-border-emerald-300 tw-opacity-100' : 'tw-border-transparent tw-opacity-50 hover:tw-opacity-90'"
                :aria-label="`Afficher : ${image.alt}`"
                :aria-current="i === index ? 'true' : undefined"
                @click="go(i)"
              >
                <img :src="image.thumb" alt="" loading="lazy" decoding="async" class="tw-h-full tw-w-full tw-object-cover">
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox {
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 0.75rem);
}

.strip {
  scrollbar-width: none;
}

.strip::-webkit-scrollbar {
  display: none;
}

/* Flèches latérales à partir de 640px (sur mobile : commandes sous l'image) */
.nav-button {
  position: absolute;
  top: 50%;
  z-index: 2;
  display: none;
  height: 3rem;
  width: 3rem;
  translate: 0 -50%;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 23, 42, 0.75);
  font-size: 1.125rem;
  color: #fff;
  backdrop-filter: blur(8px);
  transition: background-color 200ms ease, border-color 200ms ease;
}

@media (min-width: 640px) {
  .nav-button {
    display: inline-flex;
  }
}

@media (hover: hover) {
  .nav-button:hover {
    border-color: rgba(110, 231, 183, 0.5);
    background: rgba(16, 185, 129, 0.25);
  }
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 280ms ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-image-enter-active,
.lightbox-image-leave-active {
  transition: opacity 260ms ease, transform 260ms ease;
}

.lightbox-image-enter-from {
  opacity: 0;
  transform: scale(0.97);
}

.lightbox-image-leave-to {
  opacity: 0;
}
</style>
