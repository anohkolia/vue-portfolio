<script setup>
import avatar from '@/assets/profile.png?w=176&h=176&fit=cover&position=top&format=webp&quality=80'

// Avatar rond avec anneau en dégradé ; la taille est fixée par le parent (classe sur le composant).
defineProps({
  // Pastille verte « disponible »
  status: { type: Boolean, default: false },
})
</script>

<template>
  <span class="profile-avatar">
    <span class="profile-avatar-photo">
      <img :src="avatar" alt="" width="88" height="88" decoding="async">
    </span>
    <span v-if="status" class="profile-avatar-status" aria-hidden="true"></span>
  </span>
</template>

<style scoped>
.profile-avatar {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  border-radius: 9999px;
  padding: 2px;
  background: linear-gradient(135deg, #6ee7b7, rgba(255, 255, 255, 0.15), #67e8f9);
}

.profile-avatar-photo {
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: inherit;
  background: #0f172a;
}

/* La photo source est cadrée large : on zoome sur le visage */
.profile-avatar-photo img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: scale(1.55);
  transform-origin: 47% 28%;
}

.profile-avatar-status {
  position: absolute;
  bottom: 1px;
  right: 1px;
  height: 22%;
  width: 22%;
  min-height: 0.625rem;
  min-width: 0.625rem;
  border-radius: 9999px;
  background: #34d399;
  box-shadow: 0 0 0 2.5px #020617;
}
</style>
