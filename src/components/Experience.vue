<script setup>
  const experiences = {
    experience1: {
      titre: 'Projet agile (en équipe)',
      entreprise: 'Université de Rennes',
      contenu: 'Conception et développement d’une application permettant d’analyser et de présenter des statistiques sur les stations-service françaises.\n' +
          '- Technologie utilisée : Java, Swing\n' +
          '- Versioning avec GitLab\n' +
          '- Gestion du projet avec l’outil Trello',
      date: 'Février 2024 à mai 2024'
    },
    experience2: {
      titre: 'Projet de soutenance licence (en équipe)',
      entreprise: 'Université Virtuelle de Côte dIvoire',
      contenu: 'Conception et développement de Portail de gestion d’une communauté.\n' +
          '- Technologie utilisée : HTML, CSS, Bootstrap, JavaScript, PHP, MySQL\n' +
          '- Versioning avec GitHub\n' +
          '- Gestion du projet avec Ms Project',
      date: 'Juin 2023 à septembre 2023'
    },
    experience3: {
      titre: 'Freelance',
      entreprise: 'Freelance',
      contenu: '• Installation de Systèmes d’exploitation, maintenance d’ordinateur\n' +
          '• Formation sur des logiciels bureautique (Word-Excel-PowerPoint)\n' +
          '• Rédaction et traitement de document, numérisation, impression...\n' +
          '• Community manager (Création et gestion de page Facebook)\n' +
          '• Conception de Charte Graphique pour entreprises et particuliers (Logo, Badge, flyers…) ',
      date: '2022'
    }
  }
</script>

<template>
  <section class="resume-section">
    <div class="resume-section-content">
      <h2 class="fw-bold text-uppercase text-success mb-5"><i class="bi bi-patch-check me-2"></i>Expérience</h2>

      <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
        <div class="flex-grow-1" v-for="experience in experiences">
          <h3 class="fw-semibold text-uppercase mb-0">{{ experience.titre }}</h3>
          <div class="titre mb-3">{{ experience.entreprise }}</div>
          <p class="lead">{{ experience.contenu }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>