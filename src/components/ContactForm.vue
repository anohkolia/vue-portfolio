<script setup>
import { nextTick, reactive, ref } from 'vue'
import { profile, socials } from '@/data/portfolio'
import { buildMailtoLink, isEmailServiceConfigured, sendContactMessage } from '@/services/contact'

const emptyForm = () => ({ name: '', email: '', phone: '', subject: '', message: '' })
const form = reactive(emptyForm())
// Champ piège invisible : seuls les robots le remplissent
const honeypot = ref('')

const errors = ref({})
const submitted = ref(false)
const sending = ref(false)
// { type: 'success' | 'error' | 'info', text, mailto? }
const status = ref(null)
const copied = ref(false)
const formEl = ref(null)

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const validate = () => {
  const next = {}
  if (!form.name.trim()) next.name = 'Indiquez votre nom.'
  if (!form.email.trim()) next.email = 'Indiquez votre adresse e-mail.'
  else if (!isValidEmail(form.email.trim())) next.email = 'Cette adresse e-mail ne semble pas valide.'
  if (!form.subject.trim()) next.subject = "Indiquez l'objet de votre message."
  if (!form.message.trim()) next.message = 'Écrivez votre message.'
  errors.value = next
  return Object.keys(next).length === 0
}

// Après une première tentative, les erreurs se mettent à jour pendant la saisie
const revalidate = () => {
  if (submitted.value) validate()
}

const trimmedValues = () =>
  Object.fromEntries(Object.entries(form).map(([key, value]) => [key, value.trim()]))

const onSent = (name) => {
  Object.assign(form, emptyForm())
  submitted.value = false
  errors.value = {}
  status.value = {
    type: 'success',
    text: `Merci ${name.split(/\s+/)[0]} ! Votre message a bien été envoyé, je vous réponds au plus vite.`,
  }
}

const submit = async () => {
  if (sending.value) return
  submitted.value = true
  status.value = null

  if (!validate()) {
    await nextTick()
    formEl.value?.querySelector('[aria-invalid="true"]')?.focus()
    return
  }

  const values = trimmedValues()
  const mailto = buildMailtoLink(profile.email, values)

  // EmailJS non configuré : la messagerie du visiteur s'ouvre avec le message pré-rempli
  if (!isEmailServiceConfigured) {
    if (import.meta.env.DEV) console.warn('[contact] EmailJS non configuré (voir .env.example) : repli sur mailto.')
    window.location.href = mailto
    status.value = {
      type: 'info',
      text: "Votre messagerie va s'ouvrir avec le message pré-rempli : il ne reste plus qu'à l'envoyer.",
    }
    return
  }

  // Robot détecté : on simule un succès sans rien envoyer
  if (honeypot.value) {
    onSent(values.name)
    return
  }

  sending.value = true
  try {
    await sendContactMessage(values)
    onSent(values.name)
  } catch (error) {
    if (import.meta.env.DEV) console.error('[contact] Échec de l\'envoi EmailJS', error)
    status.value = {
      type: 'error',
      text: navigator.onLine === false
        ? "Vous semblez hors ligne : le message n'a pas pu partir. Réessayez une fois connecté, ou envoyez-le depuis votre messagerie."
        : "Le message n'a pas pu être envoyé. Réessayez dans un instant, ou envoyez-le depuis votre messagerie.",
      mailto,
    }
  } finally {
    sending.value = false
  }
}

const statusStyles = {
  success: { box: 'tw-border-emerald-300/30 tw-bg-emerald-400/10 tw-text-emerald-100', icon: 'bi bi-check-circle-fill tw-text-emerald-300' },
  info: { box: 'tw-border-cyan-300/30 tw-bg-cyan-400/10 tw-text-cyan-50', icon: 'bi bi-envelope-open-fill tw-text-cyan-300' },
  error: { box: 'tw-border-rose-300/30 tw-bg-rose-500/10 tw-text-rose-100', icon: 'bi bi-exclamation-triangle-fill tw-text-rose-300' },
}

const [emailLocal, emailDomain] = profile.email.split('@')

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    window.location.href = `mailto:${profile.email}`
  }
}

const describedBy = (field) => (errors.value[field] ? `${field}-error` : undefined)
</script>

