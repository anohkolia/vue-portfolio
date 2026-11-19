# vue-portfolio

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Formulaire de contact (EmailJS)

Le formulaire envoie les messages via [EmailJS](https://www.emailjs.com) (offre gratuite : 200 e-mails/mois).
Sans configuration, il ouvre la messagerie du visiteur avec le message pré-rempli (lien `mailto`).

1. **Email Services** → *Add New Service* (ex. Gmail) → noter le **Service ID**.
2. **Email Templates** → *Create New Template* → noter le **Template ID**. Variables disponibles :
   `{{name}}`, `{{email}}`, `{{phone}}`, `{{title}}` (ou `{{subject}}`), `{{message}}`, `{{time}}`.
   EmailJS n'affiche que les variables écrites dans le modèle : le modèle par défaut ne contient ni le
   téléphone ni l'objet. Utiliser le modèle prêt à l'emploi [`docs/emailjs-template.html`](docs/emailjs-template.html)
   (*Content* → *Edit Content* → *Code Editor*) et régler :
   **Subject** = `[Portfolio] {{title}}`, **From Name** = `{{name}}`, **Reply To** = `{{email}}`.
3. **Account** → *General* → noter la **Public Key**.
4. Copier `.env.example` en `.env.local` (ignoré par Git) et renseigner les trois valeurs, puis relancer `npm run dev`.
5. En production (Vercel, Netlify…), déclarer les mêmes variables `VITE_EMAILJS_*` dans les réglages du site, puis redéployer.
6. Conseillé : **Account** → *Security* → limiter l'envoi au domaine du portfolio.
