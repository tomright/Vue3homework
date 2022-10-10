import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./components/router";
import store from './store/index'

createApp(App).use(router).use(store).mount("#app");