<template>
  <section id="contact" class="section tw-pb-20 sm:tw-pb-24 lg:tw-pb-32" aria-labelledby="contact-title">
    <div class="container-page">
      <div v-reveal class="contact-panel tw-relative tw-overflow-hidden tw-rounded-3xl tw-p-[1px]">
        <div class="tw-relative tw-grid tw-gap-10 tw-rounded-[calc(1.5rem-1px)] tw-bg-slate-950/90 tw-p-5 xs:tw-p-6 sm:tw-p-8 lg:tw-p-12 xl:tw-grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:tw-gap-14">
          <!-- Coordonnées -->
          <div>
            <p class="eyebrow">
              <span class="tw-font-display tw-text-slate-500">07</span>
              <span class="tw-h-px tw-w-6 tw-bg-emerald-300/50" aria-hidden="true"></span>
              Contact
            </p>
            <h2 id="contact-title" class="tw-mt-3 tw-text-3xl tw-font-semibold sm:tw-text-4xl lg:tw-text-[2.75rem] lg:tw-leading-tight">
              Travaillons <span class="text-gradient">ensemble</span>
            </h2>
            <p class="tw-mt-4 tw-text-base tw-leading-relaxed tw-text-slate-400 sm:tw-text-lg">
              Vous recherchez un alternant motivé pour votre équipe ? Écrivez-moi, je vous réponds rapidement.
            </p>

            <ul class="tw-mt-8 tw-grid tw-gap-3 md:tw-grid-cols-2 xl:tw-grid-cols-1">
              <li class="contact-row md:tw-col-span-2 xl:tw-col-span-1">
                <span class="icon-tile tw-h-11 tw-w-11 tw-text-lg"><i class="bi bi-envelope-fill" aria-hidden="true"></i></span>
                <span class="tw-min-w-0 tw-flex-1">
                  <span class="tw-block tw-text-xs tw-text-slate-500">E-mail</span>
                  <!-- Si l'adresse ne tient pas sur une ligne, elle passe à la ligne avant le « @ » -->
                  <a :href="`mailto:${profile.email}`" class="tw-block tw-break-words tw-text-sm tw-font-medium tw-text-white hover:tw-text-emerald-200 sm:tw-text-base">
                    {{ emailLocal }}<wbr>@{{ emailDomain }}
                  </a>
                </span>
                <button
                  type="button"
                  class="icon-btn tw-h-10 tw-w-10"
                  :aria-label="copied ? 'Adresse copiée' : 'Copier l\'adresse e-mail'"
                  @click="copyEmail"
                >
                  <i :class="copied ? 'bi bi-check2 tw-text-emerald-300' : 'bi bi-copy'" aria-hidden="true"></i>
                </button>
              </li>
              <li class="contact-row">
                <span class="icon-tile tw-h-11 tw-w-11 tw-text-lg"><i class="bi bi-telephone-fill" aria-hidden="true"></i></span>
                <span class="tw-min-w-0 tw-flex-1">
                  <span class="tw-block tw-text-xs tw-text-slate-500">Téléphone</span>
                  <a :href="`tel:${profile.phone}`" class="tw-block tw-text-sm tw-font-medium tw-text-white hover:tw-text-emerald-200 sm:tw-text-base">
                    {{ profile.phoneLabel }}
                  </a>
                </span>
              </li>
              <li class="contact-row">
                <span class="icon-tile tw-h-11 tw-w-11 tw-text-lg"><i class="bi bi-geo-alt-fill" aria-hidden="true"></i></span>
                <span class="tw-min-w-0 tw-flex-1">
                  <span class="tw-block tw-text-xs tw-text-slate-500">Localisation</span>
                  <span class="tw-block tw-text-sm tw-font-medium tw-text-white sm:tw-text-base">{{ profile.location }}</span>
                </span>
              </li>
            </ul>

            <div class="tw-mt-6 tw-flex tw-flex-wrap tw-gap-2">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost tw-flex-1 xs:tw-flex-none"
              >
                <i :class="social.icon" aria-hidden="true"></i>
                {{ social.name }}
              </a>
            </div>

            <p class="tw-sr-only" aria-live="polite">{{ copied ? 'Adresse e-mail copiée dans le presse-papiers' : '' }}</p>
          </div>

          <!-- Formulaire -->
          <form ref="formEl" class="tw-space-y-5" novalidate @submit.prevent="submit">
            <div class="tw-grid tw-gap-5 sm:tw-grid-cols-2">
              <div>
                <label for="contact-name" class="label">Nom complet</label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  autocomplete="name"
                  enterkeyhint="next"
                  class="field"
                  :readonly="sending"
                  placeholder="Jeanne Dupont"
                  :aria-invalid="Boolean(errors.name)"
                  :aria-describedby="describedBy('name')"
                  @input="revalidate"
                >
                <p v-if="errors.name" id="name-error" class="error"><i class="bi bi-exclamation-circle" aria-hidden="true"></i>{{ errors.name }}</p>
              </div>

              <div>
                <label for="contact-email" class="label">E-mail</label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  inputmode="email"
                  autocomplete="email"
                  autocapitalize="off"
                  spellcheck="false"
                  enterkeyhint="next"
                  class="field"
                  :readonly="sending"
                  placeholder="jeanne@entreprise.fr"
                  :aria-invalid="Boolean(errors.email)"
                  :aria-describedby="describedBy('email')"
                  @input="revalidate"
                >
                <p v-if="errors.email" id="email-error" class="error"><i class="bi bi-exclamation-circle" aria-hidden="true"></i>{{ errors.email }}</p>
              </div>

              <div>
                <label for="contact-phone" class="label">
                  Téléphone <span class="tw-font-normal tw-text-slate-500">(optionnel)</span>
                </label>
                <input
                  id="contact-phone"
                  v-model="form.phone"
                  type="tel"
                  inputmode="tel"
                  autocomplete="tel"
                  enterkeyhint="next"
                  class="field"
                  :readonly="sending"
                  placeholder="06 12 34 56 78"
                >
              </div>

              <div>
                <label for="contact-subject" class="label">Objet</label>
                <input
                  id="contact-subject"
                  v-model="form.subject"
                  type="text"
                  enterkeyhint="next"
                  class="field"
                  :readonly="sending"
                  placeholder="Proposition d'alternance"
                  :aria-invalid="Boolean(errors.subject)"
                  :aria-describedby="describedBy('subject')"
                  @input="revalidate"
                >
                <p v-if="errors.subject" id="subject-error" class="error"><i class="bi bi-exclamation-circle" aria-hidden="true"></i>{{ errors.subject }}</p>
              </div>
            </div>

            <div>
              <label for="contact-message" class="label">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                rows="5"
                class="field tw-min-h-[8.5rem] tw-resize-y"
                :readonly="sending"
                placeholder="Bonjour Kolia, …"
                :aria-invalid="Boolean(errors.message)"
                :aria-describedby="describedBy('message')"
                @input="revalidate"
              ></textarea>
              <p v-if="errors.message" id="message-error" class="error"><i class="bi bi-exclamation-circle" aria-hidden="true"></i>{{ errors.message }}</p>
            </div>

            <div data-fab-avoid>
              <div class="tw-flex tw-flex-col tw-gap-4 sm:tw-flex-row sm:tw-items-center sm:tw-justify-between">
                <p class="tw-text-xs tw-text-slate-500">
                  <i class="bi bi-shield-lock tw-mr-1" aria-hidden="true"></i>
                  {{
                    isEmailServiceConfigured
                      ? 'Vos coordonnées servent uniquement à vous répondre.'
                      : "Envoi via votre messagerie — aucune donnée n'est stockée."
                  }}
                </p>
                <!-- aria-disabled plutôt que disabled : le bouton garde le focus pendant l'envoi -->
                <button
                  type="submit"
                  class="btn btn-primary tw-w-full tw-px-7 aria-disabled:tw-cursor-wait aria-disabled:tw-opacity-80 sm:tw-w-auto"
                  :aria-disabled="sending ? 'true' : undefined"
                >
                  <template v-if="sending">
                    <span class="tw-h-4 tw-w-4 tw-animate-spin tw-rounded-full tw-border-2 tw-border-slate-950/25 tw-border-t-slate-950" aria-hidden="true"></span>
                    Envoi en cours…
                  </template>
                  <template v-else>
                    Envoyer le message
                    <i class="bi bi-send-fill" aria-hidden="true"></i>
                  </template>
                </button>
              </div>

              <!-- Région annoncée par les lecteurs d'écran : présente en permanence, remplie au besoin -->
              <div aria-live="polite">
                <div
                  v-if="status"
                  class="tw-mt-5 tw-flex tw-items-start tw-gap-3 tw-rounded-xl tw-border tw-p-4 tw-text-sm"
                  :class="statusStyles[status.type].box"
                >
                  <i class="tw-mt-0.5" :class="statusStyles[status.type].icon" aria-hidden="true"></i>
                  <div class="tw-min-w-0">
                    <p>{{ status.text }}</p>
                    <a
                      v-if="status.mailto"
                      :href="status.mailto"
                      class="tw-mt-2 tw-inline-flex tw-items-center tw-gap-1.5 tw-font-semibold tw-text-white tw-underline tw-decoration-white/30 tw-underline-offset-4 hover:tw-decoration-white"
                    >
                      Ouvrir ma messagerie
                      <i class="bi bi-arrow-up-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Champ piège anti-spam : invisible et ignoré par le clavier et les lecteurs d'écran -->
            <div class="tw-absolute tw--left-[9999px] tw-h-px tw-w-px tw-overflow-hidden" aria-hidden="true">
              <label for="contact-website">Ne pas remplir ce champ</label>
              <input id="contact-website" v-model="honeypot" type="text" name="website" tabindex="-1" autocomplete="off">
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Bordure en dégradé autour du bloc contact */
.contact-panel {
  background:
    linear-gradient(135deg, rgba(52, 211, 153, 0.55), rgba(255, 255, 255, 0.06) 40%, rgba(255, 255, 255, 0.06) 60%, rgba(34, 211, 238, 0.5));
  box-shadow: 0 40px 80px -40px rgba(16, 185, 129, 0.35);
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
  padding: 0.75rem;
}

.label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #e2e8f0;
}

.error {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 0.5rem;
  font-size: 0.8125rem;
  color: #fda4af;
}
</style>
