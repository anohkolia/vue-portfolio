import { onUnmounted, watch } from 'vue'

// Gère ce qu'une couche modale (menu mobile, visionneuse…) doit faire à l'ouverture :
// - bloque le scroll de la page (sans décalage dû à la barre de défilement),
// - rend le reste de l'application inerte (ni focusable, ni cliquable),
// - restitue le focus à l'élément d'origine à la fermeture,
// - ferme la couche avec la touche Échap.
let openLayers = 0

const lockPage = () => {
  if (openLayers++ > 0) return
  const root = document.documentElement
  const scrollbar = window.innerWidth - root.clientWidth
  root.style.overflow = 'hidden'
  if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`
  document.getElementById('app')?.setAttribute('inert', '')
}

const unlockPage = () => {
  if (--openLayers > 0) return
  const root = document.documentElement
  root.style.overflow = ''
  root.style.paddingRight = ''
  document.getElementById('app')?.removeAttribute('inert')
}

export function useModalLayer(isOpen, { onEscape } = {}) {
  let previousFocus = null
  let active = false

  const onKeydown = (event) => {
    if (event.key === 'Escape' && onEscape) {
      event.preventDefault()
      onEscape()
    }
  }

  const activate = () => {
    if (active) return
    active = true
    previousFocus = document.activeElement
    lockPage()
    window.addEventListener('keydown', onKeydown)
  }

  const deactivate = () => {
    if (!active) return
    active = false
    unlockPage()
    window.removeEventListener('keydown', onKeydown)
    if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
      previousFocus.focus({ preventScroll: true })
    }
    previousFocus = null
  }

  watch(isOpen, (open) => (open ? activate() : deactivate()))
  onUnmounted(deactivate)
}
