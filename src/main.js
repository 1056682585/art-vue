import { createApp } from 'vue'
import App from './App.vue'
//引入element-ui
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'


// 添加element
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
