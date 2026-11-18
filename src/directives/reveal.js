// Directive `v-reveal` : fait apparaître un élément quand il entre dans l'écran.
// Usage : <div v-reveal> ou <div v-reveal="120"> (délai en ms pour un effet en cascade).
// Désactivée si l'utilisateur préfère réduire les animations.

let observer = null

const getObserver = () => {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  )
  return observer
}

const isSupported = () =>
  typeof window !== 'undefined' &&
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default {
  mounted(el, binding) {
    if (!isSupported()) return
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    el.classList.add('reveal')
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
