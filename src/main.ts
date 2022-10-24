import { createApp } from "vue";
import "element-plus/theme-chalk/index.css";
import ElementPlus from "element-plus";
import App from "./App.vue";
import route from "./router";
import store from "./store";

const app = createApp(App);
app.use(ElementPlus);
app.use(store).use(route.router).mount("#app");
