import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import "@/assets/style.css";
import "normalize.css";

import store from "./store";


const app = createApp(App);
app.use(store);
app.use(router);
app.mount("body");
