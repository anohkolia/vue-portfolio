<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { hobbies } from '@/data/portfolio'
</script>

<template>
  <section id="hobbie" class="section" aria-labelledby="hobbie-title">
    <div class="container-page">
      <SectionHeading
        id="hobbie-title"
        index="06"
        eyebrow="Hobbies"
        title="Centres d'intérêt"
        description="Ce qui m'anime en dehors du code."
      />

      <ul class="tw-mt-10 tw-grid tw-gap-4 sm:tw-mt-12 sm:tw-grid-cols-2 lg:tw-grid-cols-3 lg:tw-gap-5">
        <li
          v-for="(hobbie, index) in hobbies"
          :key="hobbie.id"
          v-reveal="index * 100"
          class="card card-interactive tw-group tw-overflow-hidden tw-p-5 sm:tw-p-6"
          :class="{ 'sm:tw-col-span-2 lg:tw-col-span-1': index === hobbies.length - 1 && hobbies.length % 2 === 1 }"
        >
          <span
            class="tw-pointer-events-none tw-absolute tw--right-10 tw--top-10 tw-h-32 tw-w-32 tw-rounded-full tw-bg-emerald-400/10 tw-blur-2xl tw-transition tw-duration-500 group-hover:tw-bg-cyan-400/20"
            aria-hidden="true"
          ></span>
          <span class="icon-tile tw-h-12 tw-w-12 tw-text-xl">
            <i :class="hobbie.icon" aria-hidden="true"></i>
          </span>
          <h3 class="tw-mt-4 tw-text-lg tw-font-semibold">{{ hobbie.title }}</h3>
          <p class="tw-mt-2 tw-text-[0.9375rem] tw-leading-relaxed tw-text-slate-400">{{ hobbie.content }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
