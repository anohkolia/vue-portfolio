import { onMounted, onUnmounted, readonly, ref } from 'vue'

// État de scroll partagé : un seul écouteur (throttlé via requestAnimationFrame)
// quel que soit le nombre de composants abonnés (header, bouton retour en haut…).
const y = ref(0)
const progress = ref(0)
let subscribers = 0
let frame = 0

const measure = () => {
  frame = 0
  const max = document.documentElement.scrollHeight - window.innerHeight
  y.value = window.scrollY
  progress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
}

const onScroll = () => {
  if (!frame) frame = requestAnimationFrame(measure)
}

export function useScrollState() {
  onMounted(() => {
    if (subscribers++ === 0) {
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })
    }
    measure()
  })

  onUnmounted(() => {
    if (--subscribers === 0) {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
      frame = 0
    }
  })

  return { y: readonly(y), progress: readonly(progress) }
}
