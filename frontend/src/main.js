import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import vuetify from '@/plugins/vuetify' // path to vuetify export

createApp(App).use(store).use(router).mount("#app");
