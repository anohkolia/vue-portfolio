<template>
  <main class="tw-flex tw-min-h-screen tw-items-center tw-justify-center tw-px-6 tw-pt-24 lg:tw-pl-[22rem] lg:tw-pt-8">
    <section class="content-section portfolio-card tw-w-full tw-max-w-xl tw-border-rose-400/40 tw-p-8 tw-text-center">
      <p class="tw-text-sm tw-font-semibold tw-uppercase tw-tracking-[0.2em] tw-text-rose-300">Erreur</p>
      <h1 class="tw-mt-3 tw-text-4xl tw-font-bold tw-text-white">404</h1>
      <p class="tw-mt-4 tw-text-slate-300">La page demandée est introuvable.</p>
      <RouterLink
        to="/"
        class="tw-mt-6 tw-inline-flex tw-items-center tw-gap-2 tw-rounded-lg tw-bg-emerald-500 tw-px-5 tw-py-2.5 tw-font-semibold tw-text-white tw-transition hover:tw-bg-emerald-400"
      >
        <i class="bi bi-arrow-left"></i>
        Retour à l'accueil
      </RouterLink>
    </section>
  </main>
</template>
