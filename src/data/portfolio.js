// Contenu du portfolio — modifiez ce fichier pour mettre à jour le site
// sans toucher aux composants.

export const profile = {
  firstName: 'Kolia',
  lastName: 'ANOH',
  role: 'Développeur Web Front-end',
  availability: "En recherche d'alternance",
  bio: "Étudiant en développement web passionné par le numérique et les technologies innovantes. Je recherche une alternance pour renforcer mes compétences tout en contribuant à des projets concrets.",
  location: 'Rennes, France',
  locationUrl: 'https://maps.google.com/?q=Rennes',
  phone: '+33765806915',
  phoneLabel: '+33 7 65 80 69 15',
  email: 'contact.anohkolia@gmail.com',
}

// Laisser `url` vide masque le lien (ex. Facebook : ajoutez l'URL de votre page pour l'afficher).
export const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kolia-anoh', icon: 'bi bi-linkedin', handle: 'in/kolia-anoh' },
  { name: 'GitHub', url: 'https://github.com/anohkolia', icon: 'bi bi-github', handle: '@anohkolia' },
  { name: 'Facebook', url: '', icon: 'bi bi-facebook', handle: '' },
].filter((social) => social.url)

export const navItems = [
  { id: 'about', label: 'À propos', icon: 'bi bi-person' },
  { id: 'skill', label: 'Compétences', icon: 'bi bi-stars' },
  { id: 'project', label: 'Projets', icon: 'bi bi-laptop' },
  { id: 'experience', label: 'Expérience', icon: 'bi bi-patch-check' },
  { id: 'formation', label: 'Formation', icon: 'bi bi-mortarboard' },
  { id: 'hobbie', label: 'Hobbies', icon: 'bi bi-emoji-smile' },
  { id: 'contact', label: 'Contact', icon: 'bi bi-envelope-at' },
]

// `brand` = icône de marque (simple-icons, voir src/data/brandIcons.js) ; `icon` = repli Bootstrap Icons.
export const skillCategories = [
  {
    title: 'Front-end',
    icon: 'bi bi-window-sidebar',
    skills: [
      { name: 'HTML5', brand: 'html5', color: '#F06529', desc: 'Structure sémantique' },
      { name: 'CSS3', brand: 'css', color: '#3B9AE1', desc: 'Mise en page & animations' },
      { name: 'JavaScript', brand: 'javascript', color: '#F7DF1E', desc: 'Interactivité' },
      { name: 'Tailwind CSS', brand: 'tailwindcss', color: '#38BDF8', desc: 'CSS utilitaire' },
      { name: 'Vue.js', brand: 'vuedotjs', color: '#4FC08D', desc: 'Framework front-end' },
    ],
  },
  {
    title: 'Back-end',
    icon: 'bi bi-hdd-stack',
    skills: [
      { name: 'PHP', brand: 'php', color: '#8F93D2', desc: 'Programmation serveur' },
      { name: 'Laravel', brand: 'laravel', color: '#FF4C3F', desc: 'Framework PHP' },
      { name: 'Java', brand: 'openjdk', color: '#F29111', desc: 'Applications robustes' },
      { name: 'Python', brand: 'python', color: '#5A9FD4', desc: 'Scripting & data' },
      { name: 'MySQL', brand: 'mysql', color: '#5D9BD1', desc: 'Bases de données' },
    ],
  },
  {
    title: 'Outils & méthodes',
    icon: 'bi bi-tools',
    skills: [
      { name: 'Git', brand: 'git', color: '#F05032', desc: 'Contrôle de version' },
      { name: 'GitHub', brand: 'github', color: '#F8FAFC', desc: 'Collaboration' },
      { name: 'GitLab', brand: 'gitlab', color: '#FC6D26', desc: 'CI/CD' },
      { name: 'Trello', brand: 'trello', color: '#3D9BE9', desc: 'Gestion de projet' },
    ],
  },
  {
    title: 'Design & graphisme',
    icon: 'bi bi-palette',
    skills: [
      { name: 'Photoshop', icon: 'bi bi-brush-fill', color: '#31A8FF', desc: "Retouche d'images" },
      { name: 'Illustrator', icon: 'bi bi-vector-pen', color: '#FF9A00', desc: 'Création vectorielle' },
      { name: 'Canva', icon: 'bi bi-palette-fill', color: '#00C4CC', desc: 'Design rapide' },
      { name: 'Photopea', brand: 'photopea', color: '#2FB3A3', desc: 'Éditeur en ligne' },
    ],
  },
]

