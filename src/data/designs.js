// Créations graphiques. Les originaux (jusqu'à 7 Mo chacun) sont redimensionnés et
// convertis en WebP au build par vite-imagetools :
//  - `thumb` : vignette légère pour les albums et la pellicule,
//  - `full`  : version haute définition chargée uniquement dans la visionneuse.
const thumbs = import.meta.glob('../assets/designs/*.png', {
  eager: true,
  import: 'default',
  query: { w: 640, format: 'webp', quality: 72 },
})

const fulls = import.meta.glob('../assets/designs/*.png', {
  eager: true,
  import: 'default',
  query: { w: 1800, format: 'webp', quality: 82 },
})

const image = (file, alt) => {
  const key = `../assets/designs/${file}.png`
  return { id: file, alt, thumb: thumbs[key], full: fulls[key] }
}

const numbered = (prefix, count, label) =>
  Array.from({ length: count }, (_, i) => image(`${prefix}-${i + 1}`, `${label} ${i + 1}`))

export const designCategories = [
  {
    id: 'logo',
    title: 'Logos',
    icon: 'bi bi-pentagon-fill',
    color: '#A78BFA',
    images: [
      image('logo-0', 'Logo CC'),
      image('logo-1', 'Logo Ivice SARL'),
      image('logo-2', 'Logo EASI'),
      image('logo-3', 'Logo CAB Services'),
      image('logo-4', "Logo Trésor d'Estrella"),
      image('logo-5', 'Logo Cosméthique'),
      image('logo-6', 'Logo CAB Services — variante'),
      image('logo-7', 'Logo La Tata'),
    ],
  },
  {
    id: 'flyer',
    title: 'Flyers',
    icon: 'bi bi-file-earmark-richtext-fill',
    color: '#4ADE80',
    images: numbered('flyer', 14, 'Flyer'),
  },
  {
    id: 'etiquette',
    title: 'Étiquettes produit',
    icon: 'bi bi-tag-fill',
    color: '#FBBF24',
    images: numbered('etiquette', 2, 'Étiquette produit'),
  },
]

export const designCount = designCategories.reduce((total, category) => total + category.images.length, 0)
