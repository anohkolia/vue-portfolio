<script setup>
import CustomCursor from './components/CustomCursor.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteNav from './components/SiteNav.vue'
</script>

<template>
  <SiteNav />
  <div class="site-shell">
    <RouterView />
    <SiteFooter />
  </div>
  <CustomCursor />
</template>

<style scoped>
/* Le contenu se décale de la largeur de la barre latérale (0 sur mobile) */
.site-shell {
  padding-left: var(--sidebar-w);
}
</style>
