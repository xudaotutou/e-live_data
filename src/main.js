import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import { PiniaVuePlugin } from "pinia";
import 'normalize.css/normalize.css'
createApp(App)
  .use(router)
  .use(PiniaVuePlugin)
  .mount("#app");
