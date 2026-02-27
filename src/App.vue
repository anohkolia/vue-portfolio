<script setup>
import { onMounted, onUnmounted } from 'vue'
import HeaderNavbar from './components/HeaderNavbar.vue'

const updateCursor = (e) => {
  const cursor = document.getElementById('cursor')
  if (cursor) {
    const halfWidth = cursor.offsetWidth / 4
    const halfHeight = cursor.offsetHeight / 4
    cursor.style.left = `${e.clientX + halfWidth}px`
    cursor.style.top = `${e.clientY + halfHeight}px`
  }
}

const handleClick = () => {
  const cursor = document.getElementById('cursor')
  if (cursor) {
    cursor.classList.add('bulle')
    setTimeout(() => {
      cursor.classList.remove('bulle')
    }, 500)
  }
}

const smoothScroll = (e) => {
  const target = e.target.getAttribute('href')
  if (target && target.startsWith('#')) {
    e.preventDefault()
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}

onMounted(() => {
  document.body.addEventListener('mousemove', updateCursor)
  document.body.addEventListener('click', handleClick)

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', smoothScroll)
  })
})

onUnmounted(() => {
  document.body.removeEventListener('mousemove', updateCursor)
  document.body.removeEventListener('click', handleClick)

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.removeEventListener('click', smoothScroll)
  })
})
</script>

<template>
  <HeaderNavbar />
  <RouterView />
  <div id="cursor" class="cursor" aria-hidden="true"></div>
</template>
