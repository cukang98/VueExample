import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
const app = createApp(App)

// Create a Vuetify instance
const vuetify = createVuetify()

// Use Vuetify
app.use(vuetify)

// Mount the app
app.mount('#app')
