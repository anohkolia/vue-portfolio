import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
// Import Bootstrap Vue 3
import BootstrapVue3 from 'bootstrap-vue-3'

// Import BootstrapVue CSS
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Import Bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle.min'

const app = createApp(App)

app.use(BootstrapVue3)

app.use(router)

app.mount('#app')