export const softSkills = [
  { name: "Esprit d'équipe", icon: 'bi bi-people-fill' },
  { name: 'Motivation', icon: 'bi bi-lightning-charge-fill' },
  { name: 'Écoute active', icon: 'bi bi-ear-fill' },
  { name: 'Respect', icon: 'bi bi-heart-fill' },
  { name: 'Sérieux', icon: 'bi bi-check-circle-fill' },
]

// `image` (optionnel) : capture d'écran du projet, ex. import typekeyShot from '@/assets/projects/typekey.png?w=1200&format=webp'
export const projectsWeb = [
  {
    id: 'typekey',
    title: 'TypeKey',
    description:
      'Plateforme interactive de test de vitesse de frappe. Testez votre vitesse de dactylographie en temps réel et améliorez vos performances.',
    technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'Vite'],
    url: 'https://typekey.netlify.app',
    color: '#FF6B6B',
    icon: 'bi bi-keyboard-fill',
    features: ['Tests de frappe chronométrés', 'Statistiques en temps réel', 'Interface réactive'],
  },
  {
    id: 'amirevent',
    title: 'AmirEvent',
    description:
      "Application privée de gestion d'événements pour une association : créer, acheter, partager et gérer des événements.",
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    url: 'https://amirevent.netlify.app',
    color: '#4FC08D',
    icon: 'bi bi-calendar-event',
    features: ["Création d'événements", 'Gestion des participants', 'Achat de billets'],
  },
]

export const experiences = [
  {
    id: 1,
    title: 'Projet agile (en équipe)',
    company: 'Université de Rennes',
    content:
      "Conception et développement d'une application permettant d'analyser et de présenter des statistiques sur les stations-service françaises.",
    technologies: ['Java', 'Swing', 'GitLab', 'Trello'],
    date: 'Février — mai 2025',
    type: 'project',
  },
  {
    id: 2,
    title: 'Projet de soutenance de licence',
    company: "Université Virtuelle de Côte d'Ivoire",
    content: "Conception et développement d'un portail de gestion d'une communauté.",
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL', 'GitHub'],
    date: 'Juin — septembre 2023',
    type: 'project',
  },
  {
    id: 3,
    title: 'Freelance',
    company: 'Indépendant',
    content: [
      "Installation de systèmes d'exploitation, maintenance informatique",
      'Formation aux logiciels bureautiques (Word, Excel, PowerPoint)',
      'Rédaction et traitement de documents, numérisation, impression',
      'Community management (création et gestion de pages Facebook)',
      'Conception graphique pour entreprises et particuliers (logos, badges, flyers)',
    ],
    technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Photopea', 'Microsoft Office'],
    date: '2022 — 2023',
    type: 'work',
  },
]

export const formations = [
  {
    id: 1,
    title: 'Licence 2 en ISTN',
    school: 'Université de Rennes 1',
    content: 'Informatique, Sciences et Technologies du Numérique',
    date: '2023 — 2024',
    icon: 'bi bi-mortarboard-fill',
  },
  {
    id: 2,
    title: 'Certification',
    school: "Université Virtuelle de Côte d'Ivoire",
    content: 'Développement Web et Mobile',
    date: '2023',
    icon: 'bi bi-patch-check-fill',
  },
  {
    id: 3,
    title: 'Licence en Informatique et Sciences du Numérique',
    school: "Université Virtuelle de Côte d'Ivoire",
    content: "Spécialité : Développement d'applications et e-Services",
    date: '2020 — 2023',
    icon: 'bi bi-mortarboard-fill',
  },
  {
    id: 4,
    title: 'Baccalauréat série D',
    school: 'Collège Moderne CHRIST-ROI, Bonoua (CI)',
    content: '',
    date: '2019 — 2020',
    icon: 'bi bi-award-fill',
  },
]

export const hobbies = [
  {
    id: 1,
    title: 'Informatique',
    content: "Manipulation d'outils informatiques et veille régulière sur les technologies.",
    icon: 'bi bi-pc-display-horizontal',
  },
  {
    id: 2,
    title: 'Jeux vidéo',
    content: 'Je joue principalement à des jeux FPS, aventure, arcade et stratégie.',
    icon: 'bi bi-controller',
  },
  {
    id: 3,
    title: 'Trading',
    content: "Suivi de contenus éducatifs pour apprendre à lire les courbes et analyser le marché.",
    icon: 'bi bi-graph-up-arrow',
  },
]
