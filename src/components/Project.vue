<script setup>
import { ref } from 'vue'
import logo0 from '@/assets/designs/logo-0.png'
import logo1 from '@/assets/designs/logo-1.png'
import logo2 from '@/assets/designs/logo-2.png'
import logo3 from '@/assets/designs/logo-3.png'
import logo4 from '@/assets/designs/logo-4.png'
import logo5 from '@/assets/designs/logo-5.png'
import logo6 from '@/assets/designs/logo-6.png'
import logo7 from '@/assets/designs/logo-7.png'

import flyer1 from '@/assets/designs/flyer-1.png'
import flyer2 from '@/assets/designs/flyer-2.png'
import flyer3 from '@/assets/designs/flyer-3.png'
import flyer4 from '@/assets/designs/flyer-4.png'
import flyer5 from '@/assets/designs/flyer-5.png'
import flyer6 from '@/assets/designs/flyer-6.png'
import flyer7 from '@/assets/designs/flyer-7.png'
import flyer8 from '@/assets/designs/flyer-8.png'
import flyer9 from '@/assets/designs/flyer-9.png'
import flyer10 from '@/assets/designs/flyer-10.png'
import flyer11 from '@/assets/designs/flyer-11.png'
import flyer12 from '@/assets/designs/flyer-12.png'
import flyer13 from '@/assets/designs/flyer-13.png'
import flyer14 from '@/assets/designs/flyer-14.png'

import etiquette1 from '@/assets/designs/etiquette-1.png'
import etiquette2 from '@/assets/designs/etiquette-2.png'

const openedAlbum = ref(null)
const zoomedImage = ref(null)
const currentCategoryId = ref(null)
const currentImageIndex = ref(null)

const projectsWeb = [
  {
    id: 1,
    titre: 'TypeKey',
    description: 'Plateforme interactive de test de vitesse de frappe. Testez votre vitesse de dactylographie en temps réel et améliorez vos performances.',
    technologies: ['Vue.JS', 'Tailwind CSS', 'JavaScript', 'Vite'],
    lien: 'https://typekey.netlify.app',
    couleur: '#FF6B6B',
    icon: 'bi bi-keyboard-fill',
    features: ['Tests de frappe chronométrés', 'Statistiques en temps réel', 'Interface réactive']
  },
  {
    id: 2,
    titre: 'AmirEvent',
    description: 'Application privée de gestion d\'événements pour association permettant de créer, acheter, partager et gérer des événements.',
    technologies: ['Vue.JS', 'TypeScript', 'TailwindCss', 'Supabase'],
    lien: 'https://amirevent.netlify.app',
    couleur: '#4FC08D',
    icon: 'bi bi-calendar-event',
    features: ['Création d\'événements', 'Gestion des participants', 'Achat de billet']
  },
]

const designCategories = [
  {
    id: 1,
    categorie: 'Logo',
    icon: 'bi bi-pentagon-fill',
    couleur: '#9F7AEA',
    images: [
      { id: 0, src: logo0, alt: 'cc' },
      { id: 1, src: logo1, alt: 'ivice sarl' },
      { id: 2, src: logo2, alt: 'easi' },
      { id: 3, src: logo3, alt: 'cab services' },
      { id: 4, src: logo4, alt: 'trésor d\'estrella' },
      { id: 5, src: logo5, alt: 'cosméthique' },
      { id: 6, src: logo6, alt: 'cab services' },
      { id: 7, src: logo7, alt: 'La tata' },
    ]
  },
  {
    id: 2,
    categorie: 'Flyer',
    icon: 'bi bi-file-earmark-pdf-fill',
    couleur: '#48BB78',
    images: [
      { id: 1, src: flyer1, alt: 'Flyer Design 1' },
      { id: 2, src: flyer2, alt: 'Flyer Design 2' },
      { id: 3, src: flyer3, alt: 'Flyer Design 3' },
      { id: 4, src: flyer4, alt: 'Flyer Design 4' },
      { id: 5, src: flyer5, alt: 'Flyer Design 5' },
      { id: 6, src: flyer6, alt: 'Flyer Design 6' },
      { id: 7, src: flyer7, alt: 'Flyer Design 7' },
      { id: 8, src: flyer8, alt: 'Flyer Design 8' },
      { id: 9, src: flyer9, alt: 'Flyer Design 9' },
      { id: 10, src: flyer10, alt: 'Flyer Design 10' },
      { id: 11, src: flyer11, alt: 'Flyer Design 11' },
      { id: 12, src: flyer12, alt: 'Flyer Design 12' },
      { id: 13, src: flyer13, alt: 'Flyer Design 13' },
      { id: 14, src: flyer14, alt: 'Flyer Design 14' },
    ]
  },
  {
    id: 3,
    categorie: 'Étiquette Produit',
    icon: 'bi bi-tag-fill',
    couleur: '#F6AD55',
    images: [
      { id: 1, src: etiquette1, alt: 'Étiquette Produit 1' },
      { id: 2, src: etiquette2, alt: 'Étiquette Produit 2' },
    ]
  },
]

