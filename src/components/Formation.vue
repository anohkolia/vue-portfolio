<script setup>
const formations = {
  formation1: {
    titre: 'Bachelor en Développement Informatique',
    ecole: 'Sup de vinci, rennes',
    contenu: 'Spécialité : Développement web',
    date: '2023 - 2024'
  },
  formation2: {
    titre: 'Licences 2 en ISTN',
    ecole: 'Université de Rennes 1',
    contenu: 'Informatique, Sciences et Technologies du Numérique',
    date: '2023 - 2024'
  },

  formation3: {
    titre: 'Certification',
    ecole: 'Université Virtuelle de Côte d\'Ivoire',
    contenu: 'Développement Web et Mobile',
    date: '2023'
  },

  formation4: {
    titre: 'Licence en Informatique et Sciences du Numérique',
    ecole: 'Université Virtuelle de Côte d\'Ivoire',
    contenu: 'Spécialité : Développement d\'application et e-Services',
    date: '2020 - 2023'
  },

    formation5: {
        titre: 'Baccalauréat série D',
        ecole: 'Collège Moderne CHRIST-ROI, Bonoua (CI)',
        date: '2019 - 2020'
    }
}

</script>

<template>
    <!--Formation-->
    <section class="resume-section">
        <div class="resume-section-content box">
            <h2 class="fw-bold text-uppercase text-success mb-4"><i class="bi bi-journals me-2"></i> Formation</h2>

            <div class="d-flex flex-column justify-content-between mb-4">
                <div class="flex-grow-1" v-for="formation in formations">
                    <div class="flex-shreck-0"><span class="text-success">{{ formation.date }}</span></div>
                    <h3 class="fw-semibold text-uppercase mb-0">{{ formation.titre }}</h3>
                    <div class="titre mb-2">{{ formation.ecole }}</div>
                    <p class="lead">{{ formation.contenu }}</p>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>

</style>