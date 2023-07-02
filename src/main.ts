import { createApp } from 'vue'
import App from '@/App.vue'
import '@/theme/style.scss'
import router from '@/router/index'
import authSwitch from '@/theme/authSwitch'
authSwitch()

const app = createApp(App)
app.use(router)
app.mount('#app')
