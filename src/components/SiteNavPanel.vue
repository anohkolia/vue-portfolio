<script setup>
import ProfileAvatar from '@/components/ProfileAvatar.vue'
import { navItems, profile, socials } from '@/data/portfolio'

// Contenu de la navigation, partagé par la barre latérale (bureau) et le tiroir (mobile).
// La mise en page dépend de la largeur disponible (container queries) :
//  - étroit (< 14rem)  → rail compact : icônes + libellés courts ;
//  - large  (≥ 14rem)  → barre complète : profil, disponibilité, liens, contact.
defineProps({
  // Section mise en avant ; `null` hors de la page d'accueil
  activeSection: { type: String, default: null },
  hrefFor: { type: Function, required: true },
})

const emit = defineEmits(['navigate'])
</script>

<template>
  <div class="panel-root">
    <div class="panel">
      <div class="panel-top">
        <a :href="hrefFor('about')" class="profile" @click="emit('navigate', $event, 'about')">
          <ProfileAvatar class="avatar" status />
          <span class="profile-text">
            <span class="profile-name">{{ profile.firstName }} {{ profile.lastName }}</span>
            <span class="profile-role">{{ profile.role }}</span>
          </span>
        </a>
        <slot name="action" />
      </div>

      <nav class="panel-nav" aria-label="Navigation principale">
        <ul>
          <li v-for="(item, index) in navItems" :key="item.id" class="nav-item" :style="{ '--i': index }">
            <a
              :href="hrefFor(item.id)"
              class="nav-link"
              :class="{ 'is-active': activeSection === item.id }"
              :aria-current="activeSection === item.id ? 'location' : undefined"
              @click="emit('navigate', $event, item.id)"
            >
              <span class="nav-icon"><i :class="item.icon" aria-hidden="true"></i></span>
              <span class="nav-label">{{ item.label }}</span>
              <span class="nav-index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="panel-bottom">
        <p class="availability">
          <span class="tw-relative tw-flex tw-h-2 tw-w-2" aria-hidden="true">
            <span class="tw-absolute tw-inline-flex tw-h-full tw-w-full tw-animate-ping tw-rounded-full tw-bg-emerald-400 tw-opacity-60"></span>
            <span class="tw-relative tw-inline-flex tw-h-2 tw-w-2 tw-rounded-full tw-bg-emerald-400"></span>
          </span>
          {{ profile.availability }}
        </p>
        <a :href="hrefFor('contact')" class="btn btn-primary panel-cta" @click="emit('navigate', $event, 'contact')">
          Me contacter
          <i class="bi bi-arrow-right" aria-hidden="true"></i>
        </a>
        <ul class="socials" aria-label="Réseaux sociaux">
          <li v-for="social in socials" :key="social.name">
            <a :href="social.url" target="_blank" rel="noopener noreferrer" class="social-link">
              <i :class="social.icon" aria-hidden="true"></i>
              <span class="social-label">{{ social.name }}</span>
              <span class="visually-hidden">(nouvel onglet)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ---------- Rail compact (par défaut) ---------- */
.panel-root {
  container: sidenav / inline-size;
  height: 100%;
}

.panel {
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 1.25rem 0.5rem;
  scrollbar-width: none;
}

.panel::-webkit-scrollbar {
  display: none;
}

.panel-top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.profile {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 0.875rem;
  border-radius: 1rem;
}

.avatar {
  height: 3rem;
  width: 3rem;
  transition: transform 300ms ease;
}

/* Texte du profil : masqué visuellement en mode rail, mais lu par les lecteurs d'écran */
.profile-text,
.social-label,
.visually-hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  margin: -1px;
  padding: 0;
  border: 0;
}

.availability {
  display: none;
}

.panel-nav {
  margin-top: 1.5rem;
}

.panel-nav ul {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.875rem;
  padding: 0.375rem 0.125rem;
  color: #94a3b8;
  transition: color 200ms ease, background-color 200ms ease;
}

.nav-icon {
  display: inline-flex;
  height: 2.25rem;
  width: 2.25rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  font-size: 1.0625rem;
  transition: color 200ms ease, background-color 200ms ease, box-shadow 200ms ease;
}

