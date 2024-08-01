<script setup>
import Apropos from '@/components/Apropos.vue';
import Competence from '@/components/Competence.vue';
import ContactForm from '@/components/ContactForm.vue';
import Experience from '@/components/Experience.vue';
import Formation from '@/components/Formation.vue';
import Hobbie from '@/components/Hobbie.vue';


</script>

<template>
  <main>
    <Apropos />
    <Experience />
    <Formation />
    <Competence />
    <Hobbie />
    <ContactForm />
    <!--Rétour en haut de la page-->
    <!-- <a class="btn btn-success btn-floating" href="#page-top" id="btn-back-to-top"><i class="fas fa-angle-up"></i></a> -->
    <button class=" btn btn-success btn-floating" id="btn-back-to-top"><i class="fa-solid fa-arrow-up"></i></button>
  </main>
</template>
