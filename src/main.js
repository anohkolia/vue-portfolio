import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// import bootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';


const app = createApp(App);

app.use(router);

app.mount('#app');