.nav-label {
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1rem;
  text-align: center;
}

.nav-index {
  display: none;
}

/* Indicateur de la section active, collé au bord du panneau */
.nav-link::before {
  content: '';
  position: absolute;
  left: -0.5rem;
  top: 50%;
  height: 1.75rem;
  width: 3px;
  border-radius: 0 3px 3px 0;
  background: linear-gradient(180deg, #34d399, #22d3ee);
  opacity: 0;
  transform: translateY(-50%) scaleY(0.4);
  transition: opacity 250ms ease, transform 250ms ease;
}

.nav-link.is-active {
  color: #fff;
}

.nav-link.is-active::before {
  opacity: 1;
  transform: translateY(-50%) scaleY(1);
}

.nav-link.is-active .nav-icon {
  background: rgba(52, 211, 153, 0.14);
  color: #6ee7b7;
  box-shadow: inset 0 0 0 1px rgba(110, 231, 183, 0.25);
}

@media (hover: hover) {
  .profile:hover .avatar {
    transform: rotate(-6deg) scale(1.04);
  }

  .nav-link:not(.is-active):hover {
    color: #fff;
  }

  .nav-link:not(.is-active):hover .nav-icon {
    background: rgba(255, 255, 255, 0.06);
  }

  .social-link:hover {
    border-color: rgba(110, 231, 183, 0.4);
    background: rgba(52, 211, 153, 0.1);
    color: #fff;
  }
}

.panel-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1.25rem;
}

.panel-cta {
  display: none;
}

.socials {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-link {
  display: inline-flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.8125rem;
  font-weight: 600;
  color: #e2e8f0;
  transition: color 200ms ease, background-color 200ms ease, border-color 200ms ease;
}

/* Écrans peu hauts (tablette paysage) : rail resserré */
@media (max-height: 720px) {
  .panel-nav {
    margin-top: 1rem;
  }

  .panel-nav ul {
    gap: 0;
  }

  .nav-icon {
    height: 2rem;
    width: 2rem;
  }
}

/* ---------- Barre complète (≥ 14rem de large) ---------- */
@container sidenav (min-width: 14rem) {
  .panel {
    padding: 1.5rem 1.25rem;
  }

  .panel-top {
    justify-content: space-between;
  }

  .profile {
    flex: 1;
  }

  .avatar {
    height: 3.25rem;
    width: 3.25rem;
  }

  .profile-text {
    position: static;
    display: flex;
    height: auto;
    width: auto;
    min-width: 0;
    flex-direction: column;
    overflow: visible;
    clip: auto;
    margin: 0;
    white-space: normal;
  }

  .profile-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: theme('fontFamily.display');
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
  }

  .profile-role {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.75rem;
    color: #94a3b8;
  }

  .availability {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #a7f3d0;
  }

  .panel-nav {
    margin-top: 1.75rem;
  }

  .panel-nav ul {
    gap: 0.125rem;
  }

  .nav-link {
    flex-direction: row;
    gap: 0.875rem;
    padding: 0.3125rem 0.625rem 0.3125rem 0.3125rem;
  }

  .nav-link::before {
    left: -1.25rem;
  }

  .nav-link.is-active {
    background: rgba(255, 255, 255, 0.05);
  }

  .nav-label {
    flex: 1;
    font-size: 0.9375rem;
    line-height: 1.25rem;
    text-align: left;
  }

  .nav-index {
    display: inline;
    font-family: theme('fontFamily.display');
    font-size: 0.6875rem;
    color: #475569;
  }

  .nav-link.is-active .nav-index {
    color: #6ee7b7;
  }

  .panel-bottom {
    align-items: stretch;
  }

  .panel-cta {
    display: inline-flex;
  }

  .socials {
    flex-direction: row;
  }

  .socials li {
    flex: 1;
  }

  .social-link {
    width: 100%;
  }

  .social-label {
    position: static;
    height: auto;
    width: auto;
    overflow: visible;
    clip: auto;
    margin: 0;
  }

  @media (hover: hover) {
    .nav-link:not(.is-active):hover {
      background: rgba(255, 255, 255, 0.04);
    }
  }
}
</style>
