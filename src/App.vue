<script setup>
/* import { RouterLink, RouterView } from 'vue-router' */
import HeaderNavbar from './components/HeaderNavbar.vue'

// Sélectionne l'élément avec l'ID "cursor" et le stocke dans la variable cursor
const cursor = document.getElementById("cursor");
// Ajoute un écouteur d'événements pour le mouvement de la souris sur l'élément body du document
document.body.addEventListener("mousemove", function (e) {
  // Déplace l'élément avec l'ID "cursor" à la position de la souris
  (cursor.style.left = e.clientX - 10 + "px"),
    (cursor.style.top = e.clientY - 10 + "px");
});

// Ajoute un écouteur d'événements pour le clic sur le document
document.addEventListener("click", function () {
  cursor.classList.add("bulle");

  setTimeout(function () {
    cursor.classList.remove("bulle");
  }, 500);
});

</script>

<template>
  <HeaderNavbar />
  
  <RouterView />
</template>

<style scoped>


@media (min-width: 1024px) {
  
}
</style>
