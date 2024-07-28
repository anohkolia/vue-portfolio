<script setup>
const hobbies = {
  hobbie1: {
    titre: 'INFORMATIQUE',
    contenu: 'Manipulation d\'outils informatiques, je suis souvent l\'actualité sur les technologies'
    },
  hobbie2: {
    titre: 'JEUX Vidéo',
    contenu: 'Je joue souvent à des jeux FPS, Aventure, Arcade, stratégie'
  },
  hobbie3: {
    titre: 'TRADING',
    contenu: 'Je suis un certains nombre de tuto et certains site pour apprend à lire les courbes et à étudier le marché'
  }

}

</script>

<template>
    <!--Hobbies-->
    <section class="resume-section" id="hobbie">
        <div class="resume-section-content box">
            <h2 class="fw-bold text-uppercase text-success mb-4"><i class="bi bi-journals me-2"></i> Hobbies</h2>

            <div class="d-flex flex-column justify-content-between mb-4">
                <div class="flex-grow-1" v-for="hobbie in hobbies">
                    <h3 class="fw-semibold text-uppercase mb-0">{{ hobbie.titre }}</h3>
                    <p class="lead">{{ hobbie.contenu }}</p>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>

</style>