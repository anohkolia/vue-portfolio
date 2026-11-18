<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

// Curseur décoratif (anneau qui suit la souris). Uniquement avec une souris :
// jamais sur mobile/tablette tactile, et sans anneau animé si l'utilisateur
// préfère réduire les animations.
const INTERACTIVE = 'a, button, [role="button"], label, summary, select, input, textarea'

const ring = ref(null)
const showRing = ref(false)
const isHover = ref(false)
const isPressed = ref(false)
const isHidden = ref(true)

let finePointer = null
let reducedMotion = null
let frame = 0
let x = 0
let y = 0
let pressTimer = 0

const paint = () => {
  frame = 0
  if (ring.value) ring.value.style.translate = `${x}px ${y}px`
}

const onMove = (event) => {
  x = event.clientX
  y = event.clientY
  isHidden.value = false
  if (!frame) frame = requestAnimationFrame(paint)
}

const onOver = (event) => {
  isHover.value = Boolean(event.target.closest?.(INTERACTIVE))
}

const onDown = () => {
  isPressed.value = true
  clearTimeout(pressTimer)
  pressTimer = setTimeout(() => (isPressed.value = false), 350)
}

const onLeave = () => {
  isHidden.value = true
}

const listen = (add) => {
  const method = add ? 'addEventListener' : 'removeEventListener'
  window[method]('mousemove', onMove, { passive: true })
  window[method]('mouseover', onOver, { passive: true })
  window[method]('mousedown', onDown, { passive: true })
  document.documentElement[method]('mouseleave', onLeave)
}

const sync = () => {
  const fine = finePointer.matches
  document.body.classList.toggle('has-custom-cursor', fine)
  const next = fine && !reducedMotion.matches
  if (next !== showRing.value) {
    showRing.value = next
    listen(next)
  }
}

onMounted(() => {
  finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  finePointer.addEventListener('change', sync)
  reducedMotion.addEventListener('change', sync)
  sync()
})

onUnmounted(() => {
  finePointer?.removeEventListener('change', sync)
  reducedMotion?.removeEventListener('change', sync)
  if (showRing.value) listen(false)
  document.body.classList.remove('has-custom-cursor')
  cancelAnimationFrame(frame)
  clearTimeout(pressTimer)
})
</script>

<template>
  <div
    v-if="showRing"
    ref="ring"
    class="cursor-ring"
    :class="{ 'is-hover': isHover, 'is-pressed': isPressed, 'is-hidden': isHidden }"
    aria-hidden="true"
  ></div>
</template>
