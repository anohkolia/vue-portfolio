<script>
export default {
  name: 'App',
};
</script>

<template>
  <header id="header">
    <!--Barre de navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger mt-auto" href="#page-top">
        <span class="d-block d-lg-none d-flex align-items-center pe-2"><img class="img-fluid profile-mobile" src="/src/assets/profile.jpg" alt="Profile"></span>
        <span class="d-block d-lg-none">Kolia ANOH</span>
        <span class="d-none d-lg-block"><img class="img-fluid img-profile mb-2" src="/src/assets/profile.jpg" alt="Profile"></span>
      </a>

      <!--Bouton de navigation pour les petits écrans-->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="ms-5"><a class="align-items-center d-flex gap-2  nav-link js-scroll-trigger" href="#about"><i class="bi bi-person fs-3"></i> À propos</a></li>
                    <li class="ms-5"><a class="align-items-center d-flex gap-2 nav-link js-scroll-trigger" href="#experience"><i class="bi bi-patch-check fs-4"></i> Expérience</a></li>
                    <li class="ms-5"><a class="align-items-center d-flex gap-2 nav-link js-scroll-trigger" href="#formation"><i class="bi bi-journals fs-4"></i> Formation</a></li>
                    <li class="ms-5"><a class="align-items-center d-flex gap-2 nav-link js-scroll-trigger" href="#skills"><i class="bi bi-stars fs-4"></i> Compétences</a></li>
                    <li class="ms-5"><a class="align-items-center d-flex gap-2 nav-link js-scroll-trigger" href="#hobbie"><i class="bi bi-emoji-smile fs-4"></i> Hobbies</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style>

</style>
