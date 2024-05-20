import { createApp } from "vue";
import App from "./App.vue";
//引入element-ui
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
