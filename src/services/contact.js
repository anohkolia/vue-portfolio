import emailjs from '@emailjs/browser'

// Identifiants EmailJS, lus depuis les variables d'environnement (voir `.env.example`).
// La clé publique est faite pour être exposée côté navigateur : la protection se règle
// dans le tableau de bord EmailJS (Account › Security › domaines autorisés).
const config = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

export const isEmailServiceConfigured = Object.values(config).every(Boolean)

/**
 * Envoie le message du formulaire de contact via EmailJS.
 * Les variables couvrent le modèle « Contact Us » par défaut d'EmailJS
 * ({{name}}, {{email}}, {{title}}, {{message}}, {{time}}) ainsi que des alias usuels.
 */
export const sendContactMessage = ({ name, email, phone, subject, message }) =>
  emailjs.send(
    config.serviceId,
    config.templateId,
    {
      name,
      email,
      phone: phone || 'Non renseigné',
      title: subject,
      subject,
      message,
      time: new Date().toLocaleString('fr-FR', { dateStyle: 'long', timeStyle: 'short' }),
      from_name: name,
      reply_to: email,
    },
    {
      publicKey: config.publicKey,
      // Refuse les navigateurs automatisés (robots de spam basiques)
      blockHeadless: true,
    },
  )

// Lien mailto pré-rempli : solution de repli si EmailJS n'est pas configuré ou échoue.
export const buildMailtoLink = (to, { name, email, phone, subject, message }) => {
  const lines = [`Nom : ${name}`, `E-mail : ${email}`]
  if (phone) lines.push(`Téléphone : ${phone}`)
  lines.push('', message)
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\r\n'))}`
}
