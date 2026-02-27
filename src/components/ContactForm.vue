<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const errors = ref({})
const isSubmitting = ref(false)
const showSuccess = ref(false)

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const validateForm = () => {
  errors.value = {}

  if (!formData.value.name.trim()) {
    errors.value.name = 'Le nom est requis'
  }

  if (!formData.value.email.trim()) {
    errors.value.email = "L'email est requis"
  } else if (!isValidEmail(formData.value.email)) {
    errors.value.email = 'Veuillez entrer un email valide'
  }

  if (!formData.value.subject.trim()) {
    errors.value.subject = "L'objet est requis"
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Le message est requis'
  }

  return Object.keys(errors.value).length === 0
}

const sendMail = () => {
  if (!validateForm()) return

  isSubmitting.value = true

  setTimeout(() => {
    const mailto = `mailto:contact.anohkolia@gmail.com?subject=${formData.value.subject}&body=Je%20suis%20%3A%20${formData.value.name}%0AVoici%20mon%20mail%20%3A%20${formData.value.email}${formData.value.phone ? '%0AVoici%20mon%20téléphone%20%3A%20' + formData.value.phone : ''}%0A%0A${formData.value.message}`

    window.location.href = mailto

    showSuccess.value = true
    isSubmitting.value = false

    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    }

    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  }, 800)
}

const inputClasses = (field) => {
  const base =
    'tw-w-full tw-rounded-xl tw-border tw-bg-slate-800/70 tw-px-4 tw-py-3 tw-text-sm tw-text-white tw-outline-none tw-transition placeholder:tw-text-slate-500 focus:tw-ring-2'

  if (errors.value[field]) {
    return `${base} tw-border-rose-500/80 focus:tw-border-rose-400 focus:tw-ring-rose-500/30`
  }

  if (formData.value[field]) {
    return `${base} tw-border-emerald-400/70 focus:tw-border-emerald-400 focus:tw-ring-emerald-500/30`
  }

  return `${base} tw-border-emerald-500/30 focus:tw-border-emerald-400 focus:tw-ring-emerald-500/30`
}
</script>

<template>
  <section id="contact" class="content-section tw-scroll-mt-24 lg:tw-scroll-mt-8">
    <div class="portfolio-card tw-p-6 sm:tw-p-8">
      <h2 class="section-title">
        <i class="bi bi-envelope-at"></i>
        Contact
      </h2>

      <div
        v-if="showSuccess"
        class="tw-mt-5 tw-flex tw-items-start tw-gap-3 tw-rounded-xl tw-border tw-border-emerald-400/40 tw-bg-emerald-500/15 tw-p-4 tw-text-emerald-100"
      >
        <i class="bi bi-check-circle-fill tw-mt-0.5 tw-text-lg"></i>
        <span class="tw-text-sm">Message envoyé avec succès. Je vous répondrai sous peu.</span>
      </div>

      <form class="tw-mt-6 tw-space-y-5" @submit.prevent="sendMail">
        <div class="tw-grid tw-gap-5 md:tw-grid-cols-2">
          <div>
            <label for="name" class="tw-mb-2 tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-medium tw-text-slate-200">
              <i class="bi bi-person-fill tw-text-emerald-300"></i>
              Nom complet
            </label>
            <input id="name" v-model="formData.name" type="text" :class="inputClasses('name')" placeholder="Votre nom...">
            <p v-if="errors.name" class="tw-mt-1 tw-text-xs tw-text-rose-300">{{ errors.name }}</p>
          </div>

          <div>
            <label for="email" class="tw-mb-2 tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-medium tw-text-slate-200">
              <i class="bi bi-envelope-fill tw-text-emerald-300"></i>
              Email
            </label>
            <input id="email" v-model="formData.email" type="email" :class="inputClasses('email')" placeholder="Votre email">
            <p v-if="errors.email" class="tw-mt-1 tw-text-xs tw-text-rose-300">{{ errors.email }}</p>
          </div>
        </div>

        <div class="tw-grid tw-gap-5 md:tw-grid-cols-2">
          <div>
            <label for="phone" class="tw-mb-2 tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-medium tw-text-slate-200">
              <i class="bi bi-phone-fill tw-text-emerald-300"></i>
              Téléphone (optionnel)
            </label>
            <input id="phone" v-model="formData.phone" type="tel" :class="inputClasses('phone')" placeholder="Votre numéro de téléphone">
          </div>

          <div>
            <label for="subject" class="tw-mb-2 tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-medium tw-text-slate-200">
              <i class="bi bi-tag-fill tw-text-emerald-300"></i>
              Objet
            </label>
            <input id="subject" v-model="formData.subject" type="text" :class="inputClasses('subject')" placeholder="Objet de votre message">
            <p v-if="errors.subject" class="tw-mt-1 tw-text-xs tw-text-rose-300">{{ errors.subject }}</p>
          </div>
        </div>

        <div>
          <label for="message" class="tw-mb-2 tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-medium tw-text-slate-200">
            <i class="bi bi-chat-dots-fill tw-text-emerald-300"></i>
            Message
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="5"
            :class="inputClasses('message')"
            placeholder="Votre message..."
          ></textarea>
          <p v-if="errors.message" class="tw-mt-1 tw-text-xs tw-text-rose-300">{{ errors.message }}</p>
        </div>

        <div class="tw-flex tw-justify-center md:tw-justify-start">
          <button
            type="submit"
            class="tw-inline-flex tw-min-w-44 tw-items-center tw-justify-center tw-gap-2 tw-rounded-xl tw-bg-gradient-to-r tw-from-emerald-500 tw-to-cyan-500 tw-px-6 tw-py-3 tw-text-sm tw-font-semibold tw-text-white tw-transition hover:tw--translate-y-1 hover:tw-shadow-lg hover:tw-shadow-emerald-500/30 disabled:tw-cursor-not-allowed disabled:tw-opacity-70"
            :disabled="isSubmitting"
          >
            <span
              v-if="isSubmitting"
              class="tw-h-4 tw-w-4 tw-animate-spin tw-rounded-full tw-border-2 tw-border-white/40 tw-border-t-white"
            ></span>
            <i v-else class="bi bi-send-fill"></i>
            {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
