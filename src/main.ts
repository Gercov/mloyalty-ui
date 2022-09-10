import { createApp } from "vue";
import App from "./App.vue";
import MloyaltyPlugin from ".";

const app = createApp(App);
app.use(MloyaltyPlugin);
app.mount("#app");
