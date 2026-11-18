<script setup>
import { computed, ref } from 'vue'
import DesignLightbox from '@/components/DesignLightbox.vue'
import { designCategories, designCount } from '@/data/designs'

const activeCategoryId = ref(null)
const activeIndex = ref(null)

const activeCategory = computed(() => designCategories.find((category) => category.id === activeCategoryId.value))

const openAlbum = (category) => {
  activeCategoryId.value = category.id
  activeIndex.value = 0
}
</script>

<template>
  <section class="tw-mt-16 sm:tw-mt-20" aria-labelledby="design-title">
    <div v-reveal class="tw-flex tw-flex-col tw-gap-3 sm:tw-flex-row sm:tw-items-end sm:tw-justify-between">
      <div class="tw-max-w-xl">
        <h3 id="design-title" class="tw-flex tw-items-center tw-gap-3 tw-text-2xl tw-font-semibold sm:tw-text-3xl">
          <span class="icon-tile tw-h-10 tw-w-10 tw-text-lg">
            <i class="bi bi-palette" aria-hidden="true"></i>
          </span>
          Design graphique
        </h3>
        <p class="tw-mt-3 tw-text-slate-400">
          Logos, flyers et étiquettes réalisés pour des entreprises et des particuliers.
        </p>
      </div>
      <p class="tw-text-sm tw-text-slate-500">{{ designCount }} visuels</p>
    </div>

    <!-- Mobile : carrousel horizontal ; à partir de 640px : grille de 3 albums -->
    <ul class="albums tw-mt-6 tw-flex tw-snap-x tw-snap-mandatory tw-gap-4 tw-overflow-x-auto tw-pb-2 sm:tw-mt-8 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-5 sm:tw-overflow-visible sm:tw-pb-0 lg:tw-gap-8">
      <li
        v-for="(category, index) in designCategories"
        :key="category.id"
        v-reveal="index * 100"
        class="tw-w-[78%] tw-shrink-0 tw-snap-start xs:tw-w-[62%] sm:tw-w-auto"
      >
        <button
          type="button"
          class="album tw-group tw-block tw-w-full tw-rounded-2xl tw-text-left"
          :style="{ '--c': category.color }"
          :aria-label="`Ouvrir l'album ${category.title} (${category.images.length} visuels)`"
          @click="openAlbum(category)"
        >
          <span class="tw-relative tw-block tw-aspect-[4/3]" aria-hidden="true">
            <span
              v-for="(image, i) in category.images.slice(0, 3)"
              :key="image.id"
              class="album-card"
              :style="{ zIndex: 3 - i }"
            >
              <img :src="image.thumb" alt="" loading="lazy" decoding="async" class="tw-h-full tw-w-full tw-object-cover">
            </span>
            <span class="album-badge">
              <i class="bi bi-images" aria-hidden="true"></i>
              {{ category.images.length }}
            </span>
          </span>

          <span class="tw-mt-5 tw-flex tw-items-center tw-justify-between tw-gap-3">
            <span class="tw-flex tw-min-w-0 tw-items-center tw-gap-3">
              <span class="album-tile tw-inline-flex tw-h-10 tw-w-10 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-xl tw-text-lg">
                <i :class="category.icon" aria-hidden="true"></i>
              </span>
              <span class="tw-min-w-0">
                <span class="tw-block tw-truncate tw-font-display tw-font-semibold tw-text-white">{{ category.title }}</span>
                <span class="tw-block tw-text-xs tw-text-slate-400">{{ category.images.length }} visuels</span>
              </span>
            </span>
            <span class="icon-btn tw-h-9 tw-w-9 tw-rounded-lg tw-text-sm group-hover:tw-border-white/25 group-hover:tw-text-white">
              <i class="bi bi-arrows-angle-expand" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </li>
    </ul>

    <DesignLightbox
      v-model:index="activeIndex"
      :images="activeCategory?.images ?? []"
      :title="activeCategory?.title ?? ''"
    />
  </section>
</template>

<style scoped>
/* Carrousel mobile : déborde jusqu'aux bords de l'écran, sans barre de défilement */
.albums {
  margin-inline: -1rem;
  padding-inline: 1rem;
  scroll-padding-inline: 1rem;
  padding-top: 1rem;
  scrollbar-width: none;
}

.albums::-webkit-scrollbar {
  display: none;
}

@media (min-width: 420px) {
  .albums {
    margin-inline: -1.25rem;
    padding-inline: 1.25rem;
    scroll-padding-inline: 1.25rem;
  }
}

@media (min-width: 640px) {
  .albums {
    margin-inline: 0;
    padding-inline: 0;
  }
}

/* Pile de visuels : légèrement éventée au repos, déployée au survol / focus */
.album-card {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #0f172a;
  box-shadow: 0 18px 40px -18px rgba(0, 0, 0, 0.8);
  transform-origin: 50% 90%;
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms ease;
}

.album-card:nth-child(2) {
  transform: rotate(-4deg) scale(0.95);
}

.album-card:nth-child(3) {
  transform: rotate(4deg) scale(0.95);
}

@media (hover: hover) {
  .album:hover .album-card:nth-child(1) {
    transform: translateY(-4%) scale(1.02);
    box-shadow: 0 30px 50px -20px rgba(0, 0, 0, 0.9);
  }

  .album:hover .album-card:nth-child(2) {
    transform: translateX(-9%) rotate(-8deg) scale(0.94);
  }

  .album:hover .album-card:nth-child(3) {
    transform: translateX(9%) rotate(8deg) scale(0.94);
  }
}

.album:focus-visible .album-card:nth-child(2) {
  transform: translateX(-9%) rotate(-8deg) scale(0.94);
}

.album:focus-visible .album-card:nth-child(3) {
  transform: translateX(9%) rotate(8deg) scale(0.94);
}

.album-badge {
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  border-radius: 9999px;
  background: rgba(2, 6, 23, 0.75);
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  backdrop-filter: blur(6px);
}

.album-tile {
  color: var(--c);
  background-color: color-mix(in srgb, var(--c) 14%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--c) 28%, transparent);
}
</style>