//logique de navigation entre les images avec des boutons gauche/droite
const zoomImage = (image, categoryId, imageIndex) => {
  zoomedImage.value = image
  currentCategoryId.value = categoryId
  currentImageIndex.value = imageIndex
}

const previousImage = () => {
  if (currentCategoryId.value !== null && currentImageIndex.value !== null) {
    const category = designCategories.find(c => c.id === currentCategoryId.value)
    if (category) {
      const newIndex = currentImageIndex.value === 0 ? category.images.length - 1 : currentImageIndex.value - 1
      zoomedImage.value = category.images[newIndex]
      currentImageIndex.value = newIndex
    }
  }
}

const nextImage = () => {
  if (currentCategoryId.value !== null && currentImageIndex.value !== null) {
    const category = designCategories.find(c => c.id === currentCategoryId.value)
    if (category) {
      const newIndex = currentImageIndex.value === category.images.length - 1 ? 0 : currentImageIndex.value + 1
      zoomedImage.value = category.images[newIndex]
      currentImageIndex.value = newIndex
    }
  }
}
</script>

<template>
  <section id="project" class="content-section tw-scroll-mt-24 lg:tw-scroll-mt-8">
    <div class="portfolio-card tw-p-6 sm:tw-p-8">
      <h2 class="section-title">
        <i class="bi bi-laptop"></i>
        Projets web
      </h2>

      <div class="tw-mt-6 tw-grid tw-gap-6 md:tw-grid-cols-2">
        <article
          v-for="project in projectsWeb"
          :key="project.id"
          class="tw-group tw-flex tw-flex-col tw-rounded-xl tw-border tw-border-emerald-500/20 tw-bg-slate-800/60 tw-p-6 tw-transition hover:tw--translate-y-1 hover:tw-border-emerald-400/40 hover:tw-bg-slate-800"
        >
          <!-- Header avec icône -->
          <div class="tw-flex tw-items-start tw-justify-between">
            <span
              class="tw-inline-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-lg tw-bg-slate-900 tw-transition group-hover:tw-scale-110"
              :style="{ color: project.couleur }"
            >
              <i :class="project.icon" class="tw-text-2xl"></i>
            </span>
            <a
              :href="project.lien"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-inline-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-lg tw-bg-slate-900/50 tw-text-slate-300 tw-transition hover:tw-bg-emerald-500/20 hover:tw-text-emerald-300"
              title="Visiter le projet"
            >
              <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </div>

          <!-- Titre et description -->
          <h3 class="tw-mt-4 tw-text-xl tw-font-bold tw-uppercase tw-text-white">{{ project.titre }}</h3>
          <p class="tw-mt-2 tw-text-sm tw-leading-relaxed tw-text-slate-200/80">{{ project.description }}</p>

          <!-- Features -->
          <div class="tw-mt-4 tw-space-y-2">
            <div v-for="(feature, idx) in project.features" :key="idx" class="tw-flex tw-items-center tw-gap-2">
              <span class="tw-inline-block tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-emerald-400"></span>
              <span class="tw-text-xs tw-text-slate-300">{{ feature }}</span>
            </div>
          </div>

          <!-- Technologies -->
          <div class="tw-mt-auto tw-border-t tw-border-slate-700/50 tw-pt-4">
            <p class="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-widest tw-text-slate-400">Technos</p>
            <div class="tw-mt-2 tw-flex tw-flex-wrap tw-gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tw-inline-flex tw-items-center tw-gap-1 tw-rounded-full tw-bg-slate-900/50 tw-px-3 tw-py-1 tw-text-xs tw-font-medium tw-text-slate-300 tw-transition hover:tw-bg-slate-900"
                :style="{ borderLeft: `2px solid ${project.couleur}` }"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Lien direct -->
          <a
            :href="project.lien"
            target="_blank"
            rel="noopener noreferrer"
            class="tw-mt-5 tw-inline-flex tw-items-center tw-justify-center tw-rounded-lg tw-border tw-px-4 tw-py-2 tw-text-sm tw-font-semibold tw-uppercase tw-tracking-widest tw-transition"
            :style="{
              borderColor: `${project.couleur}66`,
              color: project.couleur
            }"
            @mouseenter="e => { e.currentTarget.style.backgroundColor = `${project.couleur}20` }"
            @mouseleave="e => { e.currentTarget.style.backgroundColor = 'transparent' }"
          >
            <i class="bi bi-arrow-right-short tw-mr-1"></i>
            Découvrir
          </a>
        </article>
      </div>

      <!-- Section Designs & Graphisms -->
      <h2 class="section-title tw-mt-12">
        <i class="bi bi-palette"></i>
        Designs & Graphisms
      </h2>

      <!-- Albums photos empilées -->
      <div class="tw-mt-8 tw-grid tw-gap-8 sm:tw-grid-cols-2 lg:tw-grid-cols-3">
        <div
          v-for="category in designCategories"
          :key="category.id"
          @mouseenter="openedAlbum = category.id"
          @mouseleave="openedAlbum = null"
          class="tw-perspective tw-relative"
        >
          <!-- Album empilé fermé -->
          <div
            class="tw-relative tw-h-56 tw-cursor-pointer"
            :class="{ 'tw-pointer-events-none': openedAlbum === category.id }"
          >
            <!-- Cartes empilées (fermées) -->
            <div
              v-for="(image, idx) in category.images"
              :key="image.id"
              class="tw-absolute tw-h-full tw-w-full tw-overflow-hidden tw-rounded-xl tw-border tw-border-emerald-500/20 tw-bg-slate-800/60 tw-transition-all tw-duration-700"
              :style="{
                transform: openedAlbum === category.id
                  ? `translateY(${idx * 15}px) translateX(${idx * 8}px) scale(1) rotateZ(${idx * 2}deg)`
                  : `translateY(${idx * 12}px) scale(${1 - idx * 0.04})`,
                zIndex: category.images.length - idx,
                boxShadow: openedAlbum === category.id
                  ? `0 ${10 + idx * 5}px ${30 + idx * 10}px rgba(0,0,0,0.4)`
                  : `0 ${4 + idx * 2}px ${12 + idx * 4}px rgba(0,0,0,0.3)`,
                opacity: openedAlbum === category.id ? 1 : 0.95
              }"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="tw-h-full tw-w-full tw-object-cover"
              />
            </div>

            <!-- En-tête de l'album (toujours visible) -->
            <div
              class="tw-absolute tw-inset-0 tw-flex tw-flex-col tw-items-center tw-justify-center tw-rounded-xl tw-bg-gradient-to-b tw-to-transparent tw-from-black/60 tw-backdrop-blur-sm tw-transition-all tw-duration-700 tw-pointer-events-none"
              :style="{
                opacity: openedAlbum === category.id ? 0 : 1,
                color: category.couleur
              }"
            >
              <i :class="category.icon" class="tw-text-4xl tw-mb-2"></i>
              <h3 class="tw-text-lg tw-font-bold tw-uppercase tw-text-white tw-tracking-wider">
                {{ category.categorie }}
              </h3>
              <p class="tw-mt-2 tw-text-xs tw-text-slate-300">{{ category.images.length }} images</p>
            </div>
          </div>

          <!-- Popup galerie déployée (visible au survol) -->
          <transition name="popup-fade">
            <div
              v-if="openedAlbum === category.id"
              class="tw-fixed tw-inset-0 tw-z-40 tw-flex tw-items-center tw-justify-center tw-bg-black/50 tw-backdrop-blur-sm"
              @click="openedAlbum = null"
            >
              <!-- Modal -->
              <div
                class="tw-relative tw-max-h-[90vh] tw-max-w-2xl tw-w-full tw-mx-4 tw-rounded-2xl tw-border tw-border-emerald-500/40 tw-bg-slate-900/40 tw-p-6 tw-backdrop-blur-md tw-transition-all tw-duration-700"
                @click.stop
              >
                <!-- En-tête déployé -->
                <div class="tw-flex tw-items-center tw-justify-between tw-mb-6 tw-pb-4 tw-border-b tw-border-slate-700/50">
                  <div class="tw-flex tw-items-center tw-gap-3">
                    <span
                      class="tw-inline-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-lg tw-bg-slate-800"
                      :style="{ color: category.couleur }"
                    >
                      <i :class="category.icon" class="tw-text-lg"></i>
                    </span>
                    <h3 class="tw-text-xl tw-font-bold tw-uppercase tw-text-white tw-tracking-wider">
                      {{ category.categorie }}
                    </h3>
                  </div>
                  <button
                    @click="openedAlbum = null"
                    class="tw-inline-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-lg tw-bg-slate-800 tw-text-slate-300 tw-transition hover:tw-bg-slate-700 hover:tw-text-white"
                  >
                    <i class="bi bi-x tw-text-lg"></i>
                  </button>
                </div>

                <!-- Grille d'images dans le popup -->
                <div class="tw-grid tw-gap-4 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-overflow-y-auto tw-max-h-[calc(90vh-150px)]">
                  <div
                    v-for="(image, idx) in category.images"
                    :key="image.id"
                    class="tw-group tw-overflow-hidden tw-rounded-lg tw-border tw-border-emerald-500/20 tw-bg-slate-800 tw-transition-all tw-duration-500"
                    :style="{
                      animation: openedAlbum === category.id ? `slideIn 0.6s ease-out ${idx * 0.1}s backwards` : 'none'
                    }"
                  >
                    <div class="tw-relative tw-aspect-square tw-overflow-hidden">
                      <img
                        :src="image.src"
                        :alt="image.alt"
                        class="tw-h-full tw-w-full tw-object-cover tw-transition group-hover:tw-scale-110"
                      />
                      <!-- Overlay au survol -->
                      <div class="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black/50 tw-opacity-0 tw-transition group-hover:tw-opacity-100">
                        <button
                          @click="zoomImage(image, category.id, idx)"
                          class="tw-inline-flex tw-items-center tw-justify-center tw-rounded-lg tw-bg-white/10 tw-p-3 tw-backdrop-blur tw-transition hover:tw-bg-white/20"
                          title="Agrandir"
                        >
                          <i class="bi bi-zoom-in tw-text-lg" :style="{ color: category.couleur }"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Modal Zoom -->
      <transition name="zoom-fade">
        <div
          v-if="zoomedImage"
          class="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black/80 tw-backdrop-blur-md"
          @click="zoomedImage = null"
        >
          <div
            class="tw-relative tw-max-h-100 tw-max-w-md tw-w-full tw-mx-4 tw-rounded-2xl tw-overflow-hidden"
            @click.stop
          >
            <!-- Image zoomée -->
            <img
              :src="zoomedImage.src"
              :alt="zoomedImage.alt"
              class="tw-h-full tw-w-full tw-object-contain"
            />

            <!-- Bouton fermer -->
            <button
              @click="zoomedImage = null"
              class="tw-absolute tw-top-4 tw-right-4 tw-inline-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-lg tw-bg-black/50 tw-text-white tw-transition hover:tw-bg-black/70"
            >
              <i class="bi bi-x tw-text-xl"></i>
            </button>

            <!-- Bouton navigation gauche -->
            <button
              @click="previousImage"
              class="tw-absolute tw-left-4 tw-top-1/2 tw--translate-y-1/2 tw-inline-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-lg tw-bg-black/50 tw-text-white tw-transition hover:tw-bg-black/70"
              title="Image précédente"
            >
              <i class="bi bi-chevron-left tw-text-xl"></i>
            </button>

            <!-- Bouton navigation droite -->
            <button
              @click="nextImage"
              class="tw-absolute tw-right-4 tw-top-1/2 tw--translate-y-1/2 tw-inline-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-lg tw-bg-black/50 tw-text-white tw-transition hover:tw-bg-black/70"
              title="Image suivante"
            >
              <i class="bi bi-chevron-right tw-text-xl"></i>
            </button>

            <!-- Info image -->
            <div class="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-bg-gradient-to-t tw-from-black/80 tw-to-transparent tw-p-4">
              <p class="tw-text-sm tw-text-slate-300">{{ zoomedImage.alt }}</p>
            </div>
          </div>

        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped>
/* Animations pour les albums */
.tw-perspective {
  perspective: 1000px;
}

/* Animation popup fade */
.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity 0.3s ease;
}

.popup-fade-enter-from,
.popup-fade-leave-to {
  opacity: 0;
}

/* Animation zoom fade */
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: opacity 0.3s ease;
}

.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
}

.zoom-fade-enter-active img {
  animation: zoomIn 0.4s ease-out;
}

.zoom-fade-leave-active img {
  animation: zoomOut 0.4s ease-in;
}

/* Animation de glissement des images */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Animations de zoom */
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
}
</style>