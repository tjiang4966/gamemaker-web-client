import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {
  VDataTable,
  VDataTableServer,
} from 'vuetify/labs/VDataTable'
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import colors from 'vuetify/lib/util/colors';

// Vue Datepicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import '@/styles/vue-datetime-picker.scss';
import type { IUser } from './shared/interfaces/IUser'

const vuetify = createVuetify({
  components: {
    ...components,
    VDataTable,
    VDataTableServer,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.component('VueDatePicker', VueDatePicker);

app.mount('#gmApp')
