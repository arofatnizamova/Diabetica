// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'

// Flatpickr
import 'flatpickr/dist/flatpickr.min.css'
import flatpickr from 'flatpickr'

// ApexCharts
import ApexCharts from 'apexcharts'

// jQuery
import $ from 'jquery'


import './styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
