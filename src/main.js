import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.css'
import '@/assets/scss/main.scss'

createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .mount('#app')
