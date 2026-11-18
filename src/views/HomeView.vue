<script setup>
import Apropos from '@/components/Apropos.vue'
import BackToTop from '@/components/BackToTop.vue'
import Competence from '@/components/Competence.vue'
import ContactForm from '@/components/ContactForm.vue'
import Experience from '@/components/Experience.vue'
import Formation from '@/components/Formation.vue'
import Hobbie from '@/components/Hobbie.vue'
import Project from '@/components/Project.vue'
</script>

<template>
  <main id="contenu" tabindex="-1" class="tw-relative tw-outline-none">
    <Apropos />
    <Competence />
    <Project />
    <Experience />
    <Formation />
    <Hobbie />
    <ContactForm />
  </main>
  <BackToTop />
</template>
