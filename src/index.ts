import type { App } from "vue";
import { MlButton, MlIcon, MlResult } from "./components";
import "@/assets/css/index.scss";

export default {
  install: (app: App) => {
    app.component("MlButton", MlButton);
    app.component("MlIcon", MlIcon);
    app.component("MlResult", MlResult);
  },
};

export { MlButton, MlIcon, MlResult };
