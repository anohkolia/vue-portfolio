<script setup>
import { brandIcons } from '@/data/brandIcons'

defineProps({
  // Nom simple-icons (prioritaire) ex. "vuedotjs"
  brand: { type: String, default: '' },
  // Classe Bootstrap Icons de repli ex. "bi bi-brush-fill"
  icon: { type: String, default: '' },
})
</script>

<template>
  <svg
    v-if="brand && brandIcons[brand]"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    class="tw-h-[1em] tw-w-[1em]"
  >
    <path :d="brandIcons[brand]" />
  </svg>
  <i v-else :class="icon" aria-hidden="true"></i>
</template>
