<template>
  <main id="contenu" tabindex="-1" class="tw-flex tw-min-h-[100svh] tw-items-center tw-justify-center tw-px-4 tw-pb-16 tw-pt-32 tw-outline-none lg:tw-pt-16">
    <section class="card tw-w-full tw-max-w-xl tw-p-8 tw-text-center sm:tw-p-10">
      <p class="eyebrow tw-text-rose-300">Erreur 404</p>
      <h1 class="tw-mt-4 tw-font-display tw-text-7xl tw-font-bold sm:tw-text-8xl">
        <span class="text-gradient">404</span>
      </h1>
      <p class="tw-mt-4 tw-text-lg tw-text-white">Cette page est introuvable.</p>
      <p class="tw-mt-2 tw-text-slate-400">Le lien est peut-être cassé ou la page a été déplacée.</p>
      <RouterLink to="/" class="btn btn-primary tw-mt-8">
        <i class="bi bi-arrow-left" aria-hidden="true"></i>
        Retour à l'accueil
      </RouterLink>
    </section>
  </main>
</template>
