<template>
  <main id="contenu" tabindex="-1" class="tw-flex tw-min-h-[100svh] tw-items-center tw-justify-center tw-px-4 tw-pb-16 tw-pt-32 tw-outline-none lg:tw-pt-16">
    <section class="card tw-w-full tw-max-w-xl tw-p-8 tw-text-center sm:tw-p-10">
      <span class="icon-tile tw-mx-auto tw-h-14 tw-w-14 tw-text-2xl">
        <i class="bi bi-person" aria-hidden="true"></i>
      </span>
      <h1 class="tw-mt-6 tw-text-3xl tw-font-semibold">À propos</h1>
      <p class="tw-mt-3 tw-text-slate-400">
        Cette page est en cours de préparation. Retrouvez l'essentiel de mon profil sur la page d'accueil.
      </p>
      <RouterLink :to="{ name: 'home', hash: '#about' }" class="btn btn-primary tw-mt-8">
        <i class="bi bi-house-door-fill" aria-hidden="true"></i>
        Ouvrir le portfolio
      </RouterLink>
    </section>
  </main>
</template>
