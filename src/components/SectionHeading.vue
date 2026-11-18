<script setup>
defineProps({
  index: { type: String, required: true },
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  id: { type: String, default: undefined },
})
</script>

<template>
  <header v-reveal class="tw-max-w-2xl">
    <p class="eyebrow">
      <span class="tw-font-display tw-text-slate-500">{{ index }}</span>
      <span class="tw-h-px tw-w-6 tw-bg-emerald-300/50" aria-hidden="true"></span>
      {{ eyebrow }}
    </p>
    <h2 :id="id" class="tw-mt-3 tw-text-3xl tw-font-semibold sm:tw-text-4xl lg:tw-text-[2.75rem] lg:tw-leading-tight">
      {{ title }}
    </h2>
    <p v-if="description" class="tw-mt-3 tw-text-base tw-text-slate-400 sm:tw-text-lg">
      {{ description }}
    </p>
  </header>
</template>
