// Polices et icônes auto-hébergées (plus de CDN bloquant le rendu)
import '@fontsource-variable/inter'
import '@fontsource-variable/space-grotesk'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import reveal from './directives/reveal'

const app = createApp(App)

app.use(router)
app.directive('reveal', reveal)

app.mount('#app')
